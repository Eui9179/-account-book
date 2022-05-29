import React, { useState } from 'react';
import ExpenseItem from '../ExpenseItem';
import ExpensesFilter from '../ExpensesFilter';
import Card from '../../UI/Card';
import style from './Expenses.module.css';

const Expenses = (props) => {
  const { expenses } = props;
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className={style.expense_list}>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.map((expense, index) => (
          <ExpenseItem
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
