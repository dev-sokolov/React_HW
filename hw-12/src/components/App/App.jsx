
import { useState } from "react";

import ValueDisplay from "../ValueDisplay/ValueDisplay";
import styles from './App.module.css'

function App() {
  const [value, setValue] = useState("");

  const handlechange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrap} >
        <h1>Current and Previous Value</h1>
        <input type="text" value={value} onChange={handlechange} />
        <ValueDisplay value={value} />
      </div>
    </div>

  );
}

export default App;





