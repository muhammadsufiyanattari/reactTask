import { useState } from "react";
import "./App.css";

function App() {
  // state hum dom me changing ke lye karte hen agar hum hooks use nahi karen ge to dom me changing nahi ho gi
  const [count, setCount] = useState(0);
  const [showcount, setShowCount] = useState(true);
  const increment = () => {
    setCount((previousCount) => previousCount + 1);
  };
  const dicrement = () => {
    setCount((previousCount) =>
      previousCount - 1 == -1 ? (previousCount = 0) : previousCount - 1,
    );
  };
  const showHideFucn = () => {
    setShowCount((previousShowCount) => !previousShowCount);
  };

  return (
    <>
      {showcount && <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
          margin: "100px auto",
        }}>
        <h1>{count}</h1>
        <div
          className="parentBtn"
          
          >
          <button
            style={{
              backgroundColor: "yellowgreen",
              cursor: "pointer",
              border: "none",
              padding: "5px 10px",
              margin: "5px",
              borderRadius: "10px",
              color: "white",
              fontSize: "15px",
              fontWeight: "bold",
            }}
            onClick={increment}>
            Click Me for Increment
          </button>
          <button
            style={{
              backgroundColor: "red",
              cursor: "pointer",
              border: "none",
              padding: "5px 10px",
              margin: "5px",
              borderRadius: "10px",
              color: "white",
              fontSize: "15px",
              fontWeight: "bold",
            }}
            onClick={dicrement}>
            Click Me for Dicrement
          </button>
        </div>
      </div>}
      <div style={{display:"flex",justifyContent:"center"}}>
        <button
          onClick={showHideFucn}
          style={{
            backgroundColor: "purple",
            cursor: "pointer",
            border: "none",
            padding: "5px 10px",
            margin: "5px",
            borderRadius: "10px",
            color: "white",
            fontSize: "15px",
            fontWeight: "bold",
          }}>
          Show & Hide
        </button>
      </div>
    </>
  );
}

export default App;
