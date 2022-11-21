import pathComment from "../../icons/comment.svg";
import pathDescription from "../../icons/description.svg";

export const Card = ({ card }) => {
  return (
    <>
      <div className="card-container">
        <div className="card-header">
          <p className="card-header_name">{card.name}</p>

          <div className="card-header_btn">
            <span className="card-header_btnElem"></span>
            <span className="card-header_btnElem"></span>
            <span className="card-header_btnElem"></span>
          </div>
        </div>
        <div className="card-main">
          <div className="card-main_icons">
            {card.description?.length > 0 ? (
              <p>{card.description}</p>
            ) : (
              <p>Нет описания</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
