import classNames from "classnames";
import styles from "./Input.module.css";

export const Input = ({
  nameInput,
  nameText,
  valueText,
  valueInput,
  placeholderInput,
  placeholderText,
  ...props
}) => {
  return (
    <div className={classNames(styles.container)}>
      <input
        placeholder={placeholderInput}
        type="text"
        name={nameInput}
        value={valueInput}
        {...props}
        className={classNames(styles.input)}
      />

      <textarea
        placeholder={placeholderText}
        className={classNames(styles.input, styles.textarea)}
        type="text"
        name={nameText}
        value={valueText}
        {...props}
      />
    </div>
  );
};

export default Input;
