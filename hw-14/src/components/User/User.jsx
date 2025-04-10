import { useSelector } from 'react-redux';

import styles from './User.module.css';

const User = () => {
    const user = useSelector(store => store.name);
    const status = useSelector(store => store.status);
    return (
        <div className={styles.wrapper}>
            <h1>User Profile</h1>
            <h2>User Information</h2>
            <p>Name: {user}</p>
            <p>Status: {status}</p>
        </div>
    )
}

export default User;
