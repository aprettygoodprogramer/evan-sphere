import { Outlet } from "react-router-dom";
import PageShell from "../components/PageShell";

function BlogLayout() {
  return (
    <PageShell centered={false} backTo="/" backLabel="home" show3D>
      <Outlet />
    </PageShell>
  );
}

export default BlogLayout;
