import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const appendValue = (value) => {
    setDisplay(display + value);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const backspace = () => {
    setDisplay(display.slice(0, -1));
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#4c5667,#c8a2ed)",
      }}
    >
      <div
        style={{
          background: "rgba(250,238,238,0.1)",
          backdropFilter: "blur(15px)",
          padding: "25px",
          borderRadius: "25px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        <input
          type="text"
          value={display}
          readOnly
          style={{
            width: "100%",
            height: "70px",
            border: "none",
            outline: "none",
            borderRadius: "15px",
            marginBottom: "20px",
            textAlign: "right",
            padding: "15px",
            fontSize: "28px",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,75px)",
            gap: "12px",
          }}
        >
          <button onClick={clearDisplay}>C</button>
          <button onClick={() => appendValue("/")}>÷</button>
          <button onClick={() => appendValue("*")}>×</button>
          <button onClick={() => appendValue("-")}>−</button>

          <button onClick={() => appendValue("7")}>7</button>
          <button onClick={() => appendValue("8")}>8</button>
          <button onClick={() => appendValue("9")}>9</button>
          <button onClick={() => appendValue("+")}>+</button>

          <button onClick={() => appendValue("4")}>4</button>
          <button onClick={() => appendValue("5")}>5</button>
          <button onClick={() => appendValue("6")}>6</button>
          <button onClick={() => appendValue(".")}>.</button>

          <button onClick={() => appendValue("1")}>1</button>
          <button onClick={() => appendValue("2")}>2</button>
          <button onClick={() => appendValue("3")}>3</button>

          <button
            onClick={calculate}
            style={{
              background: "#00c853",
              color: "white",
            }}
          >
            =
          </button>

          <button
            onClick={() => appendValue("0")}
            style={{ gridColumn: "span 2" }}
          >
            0
          </button>

          <button onClick={backspace}>⌫</button>
          <button onClick={() => appendValue("%")}>%</button>
        </div>
      </div>
    </div>
  );
}

export default App;