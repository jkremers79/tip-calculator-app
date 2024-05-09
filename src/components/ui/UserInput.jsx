import "./userInput.css";

export const UserInput = ({ fn1, fn2, error }) => {
  console.log(error);
  return (
    <input
      className={`user_input ${error ? "error" : ""}`}
      value={fn1}
      onChange={(e) => fn2(e.target.value)}
    ></input>
  );
};
