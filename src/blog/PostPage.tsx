import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import "./markdown.css";

const API_BASE_URL = import.meta.env.VITE_BLOG_URL || "https://localhost:3000";

declare module "react-markdown" {
  interface ReactMarkdownProps {
    className?: string;
    children?: string;
  }
}

interface Post {
  id: number;
  title: string;
  content: string;
  slug: string;
  created_at: string | null;
}

const PostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/posts/${slug}`);
        if (!response.ok) throw new Error(`Post not found: ${response.status}`);
        const data: Post = await response.json();
        setPost(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading)
    return (
      <div className="loading" style={{ color: "white", fontSize: "1.25rem" }}>
        Loading post...
      </div>
    );
  if (error)
    return (
      <div className="error" style={{ color: "white", fontSize: "1.25rem" }}>
        Error: {error}
      </div>
    );
  if (!post)
    return (
      <div className="error" style={{ color: "white", fontSize: "1.25rem" }}>
        Post not found
      </div>
    );

  return (
    <article className="post-content" style={{ color: "white" }}>
      <h1
        className="post-title"
        style={{ color: "white", fontSize: "3rem" }} // Bigger title
      >
        {post.title}
      </h1>
      <div className="post-meta" style={{ color: "#cccccc" }}>
        {post.created_at && (
          <time className="post-date" dateTime={post.created_at}>
            {new Date(post.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        )}
        <span className="post-slug">/{post.slug}</span>
      </div>
      <div className="markdown-body">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default PostPage;
