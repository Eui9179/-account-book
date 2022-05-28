import React, { useEffect, useState } from 'react';
import ExpenseItem from '../ExpenseItem';
import Card from '../../UI/Card';
import style from './ExpenseList.module.css';

const ExpenseList = (props) => {
  return (
    <Card className={style.expense_list}>
      {props.expenseList.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      <ExpenseItem title={'Book'} amount={35000} date={new Date(2022, 5, 28)} />
      <ExpenseItem title={'Note'} amount={3500} date={new Date(2022, 3, 29)} />
    </Card>
  );
};

export default ExpenseList;
