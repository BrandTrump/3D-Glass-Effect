import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";

function Model() {
  const { nodes } = useGLTF("/medias/torrus.glb");
  const { viewport } = useThree();
  const mesh = useRef();

  useFrame(() => {
    // @ts-ignore
    mesh.current.rotation.x += 0.015;
  });

  return (
    <group scale={viewport.width / 3.5}>
      <Text
        fontSize={0.425}
        font="/fonts/PPNeueMontreal-Bold.otf"
        fontWeight={"semibold"}
        position={[0, 0, -0.3]}
      >
        Glass Effect
      </Text>
      {/* @ts-ignore */}
      <mesh ref={mesh} {...nodes.Torus002}>
        <MeshTransmissionMaterial
          thickness={0.05}
          transmission={1}
          roughness={0}
          ior={1.2}
          chromaticAberration={0.02}
          backside={true}
        />
      </mesh>
    </group>
  );
}

export default Model;
