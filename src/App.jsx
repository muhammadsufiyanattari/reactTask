import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  // state hum dom me changing ke lye karte hen agar hum hooks use nahi karen ge to dom me changing nahi ho gi
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((previousCount) => previousCount + 1);
  };
  const dicrement = () => {
    setCount((previousCount) =>
      previousCount - 1 == -1 ? (previousCount = 0) : previousCount - 1,
    );
  };

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button 
          style={{
            backgroundColor: "yellowgreen",
            cursor:"pointer",
            border: "none",
            padding: "5px 10px",
            margin: "5px",
            borderRadius:"10px"
          }}
        onClick={increment}>Click Me for Increment</button>
        <button
          style={{
            backgroundColor: "red",
            cursor:"pointer",
            border: "none",
            padding: "5px 10px",
            margin: "5px",
            borderRadius:"10px"
          }}
          onClick={dicrement}>
          Click Me for Dicrement
        </button>
      </div>
    </>
  );
}

export default App;
