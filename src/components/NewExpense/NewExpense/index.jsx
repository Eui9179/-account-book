import React from 'react';
import ExpenseForm from '../ExpenseForm';
import { StyledNewExpense } from './styles';

const NewExpense = (props) => {
  const saveExpenseDateHandler = (enteredExpenseDate) => {
    const expenseDate = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseDate);
  };
  // ExpenseForm 에서 사용할 함수를 props로 넘김

  return (
    <StyledNewExpense>
      <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} />
    </StyledNewExpense>
  );
};

export default NewExpense;
