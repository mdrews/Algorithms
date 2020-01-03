import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColumnChart from './ColumnChart';

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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ColumnChart data={data}/>
      </header>
    </div>
  );
}

export default App;
