import "./css/calculator.css";

export const Calculator = ({ people, bill, tip }) => {
  const totalTip = (bill / 100) * tip;
  const tipPerPerson = totalTip / people;
  const totalPerPerson = (Number(bill) + totalTip) / people;

  return (
    <>
      <div className="calculator_wrapper">
        <div className="text_wrapper">
          <div>
            <p>Tip Amount</p>
            <p className="small_text">/ person</p>
          </div>
          <p className="calculator">{`$${tipPerPerson}`}</p>
        </div>
        <div className="text_wrapper">
          <div>
            <p>Total</p>
            <p className="small_text">/ person</p>
          </div>
          <p className="calculator">{`$${totalPerPerson}`}</p>
        </div>
        <button className="reset_button">RESET</button>
      </div>
    </>
  );
};
