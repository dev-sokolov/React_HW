/** @jsxImportSource @emotion/react */

import { useForm } from "react-hook-form";

import TextField from "../../../shared/components/TextField/TextField";
import Button from "../../../shared/components/Button/Button";

import fields from "./fields";
import { userData, userInput, userMessage, btn } from "./styles";

const ContactsForm = ({ submitForm }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (values) => {
        submitForm(values);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div css={userData}>
                <TextField css={userInput} {...fields.email} register={register} error={errors.email} />
                <TextField css={userInput} {...fields.username} register={register} error={errors.username} />
            </div>
            <TextField css={userMessage} {...fields.userMessage} register={register} error={errors.userMessage} />
            <div css={btn}>
                <Button>Отправить</Button>
            </div>
        </form>
    );
};

export default ContactsForm;
