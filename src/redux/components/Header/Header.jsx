import React from "react";
import { StyledHeader, StyledP } from "./styles";

export default function Header() {
  return (
    <StyledHeader>
      <StyledP>My Todo List</StyledP>
      <StyledP>React</StyledP>
    </StyledHeader>
  );
}
