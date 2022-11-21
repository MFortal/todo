import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames";

import { cardSelector } from "../../store/selectors";
import pathComment from "../../icons/comment.svg";
import pathDescription from "../../icons/description.svg";
import Tag from "../Tag/Tag";

import styles from "./Card.module.css";

export const Card = ({ id }) => {
  const card = useSelector(cardSelector).find((c) => c.id === id);

  return (
    <>
      <NavLink to={`/TodoList/edit/${card.id}`} id="1">
        <div className={classNames(styles.container)}>
          <div className={classNames(styles.header)}>
            <p className={classNames(styles.header_name)}>{card.name}</p>
            <NavLink to={`/TodoList/tiket/${card.id}`} id="2">
              <div className={classNames(styles.header_btn)}>
                <span className={classNames(styles.header_btnElem)}></span>
                <span className={classNames(styles.header_btnElem)}></span>
                <span className={classNames(styles.header_btnElem)}></span>
              </div>
            </NavLink>
          </div>
          <div className={classNames(styles.main)}>
            <div className={classNames(styles.main_tags)}>
              {card.tags?.map((tag, index) => {
                return (
                  <div className={classNames(styles.container_tag)} key={index}>
                    <Tag flagColor={tag} />
                  </div>
                );
              })}
            </div>
            <div className={classNames(styles.main_icons)}>
              {card.description?.length > 0 ? (
                <img src={pathDescription} alt="" />
              ) : null}
              {card.comments?.length > 0 ? (
                <div className={classNames(styles.main_comment)}>
                  <img src={pathComment} alt="" />
                  <span className={classNames(styles.main_comment_length)}>
                    {card.comments.length}
                  </span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Card;
