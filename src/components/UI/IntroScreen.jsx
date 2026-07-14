import { motion } from "framer-motion";

function IntroScreen({ onStart }) {

  return (

    <motion.div

      initial={{ opacity: 0 }}

      animate={{ opacity: 1 }}

      transition={{ duration: 2 }}

      style={{
        position:"absolute",
        inset:0,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        color:"white",
        zIndex:10,
        background:"rgba(0,0,0,0.5)"
      }}

    >

      <h1
        style={{
          fontSize:"80px",
          letterSpacing:"15px"
        }}
      >
        GENESIS
      </h1>


      <p
        style={{
          fontSize:"22px",
          marginTop:"20px"
        }}
      >
        THE LAST TREE
      </p>


      <button

        onClick={onStart}

        style={{
          marginTop:"50px",
          padding:"15px 45px",
          borderRadius:"40px",
          border:"none",
          background:"#7CFF70",
          cursor:"pointer",
          fontSize:"18px"
        }}

      >

        ENTER WORLD

      </button>


    </motion.div>

  );

}

export default IntroScreen;