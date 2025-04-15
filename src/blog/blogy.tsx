import { Outlet } from "react-router-dom";

function BlogLayout() {
  return (
    <div className="page-background">
      <main className="blog-content">
        <Outlet />
      </main>
    </div>
  );
}

export default BlogLayout;
