import React from 'react';
import {
  StyledChartBar,
  StyledChartInner,
  StyledChartBarFill,
  StyledChartBarLabel,
} from './styles';

const ChartBar = (props) => {
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <StyledChartBar>
      <StyledChartInner>
        <StyledChartBarFill
          style={{ height: barFillHeight }}
        ></StyledChartBarFill>
      </StyledChartInner>
      <StyledChartBarLabel>{props.label}</StyledChartBarLabel>
    </StyledChartBar>
  );
};

export default ChartBar;
