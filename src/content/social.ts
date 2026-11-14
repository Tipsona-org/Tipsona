// Tipsona's official profiles: the footer links and the Organization
// structured data (sameAs) both read this list.
export type SocialProfile = {
  name: string;
  /** Icon id in src/content/icons.ts */
  icon: string;
  url: string;
};

export const SOCIAL: SocialProfile[] = [
  { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/_tipsonahq/" },
  { name: "TikTok", icon: "tiktok", url: "https://www.tiktok.com/@tipsonahq" },
  { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/company/tipsona/" }
];
