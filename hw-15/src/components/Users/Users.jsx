
import UserList from "../UserList/UserList"
import userList from "../../data/usersList"

import { useState, useCallback, useMemo } from "react"

import styles from './Users.module.css'

const Users = () => {
    const [filter, setFilter] = useState('');

    const inputValue = (event) => {
        const result = event.target.value;
        setFilter(result)
    }

    const filterUsers = useCallback((text) => {
        return userList.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
    }, [userList])

    const filtredUsersList = useMemo(() => filterUsers(filter), [filter, filterUsers])

    return (
        <>
            <div className={styles.wrapper}>
                <input onChange={inputValue} type="text" placeholder='Name' />
                <UserList userList={filtredUsersList} />
            </div>

        </>
    )
}

export default Users