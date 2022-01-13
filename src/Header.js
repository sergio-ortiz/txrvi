import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <header>
      <Nav />
      <div className="spacer"></div>
      <h1 className="main-heading">
        Welcome to TerminateVirus.
        <br />
        Disinfect & Sanitize
      </h1>
    </header>
  );
}

export default Header;
