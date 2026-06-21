import PageShell from "../components/PageShell";

function About() {
  return (
    <PageShell backTo="/" backLabel="home" show3D>
      <p className="es-eyebrow">01 — about</p>
      <h1 className="es-title">More about me</h1>

      <div className="es-prose">
        <p>
          I'm a passionate programmer who genuinely loves what I do. I run Arch
          Linux on my Thinkpad and Windows on my desktop. I'm always looking for
          new challenges to tackle.
        </p>
        <p>
          Currently working on some exciting projects. When I'm not coding,
          you'll find me gaming on Hypixel or CS2 — but let's be real, I'm
          usually coding.
        </p>

        <h2>Quick facts</h2>
        <ul>
          <li>Uses Arch Linux (btw)</li>
          <li>Plays Hypixel & CS2</li>
          <li>Locked in</li>
          <li>Starting high school 2025-2026</li>
          <li>Been coding since age 8</li>
        </ul>

        <h2>By the numbers</h2>
        <ul>
          <li>6+ years coding</li>
          <li>10+ languages</li>
          <li>∞ locked-in level</li>
        </ul>

        <h2>My journey</h2>
        <ul>
          <li>2017 — started coding at age 8</li>
          <li>2020 — discovered Linux during covid</li>
          <li>2023 — robotics & FIRST Tech Challenge</li>
          <li>2025 — working on Quizlitic, heading to high school</li>
        </ul>
      </div>
    </PageShell>
  );
}

export default About;
