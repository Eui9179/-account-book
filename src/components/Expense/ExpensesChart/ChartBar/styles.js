import styled from 'styled-components';

const StyledChartBar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledChartInner = styled.div`
  height: 100%;
  width: 15px;
  border: 0.5px solid #ffffff;
  border-radius: 12px;
  background-color: #ffffff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const StyledChartBarFill = styled.div`
  background-color: #4b57ff;
  width: 100%;
  transition: all 0.3s ease-out;
  border-radius: 2px;
`;

const StyledChartBarLabel = styled.div`
  margin-top: 10px;
  font-weight: bold;
  font-size: 0.8rem;
  text-align: center;
  color: azure;
`;

export {
  StyledChartBar,
  StyledChartInner,
  StyledChartBarFill,
  StyledChartBarLabel,
};
