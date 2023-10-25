import React, { useState } from "react";
import { styled } from "styled-components";
import FormInput from "./FormInput";
import FormButtons from "./FormButtons";
import backgroundImage from "../../assets/images/backgroundImage.png";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState(false);

  const handleGoogleLogin = () => {
    alert("Нет Google аккаунта");
  };

  const handleChangeValue = (e) => {
    if (e.target.name === "login") {
      setInputValue(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const validateInput = (input) => {
    input.preventDefault();
    if (inputValue === "") {
      alert("Поле не должно быть пустым");
    }
    if (password.length < 6) {
      alert("Пароль должен содержать 6 символов");
    } else if (inputValue.length > 1 || password.length > 8) {
      alert(`Name: ${inputValue} Password: ${password}`);
    }
  };

  return (
    <MainContainer>
      <Container onSubmit={validateInput}>
        <h2>Вход в аккаунт</h2>
        <FormInput
          placeholder="Login "
          type="text"
          value={inputValue}
          onChange={handleChangeValue}
          name="login"
        />
        <FormInput
          placeholder="Password"
          type="password"
          value={password}
          onChange={handleChangeValue}
          name="password"
        />
        <p>Или</p>
        <FormButtons
          type="submit"
          disabled={password.length < 8 || !inputValue}
          onGoogleLogin={handleGoogleLogin}
        />
      </Container>
    </MainContainer>
  );
};

export default Form;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImage});
  background-size: cover;
`;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px;
  border: 2px solid black;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  border: 0.5px solid;
`;
