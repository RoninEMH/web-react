import React, { useState } from "react";
import Tier1 from "./Tier1.js";

function Tier2(props) {
  const [count, setCount] = useState(0);
  const countT3 = props.countT3;

  let intervalId = setInterval(() => handleIncrease(), 500);

  function handleIncrease() {
    setCount((prevCount) => prevCount + countT3);
    clearInterval(intervalId);
  }
  function AddTier() {
    setCount((prevCount) => prevCount + 1);
  }

  function sendStamina(data) {
    props.parentCallBack(data);
  }

  return (
    <div>
      <Tier1 countT3={countT3} countT2={count} parentCallBack={sendStamina} />
      <label>SSJ2 cells: {count}</label>
      <button onClick={AddTier}>Add</button>
    </div>
  );
}

export default Tier2;
