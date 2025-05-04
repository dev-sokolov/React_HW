
const UserList = ({ userList = [] }) => {

    const elements = userList.map(({ name, id }) => <li key={id}>{name}</li>)

    return (
        <>
            <ul>
                {elements}
            </ul>
        </>
    )
}

export default UserList;