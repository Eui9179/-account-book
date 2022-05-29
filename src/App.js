import { useState } from 'react';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: Math.random().toString(),
    title: 'Book',
    amount: 35000,
    date: new Date(2022, 5, 28),
  },
  {
    id: Math.random().toString(),
    title: 'Note',
    amount: 2300,
    date: new Date(2022, 3, 1),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (enteredExpenseDate) => {
    setExpenses((prev) => [enteredExpenseDate, ...prev]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
