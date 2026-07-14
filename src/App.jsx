import { useState } from "react";
import GenesisCanvas from "./components/Canvas/GenesisCanvas";
import IntroScreen from "./components/UI/IntroScreen";
import HUD from "./components/UI/HUD";

function App() {

  const [started, setStarted] = useState(false);

  const [awakened, setAwakened] = useState(false);


  return (

    <>

      <GenesisCanvas awakened={awakened} />
      <HUD awakened={awakened}/>


      {!started && (

        <IntroScreen

          onStart={() => setStarted(true)}

        />

      )}


      {started && !awakened && (

        <button

          onClick={() => setAwakened(true)}

          style={{
            position:"absolute",
            bottom:"80px",
            left:"50%",
            transform:"translateX(-50%)",
            padding:"15px 35px",
            borderRadius:"30px",
            border:"none",
            background:"#7CFF70",
            cursor:"pointer",
            fontSize:"18px"
          }}

        >

          RESTORE LIFE

        </button>

      )}


    </>

  );

}


export default App;