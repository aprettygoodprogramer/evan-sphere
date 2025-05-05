import React from "react";

export interface GridProps {
  rows: number;
  cols: number;
  cellSize: number;
  dotSize: number;
  activeCells: Set<string>;
  onCellMouseDown: (r: number, c: number) => void;
  onCellMouseEnter: (r: number, c: number) => void;
  onMouseUp: () => void;
}

const Grid: React.FC<GridProps> = ({
  rows,
  cols,
  cellSize,
  dotSize,
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

  const cellStyle: React.CSSProperties = {
    width: cellSize,
    height: cellSize,
    border: "1px solid #eee",
    boxSizing: "border-box",
    position: "relative",
  };

  const dotStyle: React.CSSProperties = {
    width: dotSize,
    height: dotSize,
    background: "red",
    borderRadius: "50%",
    position: "absolute",
    top: (cellSize - dotSize) / 2,
    left: (cellSize - dotSize) / 2,
  };

  const cells: JSX.Element[] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const key = `${row},${col}`;
      cells.push(
        <div
          key={key}
          style={cellStyle}
          onMouseDown={() => onCellMouseDown(row, col)}
          onMouseEnter={() => onCellMouseEnter(row, col)}
        >
          {activeCells.has(key) && <div style={dotStyle} />}
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
