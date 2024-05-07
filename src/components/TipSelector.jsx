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
  tip,
  setTip,
}) => {
  return (
    <>
      <div className="tip_selector">
        <div className="bill">
          <span className="header_tag">Bill</span>
          <div className="input_wrapper">
            <img src={dollarIcon} className="input_icon"></img>
            <UserInput fn1={bill} fn2={setBill} />
          </div>
        </div>
        <div className="select_tip">
          <span className="header_tag">Select Tip %</span>
          <div className="buttons_wrapper">
            <TipButton description="5%" perc="5" clickFn={setTip} />
            <TipButton description="10%" perc="10" clickFn={setTip} />
            <TipButton description="15%" perc="15" clickFn={setTip} />
            <TipButton description="25%" perc="25" clickFn={setTip} />
            <TipButton description="50%" perc="50" clickFn={setTip} />
            <input
              className="custom_tip"
              placeholder="Custom"
              onChange={(e) => setTip(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="people">
          <div className="text_wrapper_people">
            <span className="header_tag"> Number of People</span>
            <span className="err_msg">test</span>
          </div>
          <div className="input_wrapper">
            <img src={personIcon} className="input_icon"></img>
            <UserInput fn1={people} fn2={setPeople} />
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
