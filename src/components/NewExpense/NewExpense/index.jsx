import React, { useState } from 'react';
import ExpenseForm from '../ExpenseForm';
import { StyledNewExpense, StyledButton } from './styles';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(true);

  const switchEditingHandler = () => {
    setIsEditing((prev) => !prev);
  };

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
      {!isEditing && (
        <StyledButton onClick={switchEditingHandler}>
          Add New Expense
        </StyledButton>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDateHandler}
          onCancel={switchEditingHandler}
        />
      )}
    </StyledNewExpense>
  );
};

export default NewExpense;
