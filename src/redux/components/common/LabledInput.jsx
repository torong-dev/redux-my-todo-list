import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  display: flex-start;
  height: 40px;
  width: 230px;
  border: 0;
  border-radius: 0.75rem;
  padding-left: 10px;
  margin-right: 2rem;
`;

const StyledLabel = styled.label`
  margin-right: 1rem;
  font-weight: 700;
`;

export default function LabledInput({
  id,
  label,
  placeholder,
  value,
  onChange,
}) {
  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
