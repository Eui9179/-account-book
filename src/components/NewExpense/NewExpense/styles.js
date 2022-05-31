import styled from 'styled-components';

const StyledNewExpense = styled.div`
  background-color: rgb(231, 231, 231);
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: right;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease-out;
`;

const StyledButton = styled.button`
  background-color: #4b57ff;
  border: 1px solid #4b57ff;
  border-radius: 12px;
  color: white;
  padding: 1rem 1rem;
  border-radius: 12px;
  font-size: 1rem;
  margin-left: 6px;
  transition: 0.25s all;
  cursor: pointer;
  &:hover,
  &:active {
    background-color: #212de0;
    border-color: #212de0;
  }
`;

export { StyledButton, StyledNewExpense };
