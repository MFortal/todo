import { useNavigate } from "react-router-dom";
import pathImg from "../../icons/plus.svg";

export const Button = ({ value, flagPlus = false }) => {
  const navigate = useNavigate();

  const onClick = () => (flagPlus ? navigate("/Todo/create") : null);

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
