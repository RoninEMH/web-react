import React, { useEffect, useState } from "react";
import { createGlobalState } from "react-hooks-global-state";

let id;
const staminaCost = 200;

let { useGlobalState } = createGlobalState({ stamina: 0 });

function PowerLevel(props) {
  let [powerLevel, setPowerLevel] = useState(0);
  let [kaioken, setKaioken] = useState(1);
  const countT3 = props.countT3;
  let [stamina, setStamina] = useGlobalState("stamina");

  const countT1 = props.countT1;
  const defaultImage =
    "https://i.pinimg.com/originals/bf/b5/43/bfb543ee17f7953c9cba90498f1ae640.jpg";

  let ch = { name: "Opening", img: defaultImage };

  let [DBZCharacters, setDBZCharacters] = useState([
    {
      id: "",
      name: "",
      img: "",
      powerLevel: 0,
    },
  ]);

  useEffect(() => {
    fetch("./Characters.json")
      .then((response) => response.json())
      .then((response) => {
        const characters = response.data.characters;
        setDBZCharacters(characters);
      })
      .catch(() => console.log("Error"));
  }, []);

  useEffect(() => {
    handleCharacter();
  }, [powerLevel]);

  function handleCharacter() {
    DBZCharacters.sort((x, y) => x.powerLevel - y.powerLevel);
    DBZCharacters.map((character) => {
      if (character.powerLevel <= powerLevel) ch = character;
      return character;
    });
    return ch;
  }

  function handleIncrease() {
    id = setInterval(() => {
      setPowerLevel((prevPowerLevel) => {
        return prevPowerLevel + 11;
      });
    }, 50);
  }

  function handleStop() {
    if (id) clearInterval(id);
  }

  function handleKaioken(event) {
    if (event.target.checked) {
      const val = event.target.value;
      setPowerLevel((prevPowerLevel) => {
        return Math.floor(prevPowerLevel * (val / kaioken));
      });
      setKaioken(() => val);
    }
  }

  useEffect(() => {
    const staminaID = setInterval(
      () => setStamina((prevStamina) => prevStamina + 11),
      500
    );
    return () => clearInterval(staminaID);
  }, [setStamina]);

  useEffect(() => {
    setStamina((prevStamina) => {
      if (countT3 > 0) return prevStamina - staminaCost;
      else return prevStamina;
    });
  }, [countT3]);

  useEffect(() => {
    const id = setInterval(
      setPowerLevel((prevPowerLevel) => prevPowerLevel + countT1),
      1000
    );
    return () => clearInterval(id);
  }, [countT1]);

  function sendStamina() {
    props.parentCallBack(stamina);
  }

  useEffect(() => {
    props.parentCallBack(stamina);
  }, [stamina]);

  return (
    <div>
      <h1 className=".powerLevel">PowerLevel = {powerLevel}</h1>
      <h2 className=".powerLevel">Stamina = {stamina}</h2>
      <div style={{ display: "inline-block", left: "80%" }}>
        <h2>Charge!!!</h2>
        <img
          src="https://media.tenor.com/images/e33e37a07ff08939d7f4f98d30d717f8/tenor.gif"
          alt="charge"
          onMouseEnter={handleIncrease}
          onMouseLeave={handleStop}
        ></img>
        <br />
        Not Kaioken:
        <input name="Kaioken" type="radio" value="1" onChange={handleKaioken} />
        Kaioken x2:
        <input name="Kaioken" type="radio" value="2" onChange={handleKaioken} />
        Kaioken x4:
        <input name="Kaioken" type="radio" value="4" onChange={handleKaioken} />
        Kaioken x10:
        <input
          name="Kaioken"
          type="radio"
          value="10"
          onChange={handleKaioken}
        />
        Kaioken x20:
        <input
          name="Kaioken"
          type="radio"
          value="20"
          onChange={handleKaioken}
        />
      </div>

      <h3
        style={{
          fontSize: "30px",
          position: "absolute",
          display: "inline-block",
          marginLeft: "450px",
          marginTop: "-70px",
        }}
      >
        {handleCharacter().name}
      </h3>
      <img
        className=".character"
        height="500px"
        width="500px"
        style={{ marginLeft: "300px", marginTop: "0px" }}
        src={handleCharacter().img}
        alt="Character Power Level"
      />
    </div>
  );
}

export default PowerLevel;
