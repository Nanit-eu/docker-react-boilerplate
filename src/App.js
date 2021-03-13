import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Navbar from "./Component/Navbar";
import Page from "./Page";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Router>
          <Navbar/>
          <Page/>
      </Router>
      <hr/>
      <footer>
        <div>Env: {process.env.NODE_ENV} - {process.env.__WB_MANIFEST}</div>
      </footer>
    </div>
  );
}

export default App;
