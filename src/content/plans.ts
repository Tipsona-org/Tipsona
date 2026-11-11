// TipStore plans: facts from PRD Module 10 and chapter 13. Prices are placeholders.
export type Plan = {
  name: string;
  /** Tip shape and colour classes for the dot beside the name */
  shape: string;
  tagline: string;
  suits: string;
  /** null shows "Price TBC" with a placeholder tag */
  price: string | null;
  per: string;
  note: string;
  intro: string | null;
  items: string[];
  /** A future feature, listed last with a clock icon */
  soon?: string;
  cta: { variant: string; label: string };
  featured?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "Free",
    shape: "tip--circle c-flame",
    tagline: "Designed for creators getting started.",
    suits: "First-time creators, students, hobbyists and small digital businesses.",
    price: "₦0",
    per: "free plan",
    note: "Every creator can start for free.",
    intro: null,
    items: [
      "Your storefront",
      "Product uploads and sales",
      "Limited products",
      "Limited storage",
      "Basic analytics",
      "Standard transaction fee"
    ],
    cta: { variant: "btn--ghost", label: "Start for free" }
  },
  {
    name: "Pro",
    shape: "tip--star c-sun",
    tagline: "Designed for creators building a sustainable business.",
    suits: "Coaches, consultants, trainers, educators and full-time creators.",
    price: null,
    per: "",
    note: "Monthly or yearly billing.",
    intro: "Everything in Free, plus:",
    items: [
      "Unlimited products",
      "Increased storage",
      "Advanced analytics",
      "Coupons",
      "Lower transaction fees",
      "Priority support"
    ],
    cta: { variant: "btn--flame", label: "Choose Pro" },
    featured: true
  },
  {
    name: "Business",
    shape: "tip--arch c-night",
    tagline: "Designed for larger businesses and professional teams.",
    suits: "Agencies, companies, training organizations and large educational brands.",
    price: null,
    per: "",
    note: "Monthly or yearly billing.",
    intro: "Everything in Pro, plus:",
    items: [
      "Team members",
      "White-label branding options",
      "Highest storage allocation",
      "Dedicated support",
      "Advanced reporting"
    ],
    soon: "Custom domain (future release)",
    cta: { variant: "btn--ink", label: "Choose Business" }
  }
];
