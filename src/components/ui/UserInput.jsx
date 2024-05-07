import "./userInput.css";

export const UserInput = ({ fn1, fn2 }) => {
  return (
    <input
      className="user_input"
      value={fn1}
      onChange={(e) => fn2(e.target.value)}
    ></input>
  );
};
