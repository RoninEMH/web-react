import React, { useState } from "react";
import Tier2 from "./Tier2.js";

function Tier3(props) {
  const [count, setCount] = useState(props.count);

  function AddTier() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <Tier2 countT3={count} />
      <label>SSJ3 cells: {count}</label>
      <button onClick={AddTier}>Add</button>
    </div>
  );
}

export default Tier3;
