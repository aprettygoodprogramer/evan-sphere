import React from "react";

export interface GridProps {
  rows: number;
  cols: number;
  cellSize: number;
  walls: Set<string>;
  start: { r: number; c: number } | null;
  goal: { r: number; c: number } | null;
  visited: Set<string>;
  path: Set<string>;
  onCellMouseDown: (r: number, c: number) => void;
  onCellMouseEnter: (r: number, c: number) => void;
  onMouseUp: () => void;
}

const Grid: React.FC<GridProps> = ({
  rows,
  cols,
  cellSize,
  walls,
  start,
  goal,
  visited,
  path,
  onCellMouseDown,
  onCellMouseEnter,
  onMouseUp,
}) => {
  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    width: "max-content",
    backgroundColor: "#ffffff",
    userSelect: "none",
  };

  const cellBase: React.CSSProperties = {
    width: cellSize,
    height: cellSize,
    border: "1px solid #e5e7eb",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--es-mono)",
    fontSize: 10,
    fontWeight: 700,
    color: "#ffffff",
  };

  const cells: JSX.Element[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const key = `${r},${c}`;
      const isWall = walls.has(key);
      const isStart = start?.r === r && start?.c === c;
      const isGoal = goal?.r === r && goal?.c === c;
      const isVisited = visited.has(key);
      const isPath = path.has(key);

      let bg = "transparent";
      let label = "";
      let boxShadow: string | undefined;

      if (isWall) {
        bg = "#000000";
      } else if (isStart) {
        bg = "#000000";
        label = "S";
      } else if (isGoal) {
        bg = "#000000";
        label = "G";
      } else if (isPath) {
        bg = "#000000";
        boxShadow = "inset 0 0 0 3px #ffffff";
      } else if (isVisited) {
        bg = "#e5e7eb";
      }

      cells.push(
        <div
          key={key}
          style={{ ...cellBase, backgroundColor: bg, boxShadow }}
          onMouseDown={() => onCellMouseDown(r, c)}
          onMouseEnter={() => onCellMouseEnter(r, c)}
        >
          {label}
        </div>
      );
    }
  }

  return (
    <div onMouseUp={onMouseUp} style={gridStyle}>
      {cells}
    </div>
  );
};

export default Grid;
