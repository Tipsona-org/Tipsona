import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CategoryTag, PostCard, PostCover, PostMetaLine } from "@/components/blog/post-parts";
import { Footer } from "@/components/layout/footer";
import { NavHub } from "@/components/layout/nav-hub";
import { HubCta } from "@/components/sections/hub-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE_URL } from "@/config/site";
import { getAllPosts, getPost, relatedPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata";
import { blogPosting, breadcrumbs } from "@/lib/structured-data";

type Props = { params: Promise<{ slug: string }> };

// Every post is built ahead of time; an unknown slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  // The site name only when the whole title still fits in a search result
  const title = post.title.length <= 48 ? `${post.title} · Tipsona` : post.title;
  const base = pageMetadata({
    title,
    description: post.description,
    path: `/blog/${post.slug}/`,
    ...(post.cover && { image: { path: post.cover, alt: post.coverAlt } }),
    article: { publishedTime: post.date, author: post.author }
  });
  return {
    ...base,
    alternates: {
      ...base.alternates,
      types: { "application/rss+xml": [{ url: "/blog/rss.xml", title: "Tipsona blog" }] }
    }
  };
}

/** Contents appear only for posts long enough to need them. */
const CONTENTS_FROM = 3;

export default async function BlogPostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const related = relatedPosts(post);
  const url = new URL(`/blog/${post.slug}/`, SITE_URL).toString();
  const share = encodeURIComponent(url);
  const text = encodeURIComponent(post.title);
  const showContents = post.headings.length >= CONTENTS_FROM;

  return (
    <>
      <div className="read-progress" aria-hidden="true" />
      <NavHub home="/" current="/blog/" />
      <main id="main">
        <article className="post">
          <header className="page-hero grid-lines post-hero" id="top">
            <div className="container post-hero__inner">
              <a className="post-back" href="/blog/" data-intro="">
                <svg className="i" aria-hidden="true">
                  <use href="#i-arrow-right" />
                </svg>
                All posts
              </a>
              <div className="post-hero__meta" data-intro="">
                <CategoryTag name={post.category} />
                <PostMetaLine post={post} />
              </div>
              <h1 className="post-hero__title">
                <span className="ln">
                  <span className="ln__in">{post.title}</span>
                </span>
              </h1>
              <p className="lede" data-intro="">
                {post.description}
              </p>
              <p className="post-byline" data-intro="">
                <span className="post-byline__mark" aria-hidden="true">
                  <svg viewBox="-4.4 0 83.1 83.1">
                    <use href="#logo-mark" />
                  </svg>
                </span>
                {post.author}
              </p>
            </div>
          </header>

          {post.cover && (
            <div className="container">
              <figure className="post-hero__cover" data-intro="">
                <PostCover post={post} eager />
              </figure>
            </div>
          )}

          <div className={`container post-layout${showContents ? " post-layout--toc" : ""}`}>
            {showContents && (
              <nav className="legal__toc post-toc" aria-label="In this post">
                <p>In this post</p>
                <ol>
                  {post.headings.map(({ id, text: heading }) => (
                    <li key={id}>
                      <a href={`#${id}`}>{heading}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            <div className="post-column">
              <div className="post-body" dangerouslySetInnerHTML={{ __html: post.html }} />
              <footer className="post-share">
                <p>Share this post</p>
                <div className="post-share__links">
                  <a
                    href={`https://wa.me/?text=${text}%20${share}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="i" aria-hidden="true">
                      <use href="#i-chat" />
                    </svg>
                    WhatsApp
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${share}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="i" aria-hidden="true">
                      <use href="#i-linkedin" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${text}&url=${share}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="i" aria-hidden="true">
                      <use href="#i-xsocial" />
                    </svg>
                    X
                  </a>
                  <button type="button" data-share-copy={url}>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-link" />
                    </svg>
                    <span>Copy link</span>
                  </button>
                </div>
              </footer>
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="section blog-latest blog-related" aria-labelledby="related-title">
            <div className="container">
              <header className="blog-latest__head">
                <h2 className="h3" id="related-title">
                  More from the blog
                </h2>
                <a className="link-arrow" href="/blog/">
                  All posts
                  <svg className="i" aria-hidden="true">
                    <use href="#i-arrow-right" />
                  </svg>
                </a>
              </header>
              <div className="blog-grid">
                {related.map((p) => (
                  <PostCard key={p.slug} post={p} />
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
      <JsonLd
        graph={[
          breadcrumbs(["Blog", "/blog/"], [post.title, `/blog/${post.slug}/`]),
          blogPosting(post)
        ]}
      />
    </>
  );
}
