import { Canvas } from "@react-three/fiber";
import { OrbitControls, Icosahedron, MeshDistortMaterial, Float } from "@react-three/drei";

export default function IcoFooter() {
  return (
    <div className="es-footer-3d">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
          <Icosahedron args={[1.5, 0]}>
            <MeshDistortMaterial color="#000000" wireframe distort={0.3} speed={2} />
          </Icosahedron>
        </Float>
      </Canvas>
    </div>
  );
}
