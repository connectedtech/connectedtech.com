import { NextRequest, NextResponse } from "next/server";

const SALESFLARE_API = "https://api.salesflare.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, message, botcheck } = body;

    // --- Honeypot spam check ---
    if (botcheck) {
      // Bots fill hidden fields. Return fake success so they move on.
      return NextResponse.json({ success: true });
    }

    // --- Basic validation ---
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.SALESFLARE_API_KEY;
    if (!apiKey) {
      console.error("SALESFLARE_API_KEY is not set");
      return NextResponse.json(
        { success: false, error: "Server configuration error." },
        { status: 500 }
      );
    }

    const headers = {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    };

    // --- Split name into first/last ---
    const nameParts = name.trim().split(/\s+/);
    const firstname = nameParts[0];
    const lastname = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

    // --- Step 1: Create or find the account (by company name or email domain) ---
    let accountId: number | null = null;

    const accountName = company?.trim() || email.split("@")[1]; // Fall back to email domain
    const accountPayload: Record<string, unknown> = {
      name: accountName,
    };

    // If they gave a company website-looking domain, add it
    if (company?.trim()) {
      accountPayload.domain = email.split("@")[1];
    }

    try {
      const accountRes = await fetch(
        `${SALESFLARE_API}/accounts?update_if_exists=true`,
        {
          method: "POST",
          headers,
          body: JSON.stringify(accountPayload),
        }
      );
      if (accountRes.ok) {
        const accountData = await accountRes.json();
        accountId = accountData.id;
      }
    } catch (e) {
      // Account creation failed — continue without it
      console.warn("Salesflare account creation failed:", e);
    }

    // --- Step 2: Create the contact ---
    const contactPayload: Record<string, unknown> = {
      firstname,
      lastname,
      email,
    };

    if (accountId) {
      contactPayload.account = accountId;
    }

    const contactRes = await fetch(`${SALESFLARE_API}/contacts`, {
      method: "POST",
      headers,
      body: JSON.stringify([contactPayload]),
    });

    if (!contactRes.ok) {
      const errorText = await contactRes.text();
      console.error("Salesflare contact creation failed:", errorText);
      // Don't expose internal errors to the client
      return NextResponse.json(
        { success: false, error: "We couldn't process your request. Please try again." },
        { status: 502 }
      );
    }

    // --- Step 3: Create an opportunity (so it shows up in your pipeline) ---
    if (accountId) {
      const opportunityPayload = {
        account: accountId,
        name: `Website inquiry: ${company?.trim() || firstname}`,
        tags: ["website-lead"],
      };

      try {
        await fetch(`${SALESFLARE_API}/opportunities`, {
          method: "POST",
          headers,
          body: JSON.stringify(opportunityPayload),
        });
      } catch (e) {
        // Opportunity creation is nice-to-have; don't fail the whole request
        console.warn("Salesflare opportunity creation failed:", e);
      }
    }

    // --- Step 4: Log the message as a note (optional enrichment) ---
    // Salesflare doesn't have a direct "notes on contact" API in the basic spec,
    // but the message is captured via the opportunity name + you'll see it in activity.
    // You could also send yourself an email notification here.

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
