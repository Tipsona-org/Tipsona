import { categoryFor } from "@/content/blog-categories";
import { formatDate, type PostMeta } from "@/lib/blog";

/** The category with its tip shape, as a small label. */
export function CategoryTag({ name }: { name: string }) {
  return (
    <span className="post-tag">
      <span className={`tip ${categoryFor(name).shape}`} aria-hidden="true" />
      {name}
    </span>
  );
}

/** "24 November 2026 · 4 min read" */
export function PostMetaLine({ post }: { post: PostMeta }) {
  return (
    <span className="post-meta">
      <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read
    </span>
  );
}

/**
 * The post's cover photo, or, when it has none, a cover drawn in the
 * category's colour with its tip shape and the Tipsona mark.
 */
export function PostCover({ post, eager = false }: { post: PostMeta; eager?: boolean }) {
  const category = categoryFor(post.category);
  return (
    <span className="post-cover" style={{ "--tint": category.tint }}>
      {post.cover ? (
        <img
          src={post.cover}
          alt={post.coverAlt}
          width="1600"
          height="900"
          {...(eager ? { fetchPriority: "high" as const } : { loading: "lazy" as const })}
        />
      ) : (
        <span className="post-cover__art" aria-hidden="true">
          <span className={`tip ${category.shape} post-cover__shape`} />
          <svg className="post-cover__mark" viewBox="-4.4 0 83.1 83.1">
            <use href="#logo-mark" />
          </svg>
        </span>
      )}
    </span>
  );
}

const GoIcon = () => (
  <svg className="i" aria-hidden="true">
    <use href="#i-arrow-right" />
  </svg>
);

/** A post in the grid: cover, category, title, summary, date. */
export function PostCard({ post, headingLevel = 3 }: { post: PostMeta; headingLevel?: 2 | 3 }) {
  const Heading = `h${headingLevel}` as const;
  return (
    <a className="post-card" href={`/blog/${post.slug}/`} data-category={post.category} data-reveal="">
      <PostCover post={post} />
      <span className="post-card__body">
        <CategoryTag name={post.category} />
        <Heading className="post-card__title">{post.title}</Heading>
        <span className="post-card__excerpt">{post.description}</span>
        <PostMetaLine post={post} />
      </span>
    </a>
  );
}

/** The lead post at the top of the blog: big cover beside the text. */
export function FeaturedPost({ post }: { post: PostMeta }) {
  return (
    <a className="post-feature" href={`/blog/${post.slug}/`} data-intro="">
      <PostCover post={post} eager />
      <span className="post-feature__body">
        <span className="post-feature__top">
          <span className="post-feature__flag">Featured</span>
          <CategoryTag name={post.category} />
        </span>
        <h2 className="post-feature__title">{post.title}</h2>
        <span className="post-feature__excerpt">{post.description}</span>
        <span className="post-feature__foot">
          <PostMetaLine post={post} />
          <span className="eco-card__go">
            Read the post
            <GoIcon />
          </span>
        </span>
      </span>
    </a>
  );
}
