import styled from "styled-components";

export { default } from "./DetailBox";

const StyledDiv = styled.div`
  display: block;
  margin: auto;
  margin-top: 10rem;
  width: 32rem;
  height: 20rem;
  border: 0.25rem solid #bfdbfe;
  border-radius: 0.75rem;
  padding: 2rem;
`;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const StyledP = styled.p`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  margin-right: 1rem;
`;

const StyledBtn = styled.button`
  width: 6rem;
  height: 2.5rem;
  background-color: #2563eb;
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;

  &:hover {
    background-color: #0a56c0;
  }
`;

const MainDiv = styled.div`
  padding: 1rem;
`;

const StyledTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: white;
`;

const StyledContent = styled.p`
  font-size: 1rem;
  color: white;
`;

export {
  StyledDiv,
  HeaderDiv,
  StyledP,
  StyledBtn,
  MainDiv,
  StyledTitle,
  StyledContent,
};
