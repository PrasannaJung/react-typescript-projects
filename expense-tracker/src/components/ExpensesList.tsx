import React from "react";
import { ExpenseData } from "../App";
import styles from "./ExpenseList.module.css";

type Props = {
  list: ExpenseData[];
};

const ExpensesList = (props: Props) => {
  if (props.list.length === 0) {
    return <div></div>;
  }
  return (
    <div className={styles.list}>
      <ul>
        {props.list.map(item => {
          return (
            <li>
              <div className={styles.date}>{item.date}</div>
              <div className={styles.itemName}>{item.text}</div>
              <div className={styles.price}>{item.price}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExpensesList;
