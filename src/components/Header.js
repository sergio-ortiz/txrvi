import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <Nav />
      <Hero />
      <h1 className={styles.mainHeading}>
        Welcome to TerminateVirus.
        <br />
        Disinfect & Sanitize
      </h1>
    </header>
  );
}

export default Header;
