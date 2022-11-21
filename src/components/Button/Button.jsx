import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import pathImg from "../../icons/plus.svg";
import styles from "./Button.module.css";

export const Button = ({ value, flagPlus = false, boardId }) => {
  const navigate = useNavigate();

  const onClick = () =>
    flagPlus
      ? navigate("/TodoList/create", { state: { boardId: boardId } })
      : null;

  return (
    <>
      <button
        className={classNames(styles.container)}
        onClick={onClick}
        type="submit">
        {flagPlus && <img alt="" src={pathImg} />}
        {value}
      </button>
    </>
  );
};

export default Button;
