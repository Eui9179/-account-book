import React from 'react';
import ExpenseItem from '../ExpenseItem';
import Card from '../../UI/Card';
import style from './ExpenseList.module.css';

const index = () => {
  return (
    <Card className={style.expense_list}>
      <ExpenseItem
        description={'Book'}
        price={35000}
        date={new Date(2022, 5, 28)}
      />
      <ExpenseItem
        description={'Note'}
        price={3500}
        date={new Date(2022, 3, 29)}
      />
    </Card>
  );
};

export default index;
