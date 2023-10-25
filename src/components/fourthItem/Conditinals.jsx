import React from "react";
import ConditionalStyles from "./ConditinalStyles";

const Conditinals = () => {
  return (
    <div className="App">
      <ConditionalStyles error={true}>
        Это компонент с ошибкой
      </ConditionalStyles>
      <ConditionalStyles error={false}>Это обычный компонент</ConditionalStyles>
    </div>
  );
};

export default Conditinals;
