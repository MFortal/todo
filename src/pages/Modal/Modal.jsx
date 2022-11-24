import { useNavigate } from "react-router-dom";
import pathClose from "../../icons/closeModal.svg";

export const Modal = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="modal">
        <div className="modal__content">
          <button
            className="modal__close"
            onClick={() => {
              navigate("/Todo");
            }}>
            <img src={pathClose} alt="" />
          </button>
          {props.children}
        </div>
      </div>
    </>
  );
};
export default Modal;
