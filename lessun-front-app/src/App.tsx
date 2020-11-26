import React from 'react';
import { BrowserRouter as Route, Router, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Header from "./components/shared/Header";

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}*/

const App = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  )
}

export default App;
