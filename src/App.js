import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BubbleSort from './BubbleSort';

const data = [];

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
        <BubbleSort />
      </header>
    </div>
  );
}

export default App;
