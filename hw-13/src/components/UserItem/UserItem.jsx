
import styles from './UserItem.module.css'

const UserItem = ({ users }) => {

    const elements = users ? users.map(item => <p className={styles.items} key={item.id}>{item.name}</p>) : "";

    return (
        <div className={styles.users}>
            {elements}
        </div>
    )
}

export default UserItem
