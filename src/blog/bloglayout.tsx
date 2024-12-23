import { Outlet } from "react-router-dom";

function BlogLayout() {
  return (
    <div className="page-background">
      <Outlet />
    </div>
  );
}

export default BlogLayout;
