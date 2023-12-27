import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  padding: 2.2rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  background-color: #bfdbfe;
  border-radius: 0.375rem;
  color: black;
`;

const StyledBtn = styled.button`
  padding-top: 0.9rem;
  padding-bottom: 0.9rem;
  padding-left: 3rem;
  padding-right: 3rem;
  margin-left: 20rem;
  color: white;
  background-color: #2563eb;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  font-size: 100%;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0a56c0;
  }
`;

export { StyledDiv, StyledBtn };
