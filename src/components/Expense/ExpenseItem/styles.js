import styled from 'styled-components';
import Card from '../../UI/Card';

const StyledExpenseItem = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: #fdfdfde7;
`;

const StyledTitle = styled.h2`
  display: flex;
  color: #3a3a3a;
  padding: 0.5rem;
  margin: 1rem 0;
  font-size: 1.6rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  flex: 1;
  margin-left: 0.4rem;
  margin-right: 1rem;
`;

const StyledAmount = styled(Card)`
  background-color: #4b57ff;
  padding: 0.5rem 1.2rem;
  border: solid rgba(253, 253, 253, 0.692);
  border-width: 1px;
  color: aliceblue;
  font-size: 1.25rem;
  margin-right: 3px;
`;

export { StyledExpenseItem, StyledTitle, StyledAmount };
