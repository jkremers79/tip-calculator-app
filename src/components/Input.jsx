import "./css/input.css";
import dollarIcon from "../assets/images/icon-dollar.svg";
import personIcon from "../assets/images/icon-person.svg";
import { TipButton } from "./ui/TipButton";
import { UserInput } from "./ui/UserInput";

export const Input = () => {
  return (
    <>
      <div className="input_wrapper">
        <div className="bill">
          <span className="header_tag">Bill</span>
          <div className="input_wrapper">
            <img src={dollarIcon} className="input_icon"></img>
            <UserInput />
          </div>
        </div>
        <div className="select_tip">
          <span className="header_tag">Select Tip %</span>
          <div className="buttons_wrapper">
            <TipButton description="5%" />
            <TipButton description="10%" />
            <TipButton description="15%" />
            <TipButton description="25%" />
            <TipButton description="50%" />
            <input className="custom_tip" placeholder="Custom"></input>
          </div>
        </div>
        <div className="people">
          <div className="text_wrapper_people">
            <span className="header_tag"> Number of People</span>
            <span className="err_msg">test</span>
          </div>
          <div className="input_wrapper">
            <img src={personIcon} className="input_icon"></img>
            <UserInput />
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
