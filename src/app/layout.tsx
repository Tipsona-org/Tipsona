import type { Metadata, Viewport } from "next";
import { preload } from "react-dom";

import "./globals.css";

import { IconSprite } from "@/components/layout/icon-sprite";
import { LogoSymbols } from "@/components/layout/logo-symbols";
import { SiteScripts } from "@/components/site-scripts";
import { INDEXABLE, SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Tipsona",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/assets/img/favicon.svg", type: "image/svg+xml" }
    ],
    apple: "/apple-touch-icon.png"
  },
  ...(!INDEXABLE && { robots: { index: false, follow: false } })
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FBF8F4"
};

// Motion gate: hide intro elements only when motion is allowed, and reveal
// everything after 3s if the animation code never arrives. Runs before paint.
const MOTION_GATE = `(function (d) {
  var r = d.documentElement; r.classList.add('js');
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    r.classList.add('motion');
    setTimeout(function () { if (!r.classList.contains('motion-ready')) r.classList.remove('motion'); }, 3000);
  }
})(document);`;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  preload("/assets/fonts/dm-sans-latin.woff2", { as: "font", type: "font/woff2", crossOrigin: "" });

  return (
    // The motion gate adds classes to <html> before React hydrates.
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: MOTION_GATE }} />
      </head>
      <body>
        <IconSprite />
        <LogoSymbols />
        {children}
        <SiteScripts />
      </body>
    </html>
  );
}
