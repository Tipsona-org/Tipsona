// Blog categories: each gets one tip shape and colour, like everything else on
// the site. The names must match the Category options in public/admin/config.yml,
// which is where editors pick them.
export type BlogCategory = {
  name: string;
  /** Tip shape and colour classes, e.g. "tip--circle c-flame" */
  shape: string;
  /** Background for covers when a post has no image */
  tint: string;
};

export const BLOG_CATEGORIES: BlogCategory[] = [
  { name: "Creator business", shape: "tip--circle c-flame", tint: "var(--flame-tint)" },
  { name: "Guides", shape: "tip--star c-sun", tint: "var(--sun-tint)" },
  { name: "Product news", shape: "tip--square c-lilac", tint: "var(--lilac-tint)" },
  { name: "Stories", shape: "tip--diamond c-blush", tint: "var(--blush-tint)" }
];

const FALLBACK: BlogCategory = { name: "", shape: "tip--pill c-mint", tint: "var(--mint-tint)" };

export function categoryFor(name: string): BlogCategory {
  return BLOG_CATEGORIES.find((c) => c.name === name) ?? { ...FALLBACK, name };
}
