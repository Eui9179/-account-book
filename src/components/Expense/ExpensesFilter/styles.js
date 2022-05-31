import styled from 'styled-components';

const StyledFilterYear = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledSelect = styled.select`
  border-radius: 5px;
  padding: 5px;
  height: 30px;
  width: 90px;
`;

const StyledFilterLabel = styled.label`
  font-size: 1.1rem;
  font-weight: bold;
`;

export { StyledFilterYear, StyledSelect, StyledFilterLabel };
