import React from 'react';
import style from './ExpensesFilter.module.css';

const ExpensesFilter = (props) => {
  const { selected, onChangeFilter } = props;
  const dropdownChangeHandler = (event) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div>
      <div className={style.filter_year}>
        <label className={style.filter_label}>Filter by year</label>
        <select
          id='year_select'
          onChange={dropdownChangeHandler}
          value={selected}
        >
          <option value={2019}>2019</option>
          <option value={2020}>2020</option>
          <option value={2021}>2021</option>
          <option value={2022}>2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
