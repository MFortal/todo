import { useLocation } from "react-router-dom";
import { FLAG, formatTStoDate, formatDate } from "../../../js/common";

import Button from "../../../components/Button/Button";
import Modal from "../Modal";

export const ModalView = () => {
  const location = useLocation();
  const card = location.state.card;
  const flag = location.state.flag;

  const deadline = formatTStoDate(card.deadline.seconds);
  const dateCompletion = formatTStoDate(card.dateCompletion.seconds);

  const statusCardText =
    flag === FLAG.COMPLETED
      ? `Выполнена ${formatDate(dateCompletion)}`
      : flag === FLAG.EXPIRED
      ? "Просрочена"
      : "";

  const children = (
    <>
      <h3 className="modal__header">Задача</h3>
      <div className="modal__main modal__main-view">
        <p className="modal__main_card-name">{card.name}</p>
        <p className="modal__main_card-desc">
          {card.description?.length > 0 ? card.description : "Нет описания"}
        </p>
        <span className="modal__main_card-deadline">
          Выполнить до {formatDate(deadline)}
        </span>
        <span className="modal__main_card-deadline">{statusCardText}</span>
      </div>
      <Button value={"Закрыть"} />
    </>
  );

  return <Modal children={children} />;
};

export default ModalView;
