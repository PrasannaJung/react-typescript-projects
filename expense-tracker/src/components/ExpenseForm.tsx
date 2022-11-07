import styles from "./ExpenseForm.module.css";
import { ExpenseData } from "../App";
import { useRef } from "react";
import React from "react";

type Props = {
  onAdd: (data: ExpenseData) => void;
};

const ExpenseForm = (props: Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  const addNewExpense = (e: React.FormEvent) => {
    console.log(nameRef);
    e.preventDefault();
    props.onAdd({
      id: "a",
      text: nameRef.current!.value,
      price: priceRef.current!.value,
      date: dateRef.current!.value.toLocaleString(),
    });
  };

  return (
    <form className={styles.form}>
      <div className={styles.inputField}>
        <div>
          <input ref={nameRef} type='text' name='name' id='name' />
          <label htmlFor='name'>Expense</label>
        </div>
        <div>
          <input ref={dateRef} type='date' name='date' id='date' />
          <label htmlFor='date'>Date</label>
        </div>
        <div>
          <input ref={priceRef} type='text' name='price' id='price' />
          <label htmlFor='price'>Price</label>
        </div>
      </div>
      <button onClick={addNewExpense} className={styles.btn}>
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
