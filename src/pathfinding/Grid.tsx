import React from "react";

const theme = {
  background: "#232323",
  textColor: "#EFECD7",
};

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
    width: "100%",
    height: "100%",
    backgroundColor: theme.background,
    userSelect: "none",
  };

  const cellBase: React.CSSProperties = {
    width: cellSize,
    height: cellSize,
    border: "1px solid #444",
    boxSizing: "border-box",
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
      if (isWall) bg = "black";
      else if (isPath) bg = "yellow";
      else if (isVisited) bg = "lightblue";
      else if (isStart) bg = "green";
      else if (isGoal) bg = "blue";

      cells.push(
        <div
          key={key}
          style={{ ...cellBase, backgroundColor: bg }}
          onMouseDown={() => onCellMouseDown(r, c)}
          onMouseEnter={() => onCellMouseEnter(r, c)}
        />
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
