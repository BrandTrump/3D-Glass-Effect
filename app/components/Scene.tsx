import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";

function Scene() {
  return (
    <Canvas style={{ backgroundColor: "black" }}>
      <directionalLight intensity={3} position={[0, 3, 2]} />
      <Environment preset="dawn" />
      <Model />
    </Canvas>
  );
}

export default Scene;
