import { useState } from "react";
import "./App.css";
import { Calculator } from "./components/Calculator";
import { Input } from "./components/Input";

function App() {
  const [tipPercentage, setTipPercentage] = useState(0);

  return (
    <>
      <div className="wrapper">
        <div className="content-wrapper">
          <Input />
          <Calculator />
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  );
}

export default App;
