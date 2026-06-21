import FlexBox from "./flexBox";
import PageShell from "../components/PageShell";
import "./KanbanBoard.css";

export default function TimeManager() {
  return (
    <PageShell centered={false} backTo="/" backLabel="home">
      <p className="es-eyebrow">tool</p>
      <h1 className="es-title" style={{ textAlign: "left" }}>
        Task Manager
      </h1>
      <p className="es-subtitle" style={{ textAlign: "left" }}>
        Drag tasks between columns to organize your day.
      </p>
      <FlexBox />
    </PageShell>
  );
}
