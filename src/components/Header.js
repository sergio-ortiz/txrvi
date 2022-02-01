import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";

function Header() {
  return (
    <header>
      <Nav />
      <Hero />
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
