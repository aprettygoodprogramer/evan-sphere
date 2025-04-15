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

  if (loading) return <div className="loading">Loading posts...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <article key={post.id} className="post-card">
          <Link to={`/blog/${post.slug}`} className="post-link">
            <h2 className="post-title">{post.title}</h2>
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
          <div className="post-preview">
            {post.content.substring(0, 150)}...
          </div>
        </article>
      ))}
    </div>
  );
};

export default Posts;
