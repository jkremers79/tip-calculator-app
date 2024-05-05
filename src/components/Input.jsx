import "./css/input.css";
import { TipButton } from "./ui/TipButton";

export const Input = () => {
  return (
    <>
      <div className="input_wrapper">
        <div className="bill"></div>
        Bill Select
        <div className="tip"></div>
        <h1>Select Tip %</h1>
        <TipButton description="5%" />
        <TipButton description="10%" />
        <TipButton description="15%" />
        <TipButton description="25%" />
        <TipButton description="50%" />
        <input
          className="custom_tip"
          placeholder="Custom"
          type="number"
        ></input>
        <div className="people">Number of People</div>
      </div>
    </>
  );
};
