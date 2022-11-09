import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navigation from "./components/Navigation";
import styles from "./Home.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.page}>
      <Navigation />
    </div>
  );
}

export default App;
