import React from 'react';
import ChartBar from '../ChartBar';
import style from './Chart.module.css';

const Chart = (props) => {
  const { dataPoints } = props;

  const maxValue = Math.max(...dataPoints.map((x) => x.value));

  return (
    <div className={style.chart}>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
