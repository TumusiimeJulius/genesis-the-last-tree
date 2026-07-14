import { useState } from "react";
import GenesisCanvas from "./components/Canvas/GenesisCanvas";
import IntroScreen from "./components/UI/IntroScreen";
import HUD from "./components/UI/HUD";

function App() {

  const [started, setStarted] = useState(false);
  const [awakened, setAwakened] = useState(false);

  return (
    <>

      {started && <GenesisCanvas awakened={awakened} />}

      {started && <HUD awakened={awakened} />}

      {!started && (
        <IntroScreen
          onStart={() => setStarted(true)}
        />
      )}

      {started && !awakened && (
        <button
          onClick={() => setAwakened(true)}
          style={{
            position: "absolute",
            bottom: "80px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "15px 35px",
            background: "#6cff70",
            color: "black",
            border: "none",
            borderRadius: "30px",
            fontSize: "18px",
            cursor: "pointer",
            zIndex: 20
          }}
        >
          Restore Life
        </button>
      )}

    </>
  );
}

export default App;