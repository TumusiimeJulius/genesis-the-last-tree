import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


function Leaves({ awakened }) {

  const leaves = useRef();


  useFrame((state)=>{

    if(leaves.current){

      leaves.current.rotation.y += 0.001;

      leaves.current.position.y =
        Math.sin(
          state.clock.elapsedTime * 0.5
        ) * 0.5;

    }

  });


  return (

    <group
      ref={leaves}
      visible={awakened}
    >

      {Array.from({length:80}).map((_,i)=>(

        <mesh
          key={i}
          position={[
            (Math.random()-0.5)*20,
            Math.random()*8,
            (Math.random()-0.5)*20
          ]}
        >

          <planeGeometry
            args={[0.08,0.08]}
          />

          <meshStandardMaterial
            color="#9acd32"
            transparent
          />

        </mesh>

      ))}

    </group>

  );

}

export default Leaves;