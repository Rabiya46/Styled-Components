import React from "react";
import { styled } from "styled-components";

const CardStyle = ({ backgroundcolor, children }) => {
  return <Card backgroundcolor={backgroundcolor}>{children}</Card>;
};

export default CardStyle;

const Card = styled.div`
  background-color: ${(props) => props.backgroundcolor || "#ffffff"};
  border: 1px solid #e0e0e0;
  text-align: center;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;
`;
