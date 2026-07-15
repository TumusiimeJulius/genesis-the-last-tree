import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


function Birds({ awakened }) {

  const birds = useRef();


  useFrame((state)=>{

    if(birds.current){

      birds.current.position.x =
        Math.sin(state.clock.elapsedTime * 0.2) * 5;


      birds.current.position.z =
        Math.cos(state.clock.elapsedTime * 0.2) * 5;

      birds.current.rotation.y += 0.002;

    }

  });


  return (

    <group
      ref={birds}
      position={[0,8,-15]}
      visible={awakened}
    >

      {[0,1,2,3,4].map((bird)=>(

        <mesh
          key={bird}
          position={[
            bird * 1.5,
            Math.sin(bird)*0.5,
            bird
          ]}
        >

          <coneGeometry
            args={[0.15,0.5,3]}
          />

          <meshStandardMaterial
            color="#111111"
          />

        </mesh>

      ))}


    </group>

  );

}


export default Birds;