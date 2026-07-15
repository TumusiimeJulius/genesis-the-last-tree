import { useEffect } from "react";
import gsap from "gsap";


function HUD({ awakened }) {


  useEffect(() => {


    // Enter from left side
    gsap.fromTo(
      ".hud-title",

      {
        opacity:0,
        x:-500,
        rotateY:-90
      },

      {
        opacity:1,
        x:0,
        rotateY:0,
        duration:2.5,
        ease:"power4.out"
      }

    );


    // Floating 3D movement
    gsap.to(
      ".hud-title",

      {
        y:-15,
        rotateX:8,
        duration:3,
        repeat:-1,
        yoyo:true,
        ease:"power2.inOut"
      }

    );


  }, [awakened]);



  return (

    <div

      style={{
        position:"absolute",
        bottom:"40px",
        left:"0",
        width:"100%",
        zIndex:100,
        display:"flex",
        justifyContent:"center",
        pointerEvents:"none",
        perspective:"1000px"
      }}

    >


      <div

        className="hud-title"

        style={{

          textAlign:"center",

          transformStyle:"preserve-3d",

          color:"#ffffff",

          textShadow:
          "0 0 20px #7CFF70, 0 0 50px #7CFF70",

        }}

      >


        <h1

          style={{

            fontSize:"50px",
            letterSpacing:"12px",
            margin:0,

            transform:
            "translateZ(80px)"

          }}

        >

          {awakened
          ? "GENESIS AWAKENED"
          : "THE LAST TREE"}

        </h1>



        <p

          style={{

            marginTop:"12px",
            letterSpacing:"5px",
            opacity:0.8,

            transform:
            "translateZ(40px)"

          }}

        >

          {awakened
          ? "LIFE HAS RETURNED"
          : "THE LAST SOURCE OF LIFE"}

        </p>


      </div>


    </div>

  );

}


export default HUD;