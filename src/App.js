import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Migrating to React...
          </p>
          <a
            className="App-link"
            href="https://www.terminatevirus.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TerminateVirus
          </a>
        </header>
      </div>
    );
  }
}

export default App;
