import { useMemo } from "react";

function Wasteland({ awakened }) {

  const rocks = useMemo(() => {

    return Array.from({ length: 30 }, () => ({
      position: [
        (Math.random() - 0.5) * 20,
        0,
        (Math.random() - 0.5) * 20
      ],

      scale:
        Math.random() * 0.5 + 0.2
    }));

  }, []);


  return (

    <group>


      {/* Dead ground */}

      <mesh
        rotation={[
          -Math.PI / 2,
          0,
          0
        ]}
      >

        <planeGeometry
          args={[30,30]}
        />

      <meshStandardMaterial
  color={awakened ? "#244d24" : "#171717"}
/>

      </mesh>



      {/* Broken rocks */}

      {rocks.map((rock, index)=>(

        <mesh

          key={index}

          position={rock.position}

          scale={rock.scale}

        >

          <dodecahedronGeometry
            args={[1,0]}
          />

         <meshStandardMaterial
  color={awakened ? "#405040" : "#2b2727"}
/>

        </mesh>

      ))}


    </group>

  );

}


export default Wasteland;