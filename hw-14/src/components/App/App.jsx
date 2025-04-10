
import User from '../User/User'
import UserForm from '../UserForm/UserForm'

import styles from './App.module.css';

function App() {

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <User />
          <UserForm />
        </div>
      </div>
    </>
  )
}

export default App
