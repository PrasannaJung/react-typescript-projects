import { useState } from "react";
import styles from "./App.module.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpensesList from "./components/ExpensesList";

export type ExpenseData = {
  id: string;
  text: string;
  price: string;
  date: string;
};

function App() {
  const [expenses, setExpenses] = useState<ExpenseData[]>([]);

  const addExpenseHandler = (newExpense: ExpenseData) => {
    setExpenses(prev => {
      return [...prev, newExpense];
    });
  };

  return (
    <main className={styles.container}>
      <ExpenseForm onAdd={addExpenseHandler} />
      <ExpensesList list={expenses} />
    </main>
  );
}

export default App;
