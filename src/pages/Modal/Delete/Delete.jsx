import { deleteDoc, doc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../../firebase";
import Modal from "../Modal";

export const ModalDelete = () => {
  const navigate = useNavigate();
  const { cardId } = useParams();

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  const children = (
    <div className="modal__content-delete">
      <h3 className="modal__header modal__header-delete">Удалить задачу?</h3>
      <div className="modal__buttons">
        <button
          className="modal__btn"
          onClick={() => {
            deleteTodo(cardId);
            navigate("/Todo");
          }}>
          Да
        </button>
        <button
          className="modal__btn"
          onClick={() => {
            navigate("/Todo");
          }}>
          Нет
        </button>
      </div>
    </div>
  );

  return <Modal children={children} />;
};

export default ModalDelete;
