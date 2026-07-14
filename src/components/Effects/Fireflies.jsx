import { Points, PointMaterial } from "@react-three/drei";
import { useMemo } from "react";

function Fireflies({ awakened }) {

  const positions = useMemo(() => {

    const array = [];

    for (let i = 0; i < 300; i++) {

      array.push(
        (Math.random() - 0.5) * 15,
        Math.random() * 5,
        (Math.random() - 0.5) * 15
      );

    }

    return array;

  }, []);


  if (!awakened) return null;


  return (

    <Points positions={positions}>

      <PointMaterial

        color="#d9ff8c"

        size={0.05}

        transparent

        opacity={0.8}

      />

    </Points>

  );

}

export default Fireflies;