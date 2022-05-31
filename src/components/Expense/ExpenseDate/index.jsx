import React from 'react';
import {
  StyledYearText,
  StyledCardDetail,
  StyledMonthText,
  StyledDayText,
} from './styles';

const ExpenseDate = (props) => {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: 'numeric' });

  return (
    <StyledCardDetail>
      <StyledYearText>{year}</StyledYearText>
      <StyledMonthText>{month}</StyledMonthText>
      <StyledDayText>{day}</StyledDayText>
    </StyledCardDetail>
  );
};

export default ExpenseDate;
