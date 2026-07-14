import { useMemo } from "react";


function Mountains() {

  const mountains = useMemo(()=>{

    return Array.from({length:20},()=>({

      position:[
        (Math.random()-0.5)*40,
        0,
        -10 - Math.random()*10
      ],

      scale:[
        Math.random()*3+2,
        Math.random()*5+3,
        Math.random()*3+2
      ]

    }));

  },[]);



  return (

    <group>

      {mountains.map((mountain,index)=>(

        <mesh

          key={index}

          position={mountain.position}

          scale={mountain.scale}

        >

          <coneGeometry
            args={[1,1.5,5]}
          />


          <meshStandardMaterial

            color="#151820"

            roughness={1}

          />


        </mesh>

      ))}


    </group>

  );

}


export default Mountains;