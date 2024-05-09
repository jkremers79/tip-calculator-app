import "./App.css";
import { useState } from "react";
import { Calculator } from "./components/Calculator";
import { TipSelector } from "./components/TipSelector";

function App() {
  const [tipPercentage, setTipPercentage] = useState(0);
  const [manualTip, setManualTip] = useState("");
  const [bill, setBill] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const [activeTipButton, setActiveTipButton] = useState({
    btn1: false,
    btn2: false,
    btn3: false,
    btn4: false,
    btn5: false,
  });

  function handleClick(btnId) {
    switch (btnId) {
      case "btn1":
        setActiveTipButton({
          btn1: true,
          btn2: false,
          btn3: false,
          btn4: false,
          btn5: false,
        });
        setTipPercentage(5);
        setManualTip("");
        break;
      case "btn2":
        setActiveTipButton({
          btn1: false,
          btn2: true,
          btn3: false,
          btn4: false,
          btn5: false,
        });
        setTipPercentage(10);
        setManualTip("");
        break;
      case "btn3":
        setActiveTipButton({
          btn1: false,
          btn2: false,
          btn3: true,
          btn4: false,
          btn5: false,
        });
        setTipPercentage(15);
        setManualTip("");
        break;
      case "btn4":
        setActiveTipButton({
          btn1: false,
          btn2: false,
          btn3: false,
          btn4: true,
          btn5: false,
        });
        setTipPercentage(25);
        setManualTip("");
        break;
      case "btn5":
        setActiveTipButton({
          btn1: false,
          btn2: false,
          btn3: false,
          btn4: false,
          btn5: true,
        });
        setTipPercentage(50);
        setManualTip("");
    }
  }

  function handleCustomTip(e) {
    setActiveTipButton({
      btn1: false,
      btn2: false,
      btn3: false,
      btn4: false,
      btn5: false,
    });
    setManualTip(e.target.value);
    setTipPercentage(e.target.value);
  }

  function handleReset() {
    setTipPercentage(0), setNumberOfPeople(1), setBill(0), setManualTip("");
  }

  return (
    <>
      <div className="wrapper">
        <div className="content-wrapper">
          <TipSelector
            bill={bill}
            setBill={setBill}
            people={numberOfPeople}
            setPeople={setNumberOfPeople}
            manualTip={manualTip}
            setManualTip={handleCustomTip}
            setTipButton={handleClick}
            activeTipButton={activeTipButton}
          />
          <Calculator
            people={numberOfPeople}
            bill={bill}
            tip={tipPercentage}
            clickFn={handleReset}
          />
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/jkremers79" target="_blank">
          Jorn Kremers
        </a>
        .
      </div>
    </>
  );
}

export default App;
