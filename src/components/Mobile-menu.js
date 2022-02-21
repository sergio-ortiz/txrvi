import React from "react";
import styles from "./Mobile-menu.module.css";

const MobileMenu = ({ onClick }) => (
  <ul className={styles.navLinks}>
    <li className={styles.navLinkItem}>
      <a href="#root" className={styles.navLinkText} onClick={onClick}>
        Home
      </a>
    </li>
    <li className={styles.navLinkItem}>
      <a href="#about" className={styles.navLinkText} onClick={onClick}>
        About
      </a>
    </li>
    <li className={styles.navLinkItem}>
      <a href="#prices" className={styles.navLinkText} onClick={onClick}>
        Prices
      </a>
    </li>
    <li className={styles.navLinkItem}>
      <a href="#contact" className={styles.navLinkText} onClick={onClick}>
        Contact
      </a>
    </li>
  </ul>
);

export default MobileMenu;
