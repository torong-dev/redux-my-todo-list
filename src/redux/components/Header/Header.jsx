import React from "react";
import { StyledHeader, StyledP } from "./styles";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate("/");
  };

  return (
    <StyledHeader>
      <StyledP onClick={handleTitleClick}>My Todo List</StyledP>
      <StyledP>React</StyledP>
    </StyledHeader>
  );
}
