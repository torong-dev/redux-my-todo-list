import styled from "styled-components";

const StyledDiv = styled.div`
  align-items: center;
  width: 18rem;
  height: 9rem;
  padding: 2rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  margin-left: 1.9rem;
  border: 0.25rem solid #bfdbfe;
  border-radius: 0.75rem;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

const LinkedP = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  transition: all 200ms ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const StyledContent = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
`;

const TodoRemoveBtn = styled.button`
  width: 9rem;
  height: 3rem;
  margin-right: 1rem;
  background-color: #18181a;
  color: white;
  border-color: #fca5a5;
  border-width: 2px;
  border-radius: 0.75rem;
  font-size: 0.9rem;
  font-weight: bold;

  &:hover {
    background-color: #c53030;
    cursor: pointer;
  }
`;

const TodoSwitchBtn = styled.button`
  width: 9rem;
  height: 3rem;
  margin-right: 1rem;
  background-color: #18181a;
  color: white;
  border-color: #9ae6b4;
  border-width: 2px;
  border-radius: 0.75rem;
  font-size: 0.9rem;
  font-weight: bold;

  &:hover {
    background-color: #2f855a;
    cursor: pointer;
  }
`;

export {
  StyledDiv,
  TitleBox,
  StyledTitle,
  LinkedP,
  StyledContent,
  BtnBox,
  TodoRemoveBtn,
  TodoSwitchBtn,
};
