import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import Particles from "../Effects/Particles";
import LastTree from "../Environment/LastTree";
import Wasteland from "../Environment/Wasteland";
import CinematicCamera from "../camera/CinematicCamera";

function GenesisCanvas({ awakened }) {
  return (
    <Canvas camera={{ position: [0, 3, 8] }}>

      <color
        attach="background"
        args={["#020205"]}
      />

      <fog
        attach="fog"
        args={["#020205", 5, 15]}
      />

      <ambientLight intensity={0.2} />

      <pointLight
        position={[0, 2, 0]}
        intensity={3}
        color="#7CFF70"
      />

      {/* Cinematic intro camera */}
      <CinematicCamera />

      {/* Floating particles */}
      <Particles />

      {/* Dead planet environment */}
      <Wasteland />

      {/* The Last Tree */}
      <LastTree />

      <Stars
        radius={20}
        depth={10}
        count={2000}
        factor={2}
      />

    </Canvas>
  );
}

export default GenesisCanvas;