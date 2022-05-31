import styled from 'styled-components';
import Card from '../../UI/Card';

const StyledYearText = styled.text`
  font-size: 0.8rem;
`;

const StyledCardDetail = styled(Card)`
  display: flex;
  width: 50px;
  flex-direction: column;
  background-color: #505050;
  text-align: center;
  color: #f0f0f0;
  border: solid #ebebeb;
  border-width: 3px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 3px;
`;

const StyledMonthText = styled.text`
  font-weight: bold;
`;

const StyledDayText = styled.text`
  font-size: 1.5rem;
  padding-bottom: 3px;
`;


export {StyledYearText, StyledCardDetail, StyledMonthText, StyledDayText}