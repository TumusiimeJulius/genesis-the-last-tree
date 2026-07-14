import { Points, PointMaterial } from "@react-three/drei";
import { useMemo } from "react";

function Particles() {

  const particles = useMemo(() => {
    const positions = [];

    for (let i = 0; i < 500; i++) {
      positions.push(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
    }

    return positions;
  }, []);

  return (
    <Points positions={particles}>
      <PointMaterial
        color="#7CFF70"
        size={0.03}
        transparent
        opacity={0.8}
      />
    </Points>
  );
}

export default Particles;