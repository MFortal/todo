import { useLocation, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { FLAG } from "../../../js/common";

import Button from "../../../components/Button/Button";

import pathClose from "../../../icons/closeModal.svg";

export const ModalView = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const card = location.state.card;

  const deadline = dayjs(card.deadline.seconds * 1000);
  const dateCompletion = dayjs(card.dateCompletion.seconds * 1000);
  const flag = location.state.flag;

  const formatDate = (date) => date.format("DD/MM/YY");

    const statusCardText =
      flag === FLAG.COMPLETED
        ? `Выполнена ${formatDate(dateCompletion)}`
        : flag === FLAG.EXPIRED
        ? "Просрочена"
        : "";


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
          <div className="modal_main modal_main-view">
            <p className="modal_main_card-name">{card.name}</p>
            <p className="modal_main_card-desc">
              {card.description?.length > 0 ? card.description : "Нет описания"}
            </p>
            <span className="modal_main_card-deadline">
              Выполнить до {formatDate(deadline)}
            </span>
            <span className="modal_main_card-deadline">{statusCardText}</span>
          </div>
          <Button value={"Закрыть"} />
        </div>
      </div>
    </>
  );
};

export default ModalView;
