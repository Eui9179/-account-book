import React, { useState } from 'react';
import style from './ExpenseForm.module.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [open, setOpen] = useState(true);

  // form에 대한 state를 한번에 관리
  // 객체에 저장

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput((prev) => ({ //prev: 이전 state 값
    //   ...prev,
    //   enteredTitle: event.target.value,
    // }));
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  const openHandler = () => {
    setOpen((prev) => (prev ? false : true));
  };

  return open ? (
    <form onSubmit={submitHandler}>
      <div className={style.new_expense__controls}>
        <div className={style.new_expense__control}>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={style.new_expense__control}>
          <label>Amount</label>
          <input
            type='number'
            min='10'
            step='10'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={style.new_expense__control}>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className={style.new_expense__actions}>
        <button type='button' onClick={openHandler}>
          Close
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  ) : (
    <button className={style.add_new_expense} onClick={openHandler}>
      Add New Expense
    </button>
  );
};

export default ExpenseForm;
