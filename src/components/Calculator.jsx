import "./css/calculator.css";

export const Calculator = () => {
  return (
    <>
      <div className="calculator_wrapper">
        <div className="amount"></div>
        Tip Amount / person
        <div className="total">Total / person</div>
        <button>Reset</button>
      </div>
    </>
  );
};
