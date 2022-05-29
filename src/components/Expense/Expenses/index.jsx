import React, { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter';
import ExpensesList from '../ExpensesList';
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
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
