import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Connected Technologies | AI-Powered Solutions for Modern Businesses",
  description:
    "We help businesses identify and implement AI opportunities that drive real results. AI strategy, digital marketing, and web development — all under one roof.",
  openGraph: {
    title: "Connected Technologies | AI-Powered Solutions for Modern Businesses",
    description:
      "We help businesses identify and implement AI opportunities that drive real results.",
    type: "website",
    url: "https://www.connectedtech.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
