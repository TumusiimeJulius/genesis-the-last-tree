import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";

function CinematicCamera() {

  const { camera } = useThree();


  useEffect(() => {

    // Starting cinematic position
    camera.position.set(
      0,
      12,
      25
    );


    // Slow reveal movement
    gsap.to(camera.position, {

      y: 5,
      z: 10,

      duration: 8,

      ease: "power2.inOut"

    });


    // Camera looking toward the tree
    gsap.to(camera.rotation, {

      x: -0.15,
      y: 0,

      duration: 8,

      ease:"power2.inOut"

    });


  }, [camera]);


  return null;

}


export default CinematicCamera;