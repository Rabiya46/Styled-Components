import React from "react";
import styled from "styled-components";
import Child from "./Child";

const Parent = () => {
  return (
    <ParentContainer>
      <Child textcolor="#3700ff" backgroundcolor="#fff" />
    </ParentContainer>
  );
};

export default Parent;

const ParentContainer = styled.div`
  background-color: #d904dd;
  padding: 20px;
`;
