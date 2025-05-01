import { useState } from 'react'

import UserForm from '../userForm/userForm'
import UserList from '../UserList/UserList'

import { Flex } from 'antd';

const User = () => {
    const [userData, setUserData] = useState(null)

    const onFinish = values => {
        setUserData(values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Flex vertical='true' align='center' style={{ marginTop: "100px" }}  >
            <div>
                <h1>Форма с использованием Ant Design</h1>
                <UserForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
                {userData && <UserList {...userData} />}
            </div>
        </Flex>
    )
}

export default User;