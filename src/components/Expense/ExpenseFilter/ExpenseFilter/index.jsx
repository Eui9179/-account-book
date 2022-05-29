import React from 'react';
import Card from '../../UI/Card';
import style from './ExpenseFilter.module.css';

const ExpenseFilter = (props) => {
  const selectHandler = (event) => {
    props.onSeleteYear(event.target.value);
  };

  return (
    <div>
      <div className={style.filter_year}>
        <label className={style.filter_label}>Filter by year</label>
        <select id='year_select' onChange={selectHandler} value='2022'>
          <option value={2019}>2019</option>
          <option value={2020}>2020</option>
          <option value={2021}>2021</option>
          <option value={2022}>2022</option>
        </select>
      </div>
      <Card></Card>
    </div>
  );
};

export default ExpenseFilter;
