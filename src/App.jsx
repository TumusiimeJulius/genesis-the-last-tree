import { useState } from "react";
import GenesisCanvas from "./components/Canvas/GenesisCanvas";

function App() {

  const [awakened, setAwakened] = useState(false);


  return (

    <>

      <GenesisCanvas awakened={awakened} />


      {!awakened && (

        <button

          onClick={() => setAwakened(true)}

          style={{
            position:"absolute",
            bottom:"80px",
            left:"50%",
            transform:"translateX(-50%)",
            padding:"15px 35px",
            background:"#6cff70",
            color:"black",
            border:"none",
            borderRadius:"30px",
            fontSize:"18px",
            cursor:"pointer"
          }}

        >
          Restore Life

        </button>

      )}


    </>

  );

}

export default App;