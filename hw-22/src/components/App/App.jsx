
import Quote from '../Quote/Quote'

import styles from './App.module.css'

function App() {

  return (
    <>
      <div>
        <h1 className={styles.titel}>Random Quote Generator</h1>
        <Quote />
      </div>
    </>
  )
}

export default App
