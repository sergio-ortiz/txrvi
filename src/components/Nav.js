import React from "react";
import styles from "./Nav.module.css";

class Nav extends React.Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <h1>
          <a href="#root" className={styles.branding}>
            txrvi
          </a>
        </h1>
        <ul className={styles.navLinks}>
          <li className={styles.navLinkItem}>
            <a href="#root" className={styles.navLinkText}>
              Home
            </a>
          </li>
          <li className={styles.navLinkItem}>
            <a href="#about" className={styles.navLinkText}>
              About
            </a>
          </li>
          <li className={styles.navLinkItem}>
            <a href="#prices" className={styles.navLinkText}>
              Prices
            </a>
          </li>
          <li className={styles.navLinkItem}>
            <a href="#contact" className={styles.navLinkText}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
