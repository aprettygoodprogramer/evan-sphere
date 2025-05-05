import React, { useState, useCallback } from "react";
import Grid from "./Grid";

const ROWS = 30;
const COLS = 30;
const CELL_SIZE = 20; // px
const DOT_SIZE = 8; // px

const DrawingGrid: React.FC = () => {
  const [activeCells, setActiveCells] = useState<Set<string>>(() => new Set());
  const [drawing, setDrawing] = useState(false);

  const toggleCell = useCallback((row: number, col: number) => {
    const key = `${row},${col}`;
    setActiveCells((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }, []);

  const handleCellMouseDown = useCallback(
    (row: number, col: number) => {
      setDrawing(true);
      toggleCell(row, col);
    },
    [toggleCell]
  );

  const handleCellMouseEnter = useCallback(
    (row: number, col: number) => {
      if (drawing) toggleCell(row, col);
    },
    [drawing, toggleCell]
  );

  const stopDrawing = useCallback(() => {
    setDrawing(false);
  }, []);

  return (
    <Grid
      rows={ROWS}
      cols={COLS}
      cellSize={CELL_SIZE}
      activeCells={activeCells}
      onCellMouseDown={handleCellMouseDown}
      onCellMouseEnter={handleCellMouseEnter}
      onMouseUp={stopDrawing}
    />
  );
};

export default DrawingGrid;
