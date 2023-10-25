import React from "react";
import styled from "styled-components";

const MyButton = () => {
  return <StyledButton>Hover and Active</StyledButton>;
};

export default MyButton;

const StyledButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  margin: 50px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #3fb929;
  }

  &:active {
    background-color: #b71818;
  }
`;
