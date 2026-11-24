// The blog as an RSS feed, so readers and newsletter tools can follow it.
import { SITE_URL } from "@/config/site";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

const esc = (value: string) =>
  value.replace(/[<>&'"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[c]!);

export function GET() {
  const link = (path: string) => new URL(path, SITE_URL).toString();
  const posts = getAllPosts();
  const items = posts
    .map(
      (post) => `    <item>
      <title>${esc(post.title)}</title>
      <link>${link(`/blog/${post.slug}/`)}</link>
      <guid isPermaLink="true">${link(`/blog/${post.slug}/`)}</guid>
      <description>${esc(post.description)}</description>
      <category>${esc(post.category)}</category>
      <pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Tipsona blog</title>
    <link>${link("/blog/")}</link>
    <atom:link href="${link("/blog/rss.xml")}" rel="self" type="application/rss+xml" />
    <description>Guides, stories and product news from Tipsona, for creators turning what they know into income.</description>
    <language>en</language>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
