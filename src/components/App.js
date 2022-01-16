import React from "react";
import Header from "./Header";
import Main from "./Main";
import Prices from "./Prices";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Prices />
        <Footer />
      </div>
    );
  }
}

export default App;
