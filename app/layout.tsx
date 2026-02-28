import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const PIWIK_CONTAINER_ID = process.env.NEXT_PUBLIC_PIWIK_CONTAINER_ID;
const PIWIK_CONTAINER_URL = process.env.NEXT_PUBLIC_PIWIK_CONTAINER_URL;

export const metadata: Metadata = {
  title: "Connected Technologies | AI-Powered Marketing & Technology Solutions",
  description:
    "Digital marketing, web and software development, and AI automation — built to grow your business. Strategy through execution, all under one roof.",
  openGraph: {
    title: "Connected Technologies | AI-Powered Marketing & Technology Solutions",
    description:
      "Digital marketing, web and software development, and AI automation — built to grow your business.",
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

        {/* Vercel Analytics & Speed Insights */}
        <Analytics />
        <SpeedInsights />

        {/* Google Analytics 4 */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Piwik Pro */}
        {PIWIK_CONTAINER_ID && PIWIK_CONTAINER_URL && (
          <Script id="piwik-pro" strategy="afterInteractive">
            {`
              (function(window, document, dataLayerName, id) {
                window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});
                var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');
                function stg_r(dataLayerName,currentTimestamp){return dataLayerName+"&stg_t="+currentTimestamp}
                tags.async=!0,tags.src="${PIWIK_CONTAINER_URL}/"+id+".js"+"?"+stg_r(dataLayerName,(new Date).getTime()),scripts.parentNode.insertBefore(tags,scripts);
                !function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);"string"==typeof a[0]&&window[dataLayerName].push({event:n+"."+i+":"+a[0],parameters:[].slice.call(a,1)})}}(i[c])}(window,"ppms",["tm","cm"]);
              })(window, document, 'dataLayer', '${PIWIK_CONTAINER_ID}');
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
