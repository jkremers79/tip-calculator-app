import "./userInput.css";

export const UserInput = ({ fn, setFn, error }) => {
  return (
    <input
      className={`user_input ${error ? "error" : ""}`}
      value={fn}
      type="number"
      onChange={(e) => setFn(e.target.value)}
    ></input>
  );
};
