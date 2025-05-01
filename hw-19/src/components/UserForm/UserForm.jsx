import '@ant-design/v5-patch-for-react-19';

import { Button, Form, Input } from 'antd';

const UserForm = ({ onFinish }) => {
    const [form] = Form.useForm();

    const handleFinish = (values) => {
        onFinish(values);
        form.resetFields();
    }

    return (
        <Form
            form={form}
            name="basic"
            layout="vertical"
            wrapperCol={{ span: 16 }}
            style={{ width: 800 }}
            onFinish={handleFinish}
            autoComplete="off"
        >

            <Form.Item
                label="Имя"
                name="username"
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input placeholder="Username" />
            </Form.Item>

            <Form.Item
                label="Описание"
                name="description"
                rules={[{ required: true, message: 'Please input your description!' }]}
            >
                <Input placeholder="Description" />
            </Form.Item>

            <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Отправить
                </Button>
            </Form.Item>

        </Form>
    )
}

export default UserForm;