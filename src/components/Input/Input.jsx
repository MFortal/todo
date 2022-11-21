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
    <div className='input-container'>
      <input
        placeholder={placeholderInput}
        type="text"
        name={nameInput}
        value={valueInput}
        {...props}
        className='input'
      />

      <textarea
        placeholder={placeholderText}
        className='input textarea'
        type="text"
        name={nameText}
        value={valueText}
        {...props}
      />
    </div>
  );
};

export default Input;
