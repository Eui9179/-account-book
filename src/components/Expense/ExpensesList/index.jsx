import React from 'react';
import ExpenseItem from '../ExpenseItem';
import style from './ExpensesList.module.css';

const ExpensesList = (props) => {
  const { expenses } = props;

  if (expenses.length === 0) {
    return <p className={style.expenses_list__fallback}>No expenses found.</p>;
  }

  return (
    <ul className={style.expenses_list}>
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
    </ul>
  );
};

export default ExpensesList;
