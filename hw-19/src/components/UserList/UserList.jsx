
import { Card } from 'antd';

const UserList = ({username, description}) => {
    
    return (
        <>
            <Card style={{ width: 530 }}>
                <h2>Отправленные данные:</h2>
                <p><strong>Имя:  </strong>{username}</p>
                <p><strong>Описание:  </strong>{description}</p>
            </Card>
        </>
    )
}

export default UserList;

