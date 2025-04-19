import React, { useState } from "react";
import "./ProceduralContentGenerator.css";

const ProceduralContent: React.FC = () => {
  const [value1, setValue1] = useState(50);

  return (
    <div className="page-container">
      <div className="left-half">
        <h1>Procedural Content</h1>
        <p>This is a basic React component.</p>
        <div className="slider-group">
          <label htmlFor="Amt Rooms">Amt Rooms</label>
          <input
            id="slider1"
            type="range"
            min="0"
            max="100"
            value={value1}
            onChange={(e) => setValue1(parseInt(e.target.value))}
          />
          <span>{value1}</span>
        </div>
      </div>
      <div className="right-half"></div>
    </div>
  );
};

export default ProceduralContent;
