import React from 'react';
import Card from '../../UI/Card';
import style from './ExpenseDate.module.css';

const ExpenseDate = (props) => {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: 'numeric' });

  return (
    <Card className={style.expense_date_box}>
      <div className={style.expense_date_year}>{year}</div>
      <div className={style.expense_date_month}>{month}</div>
      <div className={style.expense_date_day}>{day}</div>
    </Card>
  );
};

export default ExpenseDate;
