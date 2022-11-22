import { deleteDoc, doc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../../firebase";

import pathClose from "../../../icons/closeModal.svg";

export const ModalDelete = () => {
  const navigate = useNavigate();
  const { cardId } = useParams();

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

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
              <button
                className="modal_btn"
                onClick={() => {
                  deleteTodo(cardId);
                  navigate("/Todo");
                }}>
                Да
              </button>
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

export default ModalDelete;
