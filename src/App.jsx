import { useState } from "react";
import "./App.css";
import { Calculator } from "./components/Calculator";
import { TipSelector } from "./components/TipSelector";

function App() {
  const [tipPercentage, setTipPercentage] = useState(0);
  const [bill, setBill] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);

  return (
    <>
      <div className="wrapper">
        <div className="content-wrapper">
          <TipSelector
            bill={bill}
            setBill={setBill}
            people={numberOfPeople}
            setPeople={setNumberOfPeople}
            tip={tipPercentage}
            setTip={setTipPercentage}
          />
          <Calculator people={numberOfPeople} bill={bill} tip={tipPercentage} />
        </div>
      </div>
      {/* <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </>
  );
}

export default App;
