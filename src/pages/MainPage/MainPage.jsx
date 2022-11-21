import React from "react";

import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";

export const MainPage = () => {
  const cards = [
    {
      id: 1,
      name: "Название 1",
      description: "Описание 1",
    },
    {
      id: 2,
      name: "Название 2",
      description: "Описание 2",
    },
    {
      id: 3,
      name: "Название 3",
      description: "Описание 3",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="main">
          <div className="main_cards">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </div>
          <Button value={"Добавить задачу"} flagPlus={true} />
        </div>
      </div>
    </>
  );
};

export default MainPage;
