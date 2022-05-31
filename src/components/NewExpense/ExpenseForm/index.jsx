import React, { useState } from 'react';
import {
  StyledNewExpenseControls,
  StyledNewExpenseLabel,
  StyledNewExpenseInput,
  StyledButton,
} from './styles';

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
      <StyledNewExpenseControls>
        <div>
          <StyledNewExpenseLabel>Title</StyledNewExpenseLabel>
          <StyledNewExpenseInput
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div>
          <StyledNewExpenseLabel>Amount</StyledNewExpenseLabel>
          <StyledNewExpenseInput
            type='number'
            min='10'
            step='10'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div>
          <StyledNewExpenseLabel>Date</StyledNewExpenseLabel>
          <StyledNewExpenseInput
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </StyledNewExpenseControls>

      <StyledButton type='button' onClick={openHandler}>
        Close
      </StyledButton>
      <StyledButton type='submit'>Add Expense</StyledButton>
    </form>
  ) : (
    <StyledButton onClick={openHandler}>Add New Expense</StyledButton>
  );
};

export default ExpenseForm;
