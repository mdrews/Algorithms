import React from 'react';
import { Button } from 'reactstrap';
import ColumnChart from './ColumnChart';

const COLUMNS = 80;
const data = [];

for(let x = 0; x < COLUMNS; x++) {
  data.push([x.toString(), x, "blue"]);
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

shuffleArray(data);

data.unshift(["Element", "Density", { role: "style" }]);

const BubbleSort = props => {
  return(<div>
    <h2>Bubble Sort</h2>
    <Button color="primary">Forward</Button>
    <ColumnChart data={data}/>
  </div>);
}

export default BubbleSort