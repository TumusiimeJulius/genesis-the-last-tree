import { Canvas } from "@react-three/fiber";
import { Stars, Sky } from "@react-three/drei";
import { Suspense } from "react";

import Particles from "../Effects/Particles";
import EnergyWave from "../Effects/EnergyWave";

import LastTree from "../Environment/LastTree";
import Wasteland from "../Environment/Wasteland";

import CinematicCamera from "../camera/CinematicCamera";
import LivingRoots from "../Environment/LivingRoots";
import Fireflies from "../Effects/Fireflies";

import LoadingScreen from "../UI/LoadingScreen";
import GrassField from "../Environment/GrassField";
import Mountains from "../Environment/Mountains";

function GenesisCanvas({ awakened }) {

  return (

    <Canvas camera={{ position: [0, 3, 8] }}>

      <Suspense fallback={<LoadingScreen />}>

        <color
          attach="background"
          args={["#020205"]}
        />


        <fog
          attach="fog"
          args={["#020205", 5, 15]}
        />


        <ambientLight
          intensity={awakened ? 0.8 : 0.2}
          color={awakened ? "#fff2b3" : "#ffffff"}
        />


        <pointLight
          position={[0, 2, 0]}
          intensity={awakened ? 6 : 3}
          color={awakened ? "#fff5c2" : "#7CFF70"}
        />


        <directionalLight
          position={[5, 10, 5]}
          intensity={awakened ? 3 : 0}
          color="#ffe8a3"
        />
        <hemisphereLight
  intensity={awakened ? 2 : 0.3}
  color={awakened ? "#ffe9a6" : "#222244"}
  groundColor="#050505"
/>


        {/* Cinematic intro camera */}
        <CinematicCamera />


        {/* Floating particles */}
        <Particles />


        {/* Dead planet environment */}
        <Wasteland awakened={awakened} />

          <Mountains />

        {/* Life restoration effect */}
        <EnergyWave awakened={awakened} />


        {/* The Last Tree */}
        <LastTree awakened={awakened} />


        {/* Living roots */}
        <LivingRoots awakened={awakened} />
        {/* Grass field */}
        <GrassField awakened={awakened} />

        {/* Fireflies after restoration */}
        <Fireflies awakened={awakened} />

        <Sky
  distance={450000}
  sunPosition={
    awakened
    ? [10,10,5]
    : [0,-1,0]
  }
/>


        <Stars
          radius={20}
          depth={10}
          count={2000}
          factor={2}
        />


      </Suspense>

    </Canvas>

  );

}


export default GenesisCanvas;