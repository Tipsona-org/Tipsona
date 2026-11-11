import type { MetadataRoute } from "next";

/** Name, colours and icons for "Add to home screen" and browser UI. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tipsona",
    short_name: "Tipsona",
    description: "Sell, earn and grow your creator business with one Tipsona account.",
    start_url: "/",
    display: "browser",
    background_color: "#FBF8F4",
    theme_color: "#FBF8F4",
    icons: [
      { src: "/assets/img/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/assets/img/icon-512.png", sizes: "512x512", type: "image/png" }
    ]
  };
}
