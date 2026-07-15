import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky, Stars } from "@react-three/drei";

import Particles from "../Effects/Particles";
import Wind from "../Effects/Wind";
import EnergyWave from "../Effects/EnergyWave";
import Fireflies from "../Effects/Fireflies";

import Wasteland from "../Environment/Wasteland";
import Mountains from "../Environment/Mountains";
import LastTree from "../Environment/LastTree";
import LivingRoots from "../Environment/LivingRoots";
import GrassField from "../Environment/GrassField";
import Birds from "../Environment/Birds";

import CinematicCamera from "../camera/CinematicCamera";
import LoadingScreen from "../UI/LoadingScreen";
import Leaves from "../Effects/Leaves";

function GenesisCanvas({ awakened }) {

  return (

    <Canvas
      camera={{
        position:[0,3,8],
        fov:50
      }}
      shadows
    >

      <Suspense fallback={<LoadingScreen />}>


        {/* Background */}
        <color
          attach="background"
          args={["#020205"]}
        />


        {/* Atmosphere Fog */}
        <fog
          attach="fog"
          args={[
            awakened ? "#314a2e" : "#020205",
            5,
            awakened ? 35 : 15
          ]}
        />


        {/* Lighting System */}

        <ambientLight
          intensity={awakened ? 0.8 : 0.2}
          color={
            awakened
            ? "#fff2b3"
            : "#ffffff"
          }
        />


        <pointLight
          position={[0,2,0]}
          intensity={
            awakened ? 6 : 3
          }
          color={
            awakened
            ? "#fff5c2"
            : "#7CFF70"
          }
          castShadow
        />


        <directionalLight
          position={[5,10,5]}
          intensity={
            awakened ? 3 : 0
          }
          color="#ffe8a3"
          castShadow
        />


        <hemisphereLight
          intensity={
            awakened ? 2 : 0.3
          }
          color={
            awakened
            ? "#ffe9a6"
            : "#222244"
          }
          groundColor="#050505"
        />


        {/* Cinematic Camera */}
        <CinematicCamera />


        {/* Sky */}
        <Sky
          distance={450000}
          sunPosition={
            awakened
            ? [10,10,5]
            : [0,-1,0]
          }
        />


        {/* Atmosphere Effects */}

        <Particles />

        <Wind />


        {/* Planet Environment */}

        <Wasteland
          awakened={awakened}
        />

        <Mountains />


        {/* Life Restoration */}

        <EnergyWave
          awakened={awakened}
        />


        {/* The Last Tree */}

        <LastTree
          awakened={awakened}
        />


        {/* Living World */}

        <LivingRoots
          awakened={awakened}
        />

        <GrassField
          awakened={awakened}
        />

        <Fireflies
          awakened={awakened}
        />
        <Leaves awakened={awakened} />
        {/* Flying birds after restoration */}

        <Birds
          awakened={awakened}
        />


        {/* Space Atmosphere */}

        <Stars
          radius={80}
          depth={50}
          count={4000}
          factor={4}
          saturation={0}
          fade
        />


      </Suspense>

    </Canvas>

  );

}


export default GenesisCanvas;