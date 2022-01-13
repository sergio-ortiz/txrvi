import React from "react";
import Nav from "./Nav";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="spacer"></div>
        <h1 className="main-heading">
          Welcome to TerminateVirus.
          <br />
          Disinfect & Sanitize
        </h1>
      </div>
    );
  }
}

export default App;
