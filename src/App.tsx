import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
            <h2>Conway's Game of Life</h2>
            <select name="preset">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <select name="pattern">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <h3>(PlayButton)</h3>
        </nav>
      </header>
    </div>
  );
}

export default App;
