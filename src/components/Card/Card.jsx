import { NavLink } from "react-router-dom";

import pathEdit from "../../icons/edit.svg";
import pathDelete from "../../icons/delete.svg";
import pathClip from "../../icons/clip.svg";

export const Card = ({ card }) => {
  return (
    <>
      <NavLink to={`/Todo/view/${card.id}`} id="1">
        <div className="card-container">
          <div className="card-header">
            <p className="card-header_name">{card.name}</p>
            <div className="card-header__btns">
              <NavLink to={`/Todo/edit/${card.id}`} id="2">
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
            <div className="card-main__files">
              <img src={pathClip} alt="" className="files__img" />
              <span className="files__count">2</span>
            </div>
            <span className="card-main__deadline">Выполнить до 12/01/1999</span>
            <span className="card-main__deadline">Выполнена 12/01/1999</span>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Card;
