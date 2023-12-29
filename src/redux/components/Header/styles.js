import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 2rem;
  border-bottom: 1px solid #6b7280;
`;

const StyledP = styled.p`
  animation: ${fadeInOut} 3s infinite;
  cursor: pointer;
`;

export { StyledHeader, StyledP };
