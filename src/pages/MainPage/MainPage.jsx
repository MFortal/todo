import { query, collection, onSnapshot } from "firebase/firestore";
import { React, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { db } from "../../firebase";

import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";

export const MainPage = () => {
  const [cards, setCards] = useState([]);

  // Чтение данных из firebase
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let cards = [];
      querySnapshot.forEach((doc) => {
        cards.push({ ...doc.data(), id: doc.id });
      });
      setCards(cards);
    });
    return () => unsubscribe();
  }, []);

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
      <Outlet />
    </>
  );
};

export default MainPage;
