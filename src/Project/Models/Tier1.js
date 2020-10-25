import React, { useEffect, useState } from "react";
import PowerLevel from "./PowerLevel.js";

function Tier1(props) {
  const [count, setCount] = useState(0);
  const countT2 = props.countT2;

  useEffect(() => {
    const id = setInterval(
      setCount((prevCount) => prevCount + countT2),
      1000
    );
    return clearInterval(id);
  }, [countT2]);

  function AddTier() {
    setCount((prevCount) => prevCount + 1);
  }

  function sendStamina(data) {
    props.parentCallBack(data);
  }

  return (
    <div>
      <PowerLevel
        countT3={props.countT3}
        countT1={count}
        parentCallBack={sendStamina}
      />
      <label>SSJ cells: {count}</label>
      <button onClick={AddTier}>Add</button>
    </div>
  );
}

export default Tier1;
