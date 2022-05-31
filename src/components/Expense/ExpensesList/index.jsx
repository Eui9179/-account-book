import React from 'react';
import ExpenseItem from '../ExpenseItem';
import { StyledExpensesLissFallback, StyledExpenseList } from './styles';

const ExpensesList = (props) => {
  const { expenses } = props;

  if (expenses.length === 0) {
    return (
      <StyledExpensesLissFallback>
        No expenses found.
      </StyledExpensesLissFallback>
    );
  }

  return (
    <StyledExpenseList>
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </StyledExpenseList>
  );
};

export default ExpensesList;
