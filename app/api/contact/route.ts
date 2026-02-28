import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const SF = "https://api.salesflare.com";

// ── Salesflare helpers ────────────────────────────────────────────────────────

function sfHeaders(key: string) {
  return { Authorization: `Bearer ${key}`, "Content-Type": "application/json" };
}

async function sfPost(path: string, body: unknown, key: string) {
  const res = await fetch(`${SF}${path}`, {
    method: "POST",
    headers: sfHeaders(key),
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`SF ${path} → ${res.status}: ${text}`);
  }
  return res.json();
}

// ── Email helpers ─────────────────────────────────────────────────────────────

async function sendNotification(subject: string, html: string) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    console.log("RESEND_API_KEY not set — skipping email notification");
    return;
  }
  try {
    const resend = new Resend(resendKey);
    await resend.emails.send({
      from: "noreply@connectedtech.com",
      to: "sdanforth@connectedtech.com",
      subject,
      html,
    });
  } catch (e) {
    console.warn("Email notification failed:", e);
  }
}

function row(label: string, value: string | undefined) {
  if (!value) return "";
  return `<tr>
    <td style="padding:8px 0;color:#64748b;width:150px;vertical-align:top">${label}</td>
    <td style="padding:8px 0;font-weight:600;color:#0f172a">${value}</td>
  </tr>`;
}

function buildIntakeEmail(d: {
  name: string; email: string; company: string; phone?: string;
  services: string[]; timeline: string; budget: string;
  projectDescription: string;
}) {
  return `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#0f172a">
    <div style="background:#6366f1;color:white;padding:16px 24px;border-radius:8px 8px 0 0;margin-bottom:0">
      <h2 style="margin:0;font-size:18px">New Project Inquiry</h2>
    </div>
    <div style="border:1px solid #e2e8f0;border-top:none;border-radius:0 0 8px 8px;padding:24px">
      <table style="width:100%;border-collapse:collapse">
        ${row("Name", d.name)}
        ${row("Email", `<a href="mailto:${d.email}" style="color:#6366f1">${d.email}</a>`)}
        ${row("Company", d.company)}
        ${d.phone ? row("Phone", d.phone) : ""}
      </table>
      <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0">
      <table style="width:100%;border-collapse:collapse">
        ${row("Services", d.services.join(", "))}
        ${row("Timeline", d.timeline)}
        ${row("Budget", d.budget)}
      </table>
      <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0">
      <p style="margin:0 0 8px;color:#64748b;font-size:14px">Project description</p>
      <p style="margin:0;background:#f8fafc;border-left:3px solid #6366f1;padding:16px;border-radius:4px;white-space:pre-wrap;font-size:14px;line-height:1.6">${d.projectDescription}</p>
    </div>
  </div>`;
}

function buildGeneralEmail(d: {
  name: string; email: string; company?: string; message: string;
}) {
  return `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#0f172a">
    <div style="background:#64748b;color:white;padding:16px 24px;border-radius:8px 8px 0 0">
      <h2 style="margin:0;font-size:18px">New Contact Message</h2>
    </div>
    <div style="border:1px solid #e2e8f0;border-top:none;border-radius:0 0 8px 8px;padding:24px">
      <table style="width:100%;border-collapse:collapse">
        ${row("Name", d.name)}
        ${row("Email", `<a href="mailto:${d.email}" style="color:#6366f1">${d.email}</a>`)}
        ${d.company ? row("Company", d.company) : ""}
      </table>
      <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0">
      <p style="margin:0 0 8px;color:#64748b;font-size:14px">Message</p>
      <p style="margin:0;background:#f8fafc;border-left:3px solid #94a3b8;padding:16px;border-radius:4px;white-space:pre-wrap;font-size:14px;line-height:1.6">${d.message}</p>
    </div>
  </div>`;
}

// ── Salesflare: create account + contact + opportunity + note ─────────────────

