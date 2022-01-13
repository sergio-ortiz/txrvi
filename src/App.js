import React from "react";
import Nav from "./Nav";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <Nav />
          <div className="spacer"></div>
          <h1 className="main-heading">
            Welcome to TerminateVirus.
            <br />
            Disinfect & Sanitize
          </h1>
        </header>
        <main id="about">
          <h2>About</h2>
        </main>
      </div>
    );
  }
}

export default App;
