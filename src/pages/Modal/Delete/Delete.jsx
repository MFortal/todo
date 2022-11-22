import { useNavigate } from "react-router-dom";

import pathClose from "../../../icons/closeModal.svg";

export const ModalEdit = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="modal">
        <div className="modal_content">
          <button
            className="modal_close"
            onClick={() => {
              navigate("/Todo");
            }}>
            <img src={pathClose} alt="" />
          </button>
          <div className="modal_contentDelete">
            <h3 className="modal_headerText">Удалить задачу?</h3>
            <div className="modal_buttons">
              <button className="modal_btn">Да</button>
              <button
                className="modal_btn"
                onClick={() => {
                  navigate("/Todo");
                }}>
                Нет
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalEdit;
