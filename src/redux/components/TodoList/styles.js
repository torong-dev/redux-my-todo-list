import styled from "styled-components";

const StyledDiv = styled.div`
  height: 12rem;
  padding: 2rem;
  margin: 1rem;
  border: 0.25rem solid #bfdbfe;
  border-radius: 1rem;
  width: 24rem;
`;

const StyledTodoListHeader = styled.h3`
  font-size: 2rem;
  font-weight: bold;
`;

const StyledTodoListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export { StyledDiv, StyledTodoListHeader, StyledTodoListBox };
