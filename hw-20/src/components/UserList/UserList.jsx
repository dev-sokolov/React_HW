
import { useSelector } from "react-redux";
import { selectUsers } from "../../redux/users/users-selector";


const UserList = () => {
    const items = useSelector(selectUsers);

    const elements = items.map(item => <li key={item.id}>{item.userName} ({item.email})</li>)
    return (
        <>
            <ul>
                {elements}
            </ul>

        </>
    )
}

export default UserList