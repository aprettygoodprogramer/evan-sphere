import React, { useState, useCallback } from "react";
import Grid from "./Grid";

const theme = {
  background: "#232323",
  textColor: "#EFECD7",
};
type Mode = "wall" | "erase" | "start" | "goal";

const ROWS = 40;
const COLS = 60;
const CELL_SIZE = 20; // px

const DrawingGrid: React.FC = () => {
  const [walls, setWalls] = useState<Set<string>>(new Set());
  const [start, setStart] = useState<{ r: number; c: number } | null>(null);
  const [goal, setGoal] = useState<{ r: number; c: number } | null>(null);
  const [visited, setVisited] = useState<Set<string>>(new Set());
  const [path, setPath] = useState<Set<string>>(new Set());
  const [mode, setMode] = useState<Mode>("wall");
  const [drawing, setDrawing] = useState(false);

  const keyOf = (r: number, c: number) => `${r},${c}`;

  const toggleWall = useCallback((r: number, c: number) => {
    const k = keyOf(r, c);
    setWalls((prev) => {
      const next = new Set(prev);
      next.has(k) ? next.delete(k) : next.add(k);
      return next;
    });
  }, []);

  const removeWall = useCallback((r: number, c: number) => {
    const k = keyOf(r, c);
    setWalls((prev) => {
      if (!prev.has(k)) return prev;
      const next = new Set(prev);
      next.delete(k);
      return next;
    });
  }, []);

  const handleMouseDown = useCallback(
    (r: number, c: number) => {
      setDrawing(true);
      const k = keyOf(r, c);
      if (mode === "wall") toggleWall(r, c);
      else if (mode === "erase") removeWall(r, c);
      else if (mode === "start") {
        setStart({ r, c });
        setWalls((p) => {
          const n = new Set(p);
          n.delete(k);
          return n;
        });
      } else {
        setGoal({ r, c });
        setWalls((p) => {
          const n = new Set(p);
          n.delete(k);
          return n;
        });
      }
    },
    [mode, toggleWall, removeWall]
  );

  const handleMouseEnter = useCallback(
    (r: number, c: number) => {
      if (!drawing) return;
      if (mode === "wall") toggleWall(r, c);
      else if (mode === "erase") removeWall(r, c);
    },
    [drawing, mode, toggleWall, removeWall]
  );

  const stopDrawing = useCallback(() => setDrawing(false), []);

  const findPath = useCallback(() => {
    if (!start || !goal) {
      alert("Place both start and goal.");
      return;
    }
    const q: Array<[number, number]> = [[start.r, start.c]];
    const seen = new Set<string>([keyOf(start.r, start.c)]);
    const parent = new Map<string, string>();
    let found = false;

    while (q.length && !found) {
      const [r, c] = q.shift()!;
      for (const [dr, dc] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ] as Array<[number, number]>) {
        const nr = r + dr,
          nc = c + dc;
        const k = keyOf(nr, nc);
        if (
          nr < 0 ||
          nr >= ROWS ||
          nc < 0 ||
          nc >= COLS ||
          walls.has(k) ||
          seen.has(k)
        )
          continue;
        parent.set(k, keyOf(r, c));
        if (nr === goal.r && nc === goal.c) {
          found = true;
          break;
        }
        seen.add(k);
        q.push([nr, nc]);
      }
    }

    setVisited(seen);
    const newPath = new Set<string>();
    if (found) {
      let cur = keyOf(goal.r, goal.c);
      while (cur !== keyOf(start.r, start.c)) {
        newPath.add(cur);
        cur = parent.get(cur)!;
      }
      newPath.add(keyOf(start.r, start.c));
    } else {
      alert("No path found.");
    }
    setPath(newPath);
  }, [start, goal, walls]);

  const resetAll = useCallback(() => {
    setWalls(new Set());
    setStart(null);
    setGoal(null);
    setVisited(new Set());
    setPath(new Set());
  }, []);

  const containerStyle: React.CSSProperties = {
    backgroundColor: theme.background,
    color: theme.textColor,
    padding: 16,
    minHeight: "100vh",
  };
  const buttonStyle: React.CSSProperties = {
    background: "#3A3A3A",
    color: theme.textColor,
    border: "none",
    borderRadius: 4,
    padding: "8px 12px",
    marginRight: 8,
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    fontSize: 14,
  };

  return (
    <div style={containerStyle}>
      <div style={{ marginBottom: 8 }}>
        <button style={buttonStyle} onClick={() => setMode("wall")}>
          Draw Walls
        </button>
        <button style={buttonStyle} onClick={() => setMode("erase")}>
          Erase Walls
        </button>
        <button style={buttonStyle} onClick={() => setMode("start")}>
          Place Start
        </button>
        <button style={buttonStyle} onClick={() => setMode("goal")}>
          Place Goal
        </button>
        <button style={buttonStyle} onClick={findPath}>
          Find Path
        </button>
        <button style={buttonStyle} onClick={resetAll}>
          Reset
        </button>
        <span style={{ marginLeft: 16 }}>Mode: {mode}</span>
      </div>
      <Grid
        rows={ROWS}
        cols={COLS}
        cellSize={CELL_SIZE}
        walls={walls}
        start={start}
        goal={goal}
        visited={visited}
        path={path}
        onCellMouseDown={handleMouseDown}
        onCellMouseEnter={handleMouseEnter}
        onMouseUp={stopDrawing}
      />
    </div>
  );
};

export default DrawingGrid;
