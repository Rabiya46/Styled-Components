import React from "react";
import styled from "styled-components";

const Child = ({ textcolor, backgroundcolor }) => {
  return (
    <ChildContainer textcolor={textcolor} backgroundcolor={backgroundcolor}>
      JavaScript 11
    </ChildContainer>
  );
};

export default Child;

const ChildContainer = styled.div`
  color: ${(props) => props.textcolor};
  background-color: ${(props) => props.backgroundcolor};
  padding: 10px;
  text-align: center;
  font-size: larger;
`;
