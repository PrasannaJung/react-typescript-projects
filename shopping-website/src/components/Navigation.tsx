import React from "react";
import { Link } from "react-router-dom";
import cartLogo from "../assets/cart.svg";
import styles from "./Navigation.module.css";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>About</Link>
          </li>
        </ul>
      </nav>
      <button className={styles.cartBtnDiv}>
        <img height={32} width={32} src={cartLogo} alt='' />
        <p>0</p>
      </button>
    </header>
  );
};

export default Navigation;
