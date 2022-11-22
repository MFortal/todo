import { useNavigate } from "react-router-dom";

import Button from "../../../components/Button/Button";

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
          <h3 className="modal_header">Задача</h3>
          <Button value={"Закрыть"} />
        </div>
      </div>
    </>
  );
};

export default ModalEdit;