async function pushToSalesflare(
  apiKey: string,
  contact: { firstname: string; lastname: string; email: string; phone?: string },
  accountName: string,
  emailDomain: string,
  opportunityName: string,
  noteText: string,
  formType: string,
) {
  let accountId: number | undefined;
  let contactId: number | undefined;

  // 1. Account
  try {
    const acct = await sfPost(
      "/accounts?update_if_exists=true",
      { name: accountName, domain: emailDomain },
      apiKey,
    );
    accountId = acct.id;
  } catch (e) {
    console.warn("SF account:", e);
  }

  // 2. Contact
  try {
    const payload: Record<string, unknown> = {
      firstname: contact.firstname,
      lastname: contact.lastname,
      email: [contact.email],
    };
    if (contact.phone) payload.phone_number = [contact.phone];
    if (accountId) payload.account = accountId;

    const result = await sfPost("/contacts", [payload], apiKey);
    contactId = Array.isArray(result) ? result[0]?.id : result?.id;
  } catch (e) {
    console.warn("SF contact:", e);
  }

  // 3. Opportunity (intake only — general is just a lead contact)
  let opportunityId: number | undefined;
  if (formType === "intake" && accountId) {
    try {
      const opp = await sfPost(
        "/opportunities",
        { name: opportunityName, account: accountId, tags: ["website-intake"] },
        apiKey,
      );
      opportunityId = opp.id;
    } catch (e) {
      console.warn("SF opportunity:", e);
    }
  }

  // 4. Note with full details
  try {
    const notePayload: Record<string, unknown> = { description: noteText };
    if (contactId) notePayload.contact_ids = [contactId];
    if (accountId) notePayload.account_ids = [accountId];
    if (opportunityId) notePayload.opportunity_ids = [opportunityId];
    await sfPost("/notes", notePayload, apiKey);
  } catch (e) {
    console.warn("SF note:", e);
  }
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { formType = "general", botcheck } = body;

    if (botcheck) return NextResponse.json({ success: true });

    const apiKey = process.env.SALESFLARE_API_KEY;
    if (!apiKey) {
      console.error("SALESFLARE_API_KEY not set");
      return NextResponse.json({ success: false, error: "Server configuration error." }, { status: 500 });
    }

    // ── Intake form ──────────────────────────────────────────────────────────
    if (formType === "intake") {
      const { name, email, company, phone, services, timeline, budget, projectDescription } = body as {
        name: string; email: string; company: string; phone?: string;
        services: string[]; timeline: string; budget: string;
        projectDescription: string;
      };

      if (!name || !email || !company || !projectDescription || !timeline || !budget) {
        return NextResponse.json({ success: false, error: "Please fill in all required fields." }, { status: 400 });
      }

      const [firstname, ...rest] = name.trim().split(/\s+/);
      const lastname = rest.join(" ");
      const emailDomain = email.split("@")[1] ?? "";

      const noteText = [
        "PROJECT INTAKE FORM",
        "",
        `Services: ${services?.join(", ") ?? "—"}`,
        `Timeline: ${timeline}`,
        `Budget: ${budget}`,
        "",
        "Project description:",
        projectDescription,
      ].join("\n");

      await pushToSalesflare(
        apiKey,
        { firstname, lastname, email, phone },
        company,
        emailDomain,
        `Project Inquiry — ${company}`,
        noteText,
        "intake",
      );

      await sendNotification(
        `New Project Inquiry — ${company}`,
        buildIntakeEmail({ name, email, company, phone, services: services ?? [], timeline, budget, projectDescription }),
      );

      return NextResponse.json({ success: true });
    }

    // ── General contact form ─────────────────────────────────────────────────
    const { name, email, company, message } = body as {
      name: string; email: string; company?: string; message: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Name, email, and message are required." }, { status: 400 });
    }

    const [firstname, ...rest] = name.trim().split(/\s+/);
    const lastname = rest.join(" ");
    const accountName = company?.trim() || email.split("@")[1] || email;
    const emailDomain = email.split("@")[1] ?? "";

    await pushToSalesflare(
      apiKey,
      { firstname, lastname, email },
      accountName,
      emailDomain,
      "",
      `CONTACT FORM\n\n${message}`,
      "general",
    );

    await sendNotification(
      `New Contact Message from ${name}`,
      buildGeneralEmail({ name, email, company, message }),
    );

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ success: false, error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
