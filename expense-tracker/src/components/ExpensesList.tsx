import React from "react";
import { ExpenseData } from "../App";

type Props = {
  list: ExpenseData[];
};

const ExpensesList = (props: Props) => {
  return (
    <div>
      <ul>
        {props.list.map(item => {
          return (
            <li>
              <div>{item.price}</div>
              <div>{item.text}</div>
              <div>{item.date}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExpensesList;
