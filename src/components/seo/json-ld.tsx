import type { Thing } from "@/lib/structured-data";

/** Structured data for search engines: one schema.org graph per page. */
export function JsonLd({ graph }: { graph: Thing[] }) {
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
  return (
    <script
      type="application/ld+json"
      // "<" escaped so text in the data can never close the script tag
      dangerouslySetInnerHTML={{ __html: json.replace(/</g, "\\u003c") }}
    />
  );
}
