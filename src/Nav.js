import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <nav id="#home">
        <h1>
          <a href="#home">txrvi</a>
        </h1>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#prices">Prices</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
