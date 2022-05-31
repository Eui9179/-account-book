import React, { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter';
import ExpensesList from '../ExpensesList';
import Chart from '../ExpensesChart/Chart';
import { StyledExpenseList } from './styles';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <StyledExpenseList>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <Chart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </StyledExpenseList>
    </div>
  );
};

export default Expenses;
