import React, { useState } from "react";
import "./ProceduralContentGenerator.css";

interface FormParams {
  rooms: number;
  seed: number;
  octaves: number;
  persistence: number;
  lacunarity: number;
  seaLevel: number;
}

const ProceduralContent: React.FC = () => {
  const [form, setForm] = useState<FormParams>({
    rooms: 50,
    seed: 0,
    octaves: 6,
    persistence: 0.5,
    lacunarity: 2.0,
    seaLevel: 0.0,
  });

  const [submitted, setSubmitted] = useState<FormParams>(form);

  const backend =
    import.meta.env.VITE_BACKEND_CONTENT_URL ?? "http://localhost:3000";

  const imageUrl =
    `${backend}/generateterrain` +
    `?rooms=${submitted.rooms}` +
    `&seed=${submitted.seed}` +
    `&octaves=${submitted.octaves}` +
    `&persistence=${submitted.persistence}` +
    `&lacunarity=${submitted.lacunarity}` +
    `&sea_level=${submitted.seaLevel}`;

  function handleChange<K extends keyof FormParams>(key: K, value: number) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(form);
  }

  return (
    <div className="page-container">
      <div className="left-half">
        <h1>Procedural Content</h1>
        <form onSubmit={handleSubmit}>
          <div className="slider-group">
            <label htmlFor="rooms">Zoom</label>
            <input
              id="rooms"
              type="range"
              min={0}
              max={100}
              value={form.rooms}
              onChange={(e) => handleChange("rooms", +e.target.value)}
            />
            <span>{form.rooms}</span>
          </div>
          <div className="slider-group">
            <label htmlFor="seed">Seed</label>
            <input
              id="seed"
              type="range"
              min={0}
              max={10000}
              value={form.seed}
              onChange={(e) => handleChange("seed", +e.target.value)}
            />
            <span>{form.seed}</span>
          </div>
          <div className="slider-group">
            <label htmlFor="octaves">Octaves</label>
            <input
              id="octaves"
              type="range"
              min={1}
              max={12}
              step={1}
              value={form.octaves}
              onChange={(e) => handleChange("octaves", +e.target.value)}
            />
            <span>{form.octaves}</span>
          </div>
          <div className="slider-group">
            <label htmlFor="persistence">Persistence</label>
            <input
              id="persistence"
              type="range"
              min={0.0}
              max={1.0}
              step={0.01}
              value={form.persistence}
              onChange={(e) => handleChange("persistence", +e.target.value)}
            />
            <span>{form.persistence.toFixed(2)}</span>
          </div>
          <div className="slider-group">
            <label htmlFor="lacunarity">Lacunarity</label>
            <input
              id="lacunarity"
              type="range"
              min={1.0}
              max={4.0}
              step={0.1}
              value={form.lacunarity}
              onChange={(e) => handleChange("lacunarity", +e.target.value)}
            />
            <span>{form.lacunarity.toFixed(1)}</span>
          </div>
          <div className="slider-group">
            <label htmlFor="seaLevel">Sea Level</label>
            <input
              id="seaLevel"
              type="range"
              min={-1.0}
              max={1.0}
              step={0.01}
              value={form.seaLevel}
              onChange={(e) => handleChange("seaLevel", +e.target.value)}
            />
            <span>{form.seaLevel.toFixed(2)}</span>
          </div>
          <button type="submit">Generate</button>
        </form>
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
