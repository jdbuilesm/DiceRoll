// import "./styles.css";
import { useState } from "react";
import Resultado from "../Resultado/Resultado";
import ShowImages from "../ShowImages/ShowImages";

export default function DiceGame() {
  //guardar el numero / cantidad de dados a sacar
  const [numberOfDice, setNumberOfDice] = useState(null);

  // para usar con las imagenes
  const [roll, setRoll] = useState([]); // [1, 3, 5]

  // sumatoria
  const [sumOfDice, setSumOfDice] = useState();

  // funcion que reciba el boton (la cantidad de dados)
  const diceRoll = (num) => {
    let rolls = [];
    let sumOfDice = 0;
    for (let i = 0; i < num; i++) {
      rolls[i] = Math.floor(Math.random() * 6) + 1;
      sumOfDice += rolls[i];
    }
    //GUARDAMOS EN LOS ESTADOS LOS VALORES:::
    // la cantidad de dados que se pidieron
    setNumberOfDice(num);

    // la sumatoria
    setSumOfDice(sumOfDice);

    // el array con los dados
    setRoll(rolls);
  };
  // hacer una funcion que limpie los estados
  const resetStates = () => {
    return setNumberOfDice(null), setSumOfDice(null), setRoll([]);
  };

  return (
    <div className="App">
      <h1>Dice Roller</h1>
      <div>
        {[1, 2, 3, 4, 5].map((number) => {
          // hacer logica
          let text = number === 1 ? "die" : "dice";
          return (
            <button type="button" key={number} onClick={() => diceRoll(number)}>
              {number} {text}
            </button>
          );
        })}
      </div>
      <div>
        {/* [1, 3, 5] array con los numeros*/}
        {roll.map((r, i) => {
          return <ShowImages roll={r} key={i} />;
        })}
      </div>
      <Resultado sum={sumOfDice} max={numberOfDice} />

      <button type="button" onClick={() => resetStates()}>
        Volver a jugar
      </button>
    </div>
  );
}
