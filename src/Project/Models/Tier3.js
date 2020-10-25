import React, { useState } from "react";
import { useEffect } from "reactn";
import Tier2 from "./Tier2.js";

function Tier3(props) {
  const [count, setCount] = useState(props.count);
  let stamina;
  function AddTier() {
    if (stamina > 200) setCount((prevCount) => prevCount + 1);
  }

  function handleStamina(data) {
    console.log(data);
    stamina = data;
  }

  return (
    <div>
      <Tier2 countT3={count} parentCallBack={handleStamina} />
      <label>SSJ3 cells: {count}</label>
      <button onClick={AddTier}>Add</button>200 stamina
    </div>
  );
}

export default Tier3;
