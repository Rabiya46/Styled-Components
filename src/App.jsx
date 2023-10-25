import React from "react";
import "./App.css";
import Cards from "./components/firstItem/Cards";
import Button from "./components/secondItem/Button";
import Parent from "./components/thirdItem/Parent";
import Conditinals from "./components/fourthItem/Conditinals";
import Responsive from "./components/fifthItem/Responsive";
import Form from "./components/registrList/Form";

const App = () => {
  return (
    <>
      <Cards />
      <Button />
      <Parent />
      <Conditinals />
      <Responsive />
      <Form />
    </>
  );
};

export default App;
