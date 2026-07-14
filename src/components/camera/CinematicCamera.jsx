import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";

function CinematicCamera() {

  const { camera } = useThree();


  useEffect(() => {

    camera.position.set(
      0,
      8,
      18
    );


    gsap.to(camera.position, {

      x: 0,
      y: 4,
      z: 7,

      duration: 5,

      ease: "power2.inOut"

    });


  }, [camera]);


  return null;

}


export default CinematicCamera;