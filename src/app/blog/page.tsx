import type { Metadata } from "next";

import { FeaturedPost, PostCard } from "@/components/blog/post-parts";
import { Footer } from "@/components/layout/footer";
import { NavHub } from "@/components/layout/nav-hub";
import { HubCta } from "@/components/sections/hub-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { categoryFor } from "@/content/blog-categories";
import { getAllPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata";
import { blog, breadcrumbs } from "@/lib/structured-data";

const base = pageMetadata({
  title: "Tipsona blog · Guides, stories and news for creators",
  description:
    "Guides, stories and product news from Tipsona, for creators turning what they know into income.",
  path: "/blog/"
});

export const metadata: Metadata = {
  ...base,
  alternates: {
    ...base.alternates,
    types: { "application/rss+xml": [{ url: "/blog/rss.xml", title: "Tipsona blog" }] }
  }
};

/** Filters appear once there is enough to filter. */
const FILTER_FROM = 4;

export default function BlogPage() {
  const posts = getAllPosts();
  const lead = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p !== lead);
  const categories = [...new Set(rest.map((p) => p.category))];
  const showFilters = rest.length >= FILTER_FROM && categories.length > 1;

  return (
    <>
      <NavHub home="/" current="/blog/" />
      <main id="main">
        <section className="page-hero grid-lines blog-hero" id="top" aria-labelledby="page-title">
          <div className="container blog-hero__inner">
            <p className="tab-label" data-intro="">
              <span className="tip tip--star c-sun" aria-hidden="true" />
              Blog
            </p>
            <h1 className="h1" id="page-title">
              <span className="ln">
                <span className="ln__in">Notes for creators</span>
              </span>{" "}
              <span className="ln">
                <span className="ln__in">
                  <span className="hl">
                    <span className="hl__bg" aria-hidden="true" />
                    building a business.
                  </span>
                </span>
              </span>
            </h1>
            <p className="lede" data-intro="">
              Guides, stories and product news from Tipsona, for creators turning what they know
              into income.
            </p>
          </div>
        </section>

        {lead ? (
          <section className="section blog-lead" aria-label="Featured post">
            <div className="container">
              <FeaturedPost post={lead} />
            </div>
          </section>
        ) : (
          <section className="section blog-lead" aria-label="No posts yet">
            <div className="container">
              <div className="blog-empty" data-reveal="">
                <span className="tip tip--star c-sun" aria-hidden="true" />
                <h2 className="h3">The first posts are on their way.</h2>
                <p>Guides, stories and product news will appear here.</p>
              </div>
            </div>
          </section>
        )}

        {rest.length > 0 && (
          <section className="section blog-latest" aria-labelledby="latest-title">
            <div className="container">
              <header className="blog-latest__head">
                <h2 className="h3" id="latest-title">
                  Latest posts
                </h2>
                {showFilters && (
                  <div className="blog-filter" role="group" aria-label="Show posts about">
                    <button type="button" data-blog-filter="" aria-pressed="true">
                      All
                    </button>
                    {categories.map((name) => (
                      <button key={name} type="button" data-blog-filter={name} aria-pressed="false">
                        <span className={`tip ${categoryFor(name).shape}`} aria-hidden="true" />
                        {name}
                      </button>
                    ))}
                  </div>
                )}
              </header>
              <div className="blog-grid">
                {rest.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </section>
        )}

        <HubCta
          title={
            <>
              Build your creator business <em>with us.</em>
            </>
          }
          text="Join the waitlist to hear first when TipStore opens."
        />
      </main>
      <Footer pitch="Sell, earn and grow your creator&nbsp;business with one Tipsona account." />
      <JsonLd graph={[breadcrumbs(["Blog", "/blog/"]), blog(posts)]} />
    </>
  );
}
