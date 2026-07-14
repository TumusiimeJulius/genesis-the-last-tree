import { useMemo } from "react";

function LivingRoots({ awakened }) {

  const roots = useMemo(() => {

    return Array.from({ length: 12 }, (_, i) => ({
      rotation:
        (i / 12) * Math.PI * 2,

      length:
        Math.random() * 2 + 1
    }));

  }, []);


  if (!awakened) return null;


  return (

    <group>

      {roots.map((root, index) => (

        <mesh
          key={index}
          rotation={[
            0,
            root.rotation,
            0
          ]}
          position={[
            0,
            0.05,
            0
          ]}
        >

          <cylinderGeometry
            args={[
              0.03,
              0.12,
              root.length,
              8
            ]}
          />

          <meshStandardMaterial

            color="#6cff70"

            emissive="#35ff45"

            emissiveIntensity={3}

          />

        </mesh>

      ))}

    </group>

  );

}

export default LivingRoots;