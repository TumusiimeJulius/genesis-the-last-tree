function HUD({ awakened }) {

  return (

    <div
      style={{
        position:"absolute",
        top:"30px",
        left:"40px",
        color:"white",
        zIndex:20,
        fontFamily:"Arial",
        letterSpacing:"3px"
      }}
    >

      <h2>
        GENESIS
      </h2>


      <p>
        THE LAST TREE
      </p>


      <p>
        STATUS:
        {" "}
        {awakened ? "WORLD RESTORED" : "LIFE DORMANT"}
      </p>


    </div>

  );

}


export default HUD;