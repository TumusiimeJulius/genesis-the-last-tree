import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky, Stars } from "@react-three/drei";

import Particles from "../Effects/Particles";
import EnergyWave from "../Effects/EnergyWave";
import Fireflies from "../Effects/Fireflies";

import Wasteland from "../Environment/Wasteland";
import Mountains from "../Environment/Mountains";
import LastTree from "../Environment/LastTree";
import LivingRoots from "../Environment/LivingRoots";
import GrassField from "../Environment/GrassField";

import CinematicCamera from "../camera/CinematicCamera";
import LoadingScreen from "../UI/LoadingScreen";

function GenesisCanvas({ awakened }) {
  return (
    <Canvas
      camera={{ position: [0, 3, 8], fov: 50 }}
      shadows
    >
      <Suspense fallback={<LoadingScreen />}>
        {/* Background */}
        <color attach="background" args={["#020205"]} />

        {/* Fog */}
        <fog
          attach="fog"
          args={[
            awakened ? "#314a2e" : "#020205",
            5,
            awakened ? 35 : 15,
          ]}
        />

        {/* Ambient Light */}
        <ambientLight
          intensity={awakened ? 0.8 : 0.2}
          color={awakened ? "#fff2b3" : "#ffffff"}
        />

        {/* Main Light */}
        <pointLight
          position={[0, 2, 0]}
          intensity={awakened ? 6 : 3}
          color={awakened ? "#fff5c2" : "#7CFF70"}
          castShadow
        />

        {/* Sun Light */}
        <directionalLight
          position={[5, 10, 5]}
          intensity={awakened ? 3 : 0}
          color="#ffe8a3"
          castShadow
        />

        {/* Horizon Light */}
        <hemisphereLight
          intensity={awakened ? 2 : 0.3}
          color={awakened ? "#ffe9a6" : "#222244"}
          groundColor="#050505"
        />

        {/* Cinematic Camera */}
        <CinematicCamera />

        {/* Sky */}
        <Sky
          distance={450000}
          sunPosition={awakened ? [10, 10, 5] : [0, -1, 0]}
        />

        {/* Atmosphere */}
        <Particles />

        {/* Environment */}
        <Wasteland awakened={awakened} />
        <Mountains />

        {/* Restoration Effect */}
        <EnergyWave awakened={awakened} />

        {/* Main Character */}
        <LastTree awakened={awakened} />

        {/* Restored Nature */}
        <LivingRoots awakened={awakened} />
        <GrassField awakened={awakened} />
        <Fireflies awakened={awakened} />

        {/* Stars */}
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