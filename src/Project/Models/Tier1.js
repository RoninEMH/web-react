import React, { useState } from "react";
import PowerLevel from "./PowerLevel.js";

function Tier1(props) {
  const [count, setCount] = useState(0);
  const countT2 = props.countT2;

  let intervalId = setInterval(() => handleIncrease(), 1000 / 2);

  function handleIncrease() {
    setCount((prevCount) => prevCount + countT2);
    clearInterval(intervalId);
  }
  function AddTier() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <PowerLevel countT1={count} />
      <label>SSJ cells: {count}</label>
      <button onClick={AddTier}>Add</button>
    </div>
  );
}

export default Tier1;
