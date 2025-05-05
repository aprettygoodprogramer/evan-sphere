import React from "react";

export interface GridProps {
  rows: number;
  cols: number;
  cellSize: number;
  activeCells: Set<string>;
  onCellMouseDown: (r: number, c: number) => void;
  onCellMouseEnter: (r: number, c: number) => void;
  onMouseUp: () => void;
}

const Grid: React.FC<GridProps> = ({
  rows,
  cols,
  cellSize,
  activeCells,
  onCellMouseDown,
  onCellMouseEnter,
  onMouseUp,
}) => {
  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    userSelect: "none",
  };

  const cellBaseStyle: React.CSSProperties = {
    width: cellSize,
    height: cellSize,
    border: "1px solid #eee",
    boxSizing: "border-box",
  };

  const cells: JSX.Element[] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const key = `${row},${col}`;
      const isActive = activeCells.has(key);
      cells.push(
        <div
          key={key}
          style={{
            ...cellBaseStyle,
            backgroundColor: isActive ? "red" : "transparent",
          }}
          onMouseDown={() => onCellMouseDown(row, col)}
          onMouseEnter={() => onCellMouseEnter(row, col)}
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
