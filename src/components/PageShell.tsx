import { lazy, Suspense, useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";

const IcoFooter = lazy(() => import("./IcoFooter"));

interface PageShellProps {
  children: ReactNode;
  centered?: boolean;
  show3D?: boolean;
  backTo?: string;
  backLabel?: string;
  className?: string;
}

export default function PageShell({
  children,
  centered = true,
  show3D = true,
  backTo,
  backLabel = "back",
  className,
}: PageShellProps) {
  const [mouse, setMouse] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) setMouse({ x: t.clientX, y: t.clientY });
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  return (
    <div className={`es-page${centered ? "" : " es-page--top"}${className ? ` ${className}` : ""}`}>
      <div
        className="es-grid-masked"
        style={{
          maskImage: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, black, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, black, transparent 80%)`,
        }}
      />
      <div className="es-grid-static" />

      {backTo && (
        <Link to={backTo} className="es-back">
          ← {backLabel}
        </Link>
      )}

      <div className={`es-content${centered ? "" : " es-content--wide"}`}>{children}</div>

      {show3D && (
        <Suspense fallback={null}>
          <IcoFooter />
        </Suspense>
      )}
    </div>
  );
}
