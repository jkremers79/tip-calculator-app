import { useState } from "react";
import "./App.css";

function App() {
  const [tipPercentage, setTipPercentage] = useState(0);

  return (
    <>
      Bill Select Tip % 5% 10% 15% 25% 50% Custom Number of People Tip Amount /
      person Total / person Reset
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