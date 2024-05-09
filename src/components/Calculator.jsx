import "./css/calculator.css";

export const Calculator = ({ people, bill, tip, clickFn }) => {
  const totalTip = (bill / 100) * tip;
  let tipPerPerson = totalTip / people;
  let totalPerPerson = (Number(bill) + totalTip) / people;

  if (people <= 0 || tip < 0 || bill < 0) {
    tipPerPerson = 0;
    totalPerPerson = 0;
  } else {
    tipPerPerson = tipPerPerson.toFixed(2);
    totalPerPerson = totalPerPerson.toFixed(2);
  }

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
        <button className="reset_button" onClick={clickFn}>
          RESET
        </button>
      </div>
    </>
  );
};
