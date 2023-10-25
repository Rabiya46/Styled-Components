import React from "react";
import CardStyle from "./CardStyle";

const Cards = () => {
  return (
    <>
      <CardStyle backgroundcolor="#ffcccc">
        <h2>Красная карточка</h2>
        <p>Welcome!</p>
      </CardStyle>

      <CardStyle backgroundcolor="#ccffcc">
        <h2>Зеленая карточка</h2>
        <p>Hello.</p>
      </CardStyle>
    </>
  );
};

export default Cards;
