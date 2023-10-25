import React from "react";
import styled from "styled-components";

const ConditionalStyledComponent = ({ error, children }) => {
  return <StyledComponent error={error}>{children}</StyledComponent>;
};

export default ConditionalStyledComponent;

const StyledComponent = styled.div`
  background-color: ${(props) => (props.error ? "#ff0000" : "#fff")};
  color: ${(props) => (props.error ? "#fff" : "#000")};
  padding: 10px;
  margin: 20px;
`;
