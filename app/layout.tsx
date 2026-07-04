import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alex The Phone Guy | Sell Phones & Electronics for Cash in Omaha",
  description:
    "Sell your used, broken, locked, or new phones, laptops, tablets, consoles, and electronics for cash in Omaha, Bellevue, Council Bluffs, Lincoln, and surrounding areas. Same-day meetups available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=AW-18165696852"
    strategy="afterInteractive"
  />

  <Script id="google-ads-tag" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-18165696852');
    `}
  </Script>

<Script id="google-click-to-call">
  {`
    function gtag_report_conversion(url) {
      var callback = function () {
        if (typeof(url) != 'undefined') {
          window.location = url;
        }
      };

      gtag('event', 'conversion', {
        'send_to': 'AW-18165696852/nZTOCOiFtcoCENSsitZD',
        'value': 1.0,
        'currency': 'USD',
        'event_callback': callback
      });

      return false;
    }
  `}
</Script>

<Script id="track-phone-clicks" strategy="afterInteractive">
  {`
    document.addEventListener('click', function(event) {
      var link = event.target.closest('a[href^="tel:"]');

      if (link) {
        event.preventDefault();
        gtag_report_conversion(link.href);
      }
    });
  `}
</Script>

  {children}
</body>
    </html>
  );
}
