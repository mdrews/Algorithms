import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColumnChart from './ColumnChart';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

const data = [
  // ["Element", "Density", { role: "style" }],
  // ["1", 1, "#blue"], // RGB value
  // ["2", 2, "blue"], // English color name
  // ["3", 3, "blue"],
  // ["4", 4, "blue"] // CSS-style declaration
];

const COLUMNS = 80;
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Bubble Sort</h2>
        <Button color="primary">Forward</Button>
        <ColumnChart data={data}/>
      </header>
    </div>
  );
}

export default App;
