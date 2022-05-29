import { useState } from 'react';
import ExpenseList from './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseFIlter from './components/ExpenseFilter/ExpenseFilter';

function App() {
  const [expenseList, setExpenseList] = useState([]);
  const [filter, setFilter] = useState('');

  const addExpenseHandler = (enteredExpenseDate) => {
    setExpenseList((prev) => [enteredExpenseDate, ...prev]);
  };

  const filterHandler = (filer)=> {
    setFilter(filter);
  }



  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* {expenseList.length === 0 ? null : (
        <ExpenseList expenseList={expenseList} />
      )} */}
      <ExpenseList expenseList={expenseList} />
    </div>
  );
}

export default App;
