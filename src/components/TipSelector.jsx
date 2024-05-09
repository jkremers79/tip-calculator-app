import "./css/tipselector.css";
import dollarIcon from "../assets/images/icon-dollar.svg";
import personIcon from "../assets/images/icon-person.svg";
import { TipButton } from "./ui/TipButton";
import { UserInput } from "./ui/UserInput";

export const TipSelector = ({
  bill,
  setBill,
  people,
  setPeople,
  manualTip,
  setManualTip,
  setTipButton,
  activeTipButton,
}) => {
  let err = false;

  if (people <= 0) {
    err = true;
  }

  return (
    <>
      <div className="tip_selector">
        <div className="bill">
          <span className="header_tag">Bill</span>
          <div className="input_wrapper">
            <img src={dollarIcon} className="input_icon"></img>
            <UserInput fn1={bill} fn2={setBill} error={false} />
          </div>
        </div>
        <div className="select_tip">
          <span className="header_tag">Select Tip %</span>
          <div className="buttons_wrapper">
            <TipButton
              description="5%"
              activeTipButton={activeTipButton}
              id="btn1"
              clickFn={setTipButton}
            />
            <TipButton
              description="10%"
              activeTipButton={activeTipButton}
              id="btn2"
              clickFn={setTipButton}
            />
            <TipButton
              description="15%"
              activeTipButton={activeTipButton}
              id="btn3"
              clickFn={setTipButton}
            />
            <TipButton
              description="25%"
              activeTipButton={activeTipButton}
              id="btn4"
              clickFn={setTipButton}
            />
            <TipButton
              description="50%"
              activeTipButton={activeTipButton}
              id="btn5"
              clickFn={setTipButton}
            />
            <input
              className="custom_tip"
              placeholder="Custom"
              value={manualTip}
              onChange={(e) => setManualTip(e)}
            ></input>
          </div>
        </div>
        <div className="people">
          <div className="text_wrapper_people">
            <span className="header_tag"> Number of People</span>
            <span className={`err_msg ${err ? "active" : ""}`}>
              Cannot be 0
            </span>
          </div>
          <div className="input_wrapper">
            <img src={personIcon} className="input_icon"></img>
            <UserInput fn1={people} fn2={setPeople} error={err} />
          </div>
        </div>
      </div>
    </>
  );
};

// ### Primary

// - Strong cyan: hsl(172, 67%, 45%)

// ### Neutral

// - Very dark cyan: hsl(183, 100%, 15%)
// - Dark grayish cyan: hsl(186, 14%, 43%)
// - Grayish cyan: hsl(184, 14%, 56%)
// - Light grayish cyan: hsl(185, 41%, 84%)
// - Very light grayish cyan: hsl(189, 41%, 97%)
// - White: hsl(0, 0%, 100%)
