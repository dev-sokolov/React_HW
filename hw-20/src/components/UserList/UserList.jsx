
import { useSelector } from "react-redux";
import { selectUsers } from "../../redux/users/users-selector";

import styles from './UserList.module.css';


const UserList = () => {
    const items = useSelector(selectUsers);

    const elements = items.map(item => <li key={item.id}>{item.userName} ({item.email})</li>)
    return (
        <div className={styles.wrapper}>
            <h1>User List</h1>
            <ul>
                {elements}
            </ul>
        </div>
    )
}

export default UserList