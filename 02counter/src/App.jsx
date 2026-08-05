import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {

const [counter, setCounter] = useState(0)

  // let counter = 5

  const addValue = () => {
    // counter = counter + 1
    if (counter < 20){

      setCounter(prevCounter => prevCounter + 1)
      // setCounter(prevCounter => prevCounter + 1)
      // setCounter(prevCounter => prevCounter + 1)
      // setCounter(prevCounter => prevCounter + 1)
    }    
  }

  const removeValue = () => {
    if ( counter > 0){
      
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>React</h1>
      <h2>counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
    </>
  );
}

export default App;
