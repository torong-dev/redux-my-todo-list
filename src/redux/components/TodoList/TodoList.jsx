import React from "react";
import { useSelector } from "react-redux";
import { StyledDiv, StyledTodoListHeader, StyledTodoListBox } from "./styles";

export default function TodoList({ isActive }) {
  const todos = useSelector((state) => state.todos);

  return (
    <StyledDiv>
      <StyledTodoListHeader>
        {isActive ? "Working.. 🔥" : "Done..!🎉"}
      </StyledTodoListHeader>
      <StyledTodoListBox>
        {todos
          .filter((item) => item.isDone === !isActive)
          .map((item) => {
            return <Todo key={item.id} todo={item} isActive={isActive} />;
          })}
      </StyledTodoListBox>
    </StyledDiv>
  );
}
