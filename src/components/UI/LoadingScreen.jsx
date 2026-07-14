import { Html, useProgress } from "@react-three/drei";
import { motion } from "framer-motion";


function LoadingScreen() {

  const { progress } = useProgress();


  return (

    <Html fullscreen>

      <motion.div

        initial={{opacity:1}}

        animate={{opacity:1}}

        style={{
          width:"100vw",
          height:"100vh",
          background:"#000",
          color:"white",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          fontFamily:"Arial"
        }}

      >

        <h1
          style={{
            fontSize:"60px",
            letterSpacing:"15px"
          }}
        >
          GENESIS
        </h1>


        <p>
          Restoring Earth...
        </p>


        <p>
          {progress.toFixed(0)}%
        </p>


      </motion.div>


    </Html>

  );

}


export default LoadingScreen;