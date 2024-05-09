import "./tipButton.css";

export const TipButton = ({ description, activeTipButton, id, clickFn }) => {
  return (
    <button
      className={`tip_button  ${activeTipButton[id] ? "active" : ""}`}
      onClick={() => clickFn(id)}
    >
      {description}
    </button>
  );
};
