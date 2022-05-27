import React from 'react';
import ExpenseDate from '../ExpenseDate';
import Card from '../../UI/Card';
import style from './ExpenseItem.module.css';

const index = (props) => {
  return (
    <Card className={style.expense_item}>
      <ExpenseDate date={props.date} />
      <h2 className={style.expense_description}>{props.description}</h2>
      <Card className={style.expense_price}>{props.price} ₩</Card>
    </Card>
  );
};

export default index;
