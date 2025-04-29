

const fields = {
    email: {
        type: "email",
        placeholder: "Ваш email",
        name: "email",
        rules: {
            required: "Email must be exist"
        }
    },
    username: {
        type: "text",
        placeholder: "Ваше имя",
        name: "username",
        rules: {
            required: "Username must be exist"
        }
    },
    userMessage: {
        as: "textarea",
        placeholder: "Введите сообщение",
        name: "userMessage",
        rules: {
            required: "Field must be filled"
        }
    },
};

export default fields;

