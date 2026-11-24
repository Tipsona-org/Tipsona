import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // /products/ rather than /products, the addresses the site has always used
  trailingSlash: true,
  poweredByHeader: false,

  // Pages moved from /name.html to /name/ with the move to Next.js.
  // Query strings (?product=tipstore) carry over.
  async redirects() {
    return [
      { source: "/products.html", destination: "/products/", permanent: true },
      { source: "/waitlist.html", destination: "/waitlist/", permanent: true },
      { source: "/design-system.html", destination: "/design-system/", permanent: true },
      { source: "/tipstore/pricing.html", destination: "/tipstore/pricing/", permanent: true },
      // Older URLs from before the /tipstore/ split
      { source: "/pricing.html", destination: "/tipstore/pricing/", permanent: true },
      { source: "/ecosystem.html", destination: "/products/", permanent: true }
    ];
  },

  // The blog editor (Decap CMS) is a static page in public/admin/.
  async rewrites() {
    return [{ source: "/admin/", destination: "/admin/index.html" }];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" }
        ]
      },
      // Fonts never change without a rename: cache them for a year.
      {
        source: "/assets/fonts/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }]
      },
      {
        source: "/assets/img/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000" }]
      },
      // The editor is for the team: never in search results, never cached stale.
      {
        source: "/admin/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
          { key: "Cache-Control", value: "no-cache" }
        ]
      }
    ];
  }
};

export default nextConfig;
