import "./css/calculator.css";

export const Calculator = () => {
  return (
    <>
      <div className="calculator_wrapper">
        <div className="text_wrapper">
          <div>
            <p>Tip Amount</p>
            <p className="small_text">/ person</p>
          </div>
          <p>placeholder</p>
        </div>
        <div className="text_wrapper">
          <div>
            <p>Total</p>
            <p className="small_text">/ person</p>
          </div>
          <p>placeholder</p>
        </div>
        <button className="reset_button">Reset</button>
      </div>
    </>
  );
};
