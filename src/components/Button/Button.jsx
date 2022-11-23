import pathImg from "../../icons/plus.svg";

export const Button = ({ value, flagPlus = false, onClick }) => {
  return (
    <>
      <button className="btn-container" type="submit" onClick={onClick}>
        {flagPlus && <img alt="" src={pathImg} />}
        {value}
      </button>
    </>
  );
};

export default Button;
