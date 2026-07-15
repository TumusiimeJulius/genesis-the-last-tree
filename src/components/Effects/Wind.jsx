import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Wind() {

  const particles = useRef();


  useFrame((state)=>{

    if(particles.current){

      particles.current.rotation.y += 0.001;

      particles.current.position.x =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.5;

    }

  });


  return (

    <points ref={particles}>

      <bufferGeometry>

        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={
            new Float32Array(
              Array.from(
                {length:600},
                ()=>THREE.MathUtils.randFloatSpread(30)
              )
            )
          }
          itemSize={3}
        />

      </bufferGeometry>


      <pointsMaterial
        size={0.03}
        color="#aaaaaa"
        transparent
        opacity={0.5}
      />

    </points>

  );

}

export default Wind;