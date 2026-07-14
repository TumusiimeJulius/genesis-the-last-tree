import { useMemo } from "react";


function GrassField({ awakened }) {


  const grass = useMemo(()=>{

    return Array.from(
      {length:300},
      ()=>({

        position:[
          (Math.random()-0.5)*20,
          0.05,
          (Math.random()-0.5)*20
        ],

        height:
          Math.random()*0.4+0.2

      })
    );

  },[]);



  if(!awakened) return null;



  return (

    <group>

      {grass.map((blade,index)=>(

        <mesh

          key={index}

          position={blade.position}

          scale={[
            0.03,
            blade.height,
            0.03
          ]}

        >

          <boxGeometry />

          <meshStandardMaterial

            color="#4cff65"

          />

        </mesh>

      ))}

    </group>

  );

}


export default GrassField;