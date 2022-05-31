import React from 'react';
import ExpenseDate from '../ExpenseDate';
import { StyledExpenseItem, StyledTitle, StyledAmount } from './styles';

const ExpenseItem = (props) => {
  return (
    <li>
      <StyledExpenseItem>
        <ExpenseDate date={props.date} />
        <StyledTitle>{props.title}</StyledTitle>
        <StyledAmount>{props.amount} ₩</StyledAmount>
      </StyledExpenseItem>
    </li>
  );
};

export default ExpenseItem;
