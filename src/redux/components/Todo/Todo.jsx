import React from "react";
import { useDispatch } from "react-redux";
import { switchTodo, removeTodo } from "../../modules/todos";
import { useNavigate } from "react-router-dom";
import {
  StyledDiv,
  StyledTitle,
  StyledContent,
  TodoRemoveBtn,
  TodoSwitchBtn,
  BtnBox,
  LinkedP,
  TitleBox,
} from "./styles";

export default function Todo({ todo, isActive }) {
  const DELETE_MSG = `"${todo.title}" 항목을 정말로 삭제하시겠습니까?`;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitchBtn = () => dispatch(switchTodo(todo.id));
  const handleRemoveBtn = () => {
    if (window.confirm(DELETE_MSG)) dispatch(removeTodo(todo.id));
  };
  const handleDetailPageClick = () => {
    navigate(`/${todo.id}`);
  };

  return (
    <StyledDiv>
      <TitleBox>
        <StyledTitle>{todo.title}</StyledTitle>
        <LinkedP onClick={handleDetailPageClick}>[상세보기]</LinkedP>
      </TitleBox>
      <StyledContent>{todo.content}</StyledContent>
      <BtnBox>
        <TodoRemoveBtn onClick={handleRemoveBtn}>삭제하기</TodoRemoveBtn>
        <TodoSwitchBtn onClick={handleSwitchBtn}>
          {isActive ? "완료" : "취소"}
        </TodoSwitchBtn>
      </BtnBox>
    </StyledDiv>
  );
}
