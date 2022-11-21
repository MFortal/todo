import { NavLink } from "react-router-dom";

import pathIcon from "../../icons/notfound.svg";

export const NotFoundPage = () => {
  return (
    <div className="notfound-container">
      <img alt="404" src={pathIcon}></img>
      <p>Страница не найдена</p>
      <NavLink to={`/Todo/`} id="2">
        <p className="notfound-container_back">На главную</p>
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
