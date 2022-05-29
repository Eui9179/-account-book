import React from 'react';
import ExpenseDate from '../ExpenseDate';
import Card from '../../UI/Card';
import style from './ExpenseItem.module.css';

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className={style.expense_item}>
        <ExpenseDate date={props.date} />
        <h2 className={style.expense_title}>{props.title}</h2>
        <Card className={style.expense_amount}>{props.amount} ₩</Card>
      </Card>
    </li>
  );
};

export default ExpenseItem;
