import React from "react";
import MobileMenu from "./Mobile-menu";
import styles from "./Nav.module.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
  }

  handleClick = () => {
    this.setState({ display: !this.state.display });
  };

  render() {
    return (
      <nav className={styles.navbar}>
        <h1>
          <a
            href="#root"
            className={styles.branding}
            onClick={this.state.display ? this.handleClick : () => {}}
          >
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
        <div className={styles.hamburger} onClick={this.handleClick}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        {this.state.display ? <MobileMenu onClick={this.handleClick} /> : ""}
      </nav>
    );
  }
}

export default Nav;
