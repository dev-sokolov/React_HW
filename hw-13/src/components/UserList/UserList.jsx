import UserItem from "../UserItem/UserItem";
import Filter from "../Filter/Filter";

import styles from './UserList.module.css'

import { useSelector } from "react-redux";

const UserList = () => {
    const userList = useSelector(store => store.usersList)
    const filter = useSelector(store => store.filter)
    const filteredUsers = userList.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrap}>
                <h2>User List</h2>
                <Filter />
                <UserItem users={filteredUsers} />
            </div>
        </div>
    )
}

export default UserList;

