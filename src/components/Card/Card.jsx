import { NavLink } from "react-router-dom";

import {
  FLAG,
  currentDate,
  formatTStoDate,
  getDefaultDate,
  formatDate,
} from "../../js/common";

import pathEdit from "../../icons/edit.svg";
import pathDelete from "../../icons/delete.svg";
import pathClip from "../../icons/clip.svg";

export const Card = ({ card }) => {
  const deadline = formatTStoDate(card.deadline.seconds);
  const dateCompletion = formatTStoDate(card.dateCompletion.seconds);
  const defaultDate = getDefaultDate;

  let classContainerCard = "card-container ";
  let flag = FLAG.DEFAULT;

  // просрочена задача
  if (deadline.isBefore(currentDate) && dateCompletion.isSame(defaultDate)) {
    classContainerCard += "expired";
    flag = FLAG.EXPIRED;
  }

  // задача выполнена
  if (!dateCompletion.isSame(defaultDate)) {
    classContainerCard += "complited";
    flag = FLAG.COMPLETED;
  }

  return (
    <>
      <NavLink to={`/Todo/view/${card.id}`} state={{ card, flag }} id="1">
        <div className={classContainerCard}>
          <div className="card-header">
            <p className="card-header__name">{card.name}</p>
            <div className="card-header__btns">
              <NavLink
                to={`/Todo/edit/${card.id}`}
                state={{ card, flag }}
                id="2">
                <button className="card-btn">
                  <img src={pathEdit} alt="" />
                </button>
              </NavLink>
              <NavLink to={`/Todo/delete/${card.id}`} id="3">
                <button className="card-btn">
                  <img src={pathDelete} alt="" />
                </button>
              </NavLink>
            </div>
          </div>
          <div className="card-main">
            <p className="card-main__desc">
              {card.description?.length > 0 ? card.description : "Нет описания"}
            </p>

            <div
              className={
                card.files?.length > 0 ? "card-main__files" : "display_none"
              }>
              <img src={pathClip} alt="" className="files__img" />
              <span className="files__count">{card.files?.length}</span>
            </div>
            <span className="card-main__deadline">
              Выполнить до {formatDate(deadline)}
            </span>
            <span className="card-main__deadline">
              {flag === FLAG.COMPLETED
                ? `Выполнена ${formatDate(dateCompletion)}`
                : ""}
            </span>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Card;
