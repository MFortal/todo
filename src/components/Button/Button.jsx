import pathImg from "../../icons/plus.svg";

export const Button = ({ value, flagPlus = false}) => {

  return (
    <>
      <button
        className='btn-container'
        type="submit">
        {flagPlus && <img alt="" src={pathImg} />}
        {value}
      </button>
    </>
  );
};

export default Button;
