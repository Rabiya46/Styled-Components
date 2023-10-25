import React from "react";
import styled from "styled-components";
import googleIcon from "../../assets/icons/free-icon-google-symbol-2875404 1.png";

const FormButtons = ({ onClick, onGoogleLogin, type = "button", disabled }) => {
  return (
    <>
      <Button onClick={onGoogleLogin}>
        <Icon src={googleIcon} alt="" />
        Вход через Google
      </Button>
      <ButtonSignUp onClick={onClick} type={type} disabled={disabled}>
        Вход
      </ButtonSignUp>
    </>
  );
};

export default FormButtons;

const Button = styled.button`
  width: 250px;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
`;

const ButtonSignUp = styled.button`
  width: 250px;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
  color: white;
  background: ${(props) => (props.disabled ? "grey" : "black")};
`;

const Icon = styled.img`
  width: 13px;
  height: 13px;
`;
