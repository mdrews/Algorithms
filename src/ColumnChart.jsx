import React from 'react';
import Chart from 'react-google-charts';



export default function ColumnChart(props) {
  return (<div>
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="100%"
      data={props.data}
    />
  </div>);
}