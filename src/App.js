import React from "react";
import Header from "./Header";
import Main from "./Main";
import Prices from "./Prices";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Prices />
      </div>
    );
  }
}

export default App;
