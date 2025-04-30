import React, { useState } from "react";
import "./ProceduralContentGenerator.css";

const ProceduralContent: React.FC = () => {
  const [rooms, setRooms] = useState(50);
  const [seed, setSeed] = useState(0);

  const backend =
    import.meta.env.VITE_BACKEND_CONTENT_URL ?? "http://localhost:3000";

  const imageUrl = `${backend}/generateterrain?rooms=${rooms}&seed=${seed}`;

  return (
    <div className="page-container">
      <div className="left-half">
        <h1>Procedural Content</h1>

        <div className="slider-group">
          <label htmlFor="slider-rooms">Detail</label>
          <input
            id="slider-rooms"
            type="range"
            min="0"
            max="100"
            value={rooms}
            onChange={(e) => setRooms(+e.target.value)}
          />
          <span>{rooms}</span>
        </div>

        <div className="slider-group">
          <label htmlFor="slider-seed">Seed</label>
          <input
            id="slider-seed"
            type="range"
            min="0"
            max="10000"
            value={seed}
            onChange={(e) => setSeed(+e.target.value)}
          />
          <span>{seed}</span>
        </div>
      </div>

      <div className="right-half">
        <img
          src={imageUrl}
          alt="Procedural terrain"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default ProceduralContent;
