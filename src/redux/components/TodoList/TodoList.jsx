import React from "react";
import { useSelector } from "react-redux";
import { StyledTodoListHeader, StyledTodoListBox } from "./styles";
import Todo from "../Todo/Todo";

export default function TodoList({ isActive }) {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <StyledTodoListHeader>
        {isActive ? "Working.. 🔥" : "Done..! 🎉"}
      </StyledTodoListHeader>
      <StyledTodoListBox>
        {todos
          .filter((item) => item.isDone === !isActive)
          .map((item) => {
            return <Todo key={item.id} todo={item} isActive={isActive} />;
          })}
      </StyledTodoListBox>
    </div>
  );
}
