import React from "react";
import styled from "styled-components";

const Responsive = () => {
  return (
    <div>
      <ResponsiveText>
        Будет менять свой размер текста в зависимости от размера экрана.
      </ResponsiveText>
    </div>
  );
};

export default Responsive;

const ResponsiveText = styled.p`
  font-size: 16px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    text-align: center;
  }
`;
