import "./tipButton.css";

export const TipButton = ({ description, perc, clickFn }) => {
  return (
    <button className="tip_button" onClick={() => clickFn(perc)}>
      {description}
    </button>
  );
};
