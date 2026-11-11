// Tipsona products: facts from the Tipsona pitch document, written for creators.
// Products outside the first launch wave are labelled "Coming soon".
export type Product = {
  id: string;
  name: string;
  /** What you do with it */
  verb: string;
  line: string;
  launchesFirst: boolean;
  /** Tip shape and colour classes, e.g. "tip--arch c-flame" */
  shape: string;
  icon: string;
  /** The product's own page, if it has one */
  page: string | null;
};

export const PRODUCTS: Product[] = [
  { id: "tipstore", name: "TipStore", verb: "Sell", line: "Sell digital products from your own storefront.", launchesFirst: true, shape: "tip--arch c-flame", icon: "store", page: "/tipstore/" },
  { id: "tipper", name: "Tipper", verb: "Work with brands", line: "Get matched with brands for paid UGC work, with escrow-protected payouts.", launchesFirst: true, shape: "tip--circle c-lilac", icon: "briefcase", page: "/tipper/" },
  { id: "tipstar", name: "TipStar", verb: "Earn every month", line: "Memberships, donations and exclusive content for your fans.", launchesFirst: true, shape: "tip--star c-sun", icon: "heart", page: null },
  { id: "tipfix", name: "TipFix", verb: "Fix problems", line: "Payouts, contracts, escrow and the small problems of running a digital business.", launchesFirst: false, shape: "tip--diamond c-blush", icon: "wrench", page: "/tipfix/" },
  { id: "tiplaunch", name: "TipLaunch", verb: "Raise funds", line: "Community-backed capital for your projects.", launchesFirst: false, shape: "tip--pill c-mint", icon: "rocket", page: null },
  { id: "tipmarket", name: "TipMarket", verb: "Get discovered", line: "A marketplace where audiences discover creators, products and projects.", launchesFirst: false, shape: "tip--square c-lilac", icon: "compass", page: null },
  { id: "tipads", name: "TipAds", verb: "Earn from ads", line: "Brand distribution through sponsored content, placements and campaigns.", launchesFirst: false, shape: "tip--tri c-flame", icon: "megaphone", page: null },
  { id: "tipai", name: "TipAI", verb: "Get help", line: "An AI assistant that understands your Tipsona business and helps you run it.", launchesFirst: false, shape: "tip--star c-lilac", icon: "spark", page: null },
  { id: "tipinsights", name: "TipInsights", verb: "See what works", line: "One picture of your audience, content, sales, memberships and brand deals.", launchesFirst: false, shape: "tip--square c-sun", icon: "chart", page: null }
];

/** Icon-tile accent class for each tip colour */
export const ACCENT: Record<string, string> = {
  "c-flame": "acc-flame",
  "c-lilac": "acc-lilac",
  "c-sun": "acc-sun",
  "c-blush": "acc-blush",
  "c-mint": "acc-mint"
};
