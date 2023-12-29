import React from "react";
import { useSelector } from "react-redux";
import {
  StyledDiv,
  HeaderDiv,
  StyledP,
  StyledBtn,
  MainDiv,
  StyledTitle,
  StyledContent,
} from "./styles";
import { useNavigate, useParams } from "react-router-dom";

export default function DetailBox() {
  const navigate = useNavigate();
  const params = useParams();

  // Redux store에서 todos를 가져오기
  const todos = useSelector((state) => state.todos);

  // params.id와 일치하는 Todo 찾기 (문자열로 비교)
  const findItem = todos.find((item) => item.id === params.id);

  // findItem이 undefined인 경우 처리
  if (!findItem) {
    console.error(`Todo with id ${params.id} not found.`);
    return null;
  }

  const handleHomePageClick = () => {
    navigate("/");
  };
  console.log(findItem);

  return (
    <StyledDiv>
      <HeaderDiv>
        <StyledP>ID: {findItem.id}</StyledP>
        <StyledBtn onClick={handleHomePageClick}>이전으로</StyledBtn>
      </HeaderDiv>
      <MainDiv>
        <StyledTitle>{findItem.title}</StyledTitle>
        <StyledContent>{findItem.content}</StyledContent>
      </MainDiv>
    </StyledDiv>
  );
}
