import styled from 'styled-components';

const StyledNewExpenseControls = styled.div`
  display: flex;
  flex-wrap: wrap; /*자동으로 정렬*/
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`;

const StyledNewExpenseLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
`;

const StyledNewExpenseInput = styled.input`
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid rgb(160, 160, 160);
  width: 20rem;
  max-width: 100%;
  height: 1.5rem;
  font: inherit;
`;

const StyledButton = styled.button`
  background-color: #4b57ff;
  border: 1px solid #4b57ff;
  border-radius: 12px;
  color: white;
  padding: 1rem 2rem;
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

export {
  StyledNewExpenseControls,
  StyledNewExpenseLabel,
  StyledNewExpenseInput,
  StyledButton,
};
