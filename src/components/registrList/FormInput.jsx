import React from "react";
import styled from "styled-components";

const FormInput = ({ placeholder, type, name, value, onChange }) => {
  return (
    <div>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default FormInput;

const Input = styled.input`
  height: 25px;
  width: 250px;
  border: 1px solid black;
  border-radius: 5px;

  &:focus {
    outline: 2px solid blue;
    box-shadow: 0 0 5px 2px rgba(0, 0, 255, 0.5);
  }
`;

