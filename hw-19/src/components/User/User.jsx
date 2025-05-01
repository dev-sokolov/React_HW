import { useState } from 'react';

import UserForm from '../userForm/userForm';
import UserList from '../UserList/UserList';

import { Flex } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const User = () => {
    const [userData, setUserData] = useState(null);

    const onFinish = values => {
        setUserData(values);
    };

    return (
        <Flex vertical='true' align='center' style={{ marginTop: "100px" }} >
            <div>
                <Title level={2}>Форма с использованием Ant Design</Title>
                <UserForm onFinish={onFinish} />
                {userData && <UserList {...userData} />}
            </div>
        </Flex>
    )
}

export default User;