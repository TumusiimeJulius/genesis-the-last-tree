import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function EnergyWave({ awakened }) {

  const waveRef = useRef();


  useFrame(() => {

    if (waveRef.current && awakened) {

      const scale =
        waveRef.current.scale.x + 0.02;

      waveRef.current.scale.set(
        scale,
        scale,
        scale
      );

      waveRef.current.material.opacity -= 0.002;

    }

  });


  if (!awakened) return null;


  return (

    <mesh
      ref={waveRef}
      rotation={[
        -Math.PI / 2,
        0,
        0
      ]}
      position={[0,0.05,0]}
    >

      <ringGeometry
        args={[
          1,
          1.2,
          64
        ]}
      />

      <meshBasicMaterial
        color="#7CFF70"
        transparent
        opacity={0.8}
      />

    </mesh>

  );

}


export default EnergyWave;