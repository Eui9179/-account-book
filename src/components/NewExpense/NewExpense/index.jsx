import React from 'react';
import ExpenseForm from '../ExpenseForm';
import style from './NewExpense.module.css';

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
    <div className={style.new_expense}>
      <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} />
    </div>
  );
};

export default NewExpense;
