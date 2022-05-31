import React from 'react';
import { StyledFilterYear, StyledSelect, StyledFilterLabel } from './styles';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div>
      <StyledFilterYear>
        <StyledFilterLabel>Filter by year</StyledFilterLabel>
        <StyledSelect
          id='year_select'
          onChange={dropdownChangeHandler}
          value={props.selected}
        >
          <option value={2019}>2019</option>
          <option value={2020}>2020</option>
          <option value={2021}>2021</option>
          <option value={2022}>2022</option>
        </StyledSelect>
      </StyledFilterYear>
    </div>
  );
};

export default ExpensesFilter;
