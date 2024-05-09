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
  let errPeople = false;
  let errBill = false;
  let errCustomTip = false;

  if (people <= 0) {
    errPeople = true;
  }

  if (bill < 0) {
    errBill = true;
  }

  if (manualTip < 0) {
    errCustomTip = true;
  }

  return (
    <>
      <div className="tip_selector">
        <div className="bill">
          <div className="text_wrapper">
            <span className="header_tag">Bill</span>

            <span className={`err_msg ${errBill ? "active" : ""}`}>
              Negative number selected
            </span>
          </div>
          <div className="input_wrapper">
            <img src={dollarIcon} className="input_icon"></img>
            <UserInput fn={bill} setFn={setBill} error={errBill} />
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
              className={`custom_tip ${errCustomTip ? "error" : ""}`}
              placeholder="Custom"
              value={manualTip}
              type="number"
              onChange={(e) => setManualTip(e)}
            ></input>
          </div>
        </div>
        <div className="people">
          <div className="text_wrapper">
            <span className="header_tag"> Number of People</span>
            <span className={`err_msg ${errPeople ? "active" : ""}`}>
              Cannot be 0 or lower
            </span>
          </div>
          <div className="input_wrapper">
            <img src={personIcon} className="input_icon"></img>
            <UserInput fn={people} setFn={setPeople} error={errPeople} />
          </div>
        </div>
      </div>
    </>
  );
};
