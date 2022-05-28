import { useState } from 'react';
import ExpenseList from './components/Expense/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [expenseList, setExpenseList] = useState([]);

  const addExpenseHandler = (enteredExpenseDate) => {
    setExpenseList((prev) => [enteredExpenseDate, ...prev]);
  };

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
