import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_BLOG_URL || "http://localhost:3000";

interface Post {
  id: number;
  title: string;
  content: string;
  slug: string;
  created_at: string | null;
}

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/posts`);
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div className="es-status">Loading posts…</div>;
  if (error) return <div className="es-status">Error: {error}</div>;

  return (
    <div className="es-content es-content--wide" style={{ maxWidth: "48rem" }}>
      <p className="es-eyebrow">writing</p>
      <h1 className="es-title" style={{ textAlign: "left" }}>Blog</h1>

      {posts.length === 0 && (
        <p className="es-subtitle" style={{ textAlign: "left" }}>
          No posts yet. Check back soon.
        </p>
      )}

      <div className="es-grid" style={{ gridTemplateColumns: "1fr", marginTop: "1.5rem" }}>
        {posts.map((post) => (
          <article key={post.id} className="es-card" style={{ textDecoration: "none" }}>
            <Link to={`/blog/${post.slug}`} className="es-card-title" style={{ textDecoration: "none" }}>
              {post.title}
            </Link>
            <div className="post-meta">
              <span className="post-slug">/{post.slug}</span>
              {post.created_at && (
                <time className="post-date" dateTime={post.created_at}>
                  {new Date(post.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              )}
            </div>
            <p className="es-card-desc">{post.content.substring(0, 150)}…</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Posts;
