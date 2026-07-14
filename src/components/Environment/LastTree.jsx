import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function LastTree({ awakened }) {

  const treeRef = useRef();
  const glowRef = useRef();

  useFrame((state) => {

    const time = state.clock.elapsedTime;

    // Gentle tree movement
    if (treeRef.current) {
      treeRef.current.rotation.z =
        Math.sin(time * 0.5) * 0.02;
    }


    // Breathing light effect
    if (glowRef.current) {

      glowRef.current.scale.set(
        1 + Math.sin(time * 2) * 0.1,
        1 + Math.sin(time * 2) * 0.1,
        1 + Math.sin(time * 2) * 0.1
      );

    }

  });


  return (

    <group ref={treeRef}>


      {/* Ancient trunk */}

      <mesh position={[0,0,0]}>

        <cylinderGeometry
          args={[
            0.6,
            0.9,
            3.5,
            32
          ]}
        />

        <meshStandardMaterial
          color="#24140b"
          roughness={1}
        />

      </mesh>



      {/* Glowing heart of the tree */}

      <mesh
  ref={glowRef}
  position={[0,1.8,0]}
  scale={awakened ? 1.4 : 1}
>

        <sphereGeometry
          args={[
            0.8,
            32,
            32
          ]}
        />

        <meshStandardMaterial

          color="#6cff70"

          emissive="#36ff45"

      emissiveIntensity={awakened ? 8 : 5}

        />

      </mesh>


      {/* Energy root */}

      <pointLight

        position={[0,1.5,0]}

        intensity={4}

        color="#6cff70"

        distance={6}

      />


    </group>

  );

}


export default LastTree;