import React from 'react';
import Chart from 'react-google-charts';

const options={
  height: 200,
  legend: { position: 'none' },
  width: 800,
}

export default function ColumnChart(props) {
  return (<div>
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="100%"
      data={props.data}
      options={options}
    />
  </div>);
}