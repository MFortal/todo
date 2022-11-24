export const InputsContainer = ({
  nameInput,
  nameText,
  valueText,
  valueInput,
  placeholderInput,
  placeholderText,
  ...props
}) => {
  return (
    <div className="inputs-container">
      <input
        placeholder={placeholderInput}
        type="text"
        name={nameInput}
        value={valueInput}
        {...props}
        className="input"
        required
      />

      <textarea
        placeholder={placeholderText}
        className="textarea"
        type="text"
        name={nameText}
        value={valueText}
        {...props}
      />
    </div>
  );
};

export default InputsContainer;
