/** @jsxImportSource @emotion/react */

import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";

import Container from "../layouts/Container/Container";

import { useState } from "react";

import LoadingError from "../../shared/components/LoadingError/LoadingError";

import ContactsForm from "./ContactsForm/ContactsForm";
import SocialNets from "./SocialNets/SocialNets";

import { sendMessage } from "../../shared/api/contacts-api";

import { listStyle, listItemStyle, contactsInfo, section, userInfo } from "./styles";

const Contacts = () => {
    const [error, setError] = useState(null);

    const submitForm = async (payload) => {
        const { error } = await sendMessage(payload);
        if (error) {
            return setError(error.response.data.message);
        }
        alert("Message sent successfully");
    };

    return (
        <>
            <Container>
                <SectionTitle title="Контакты" />
                <section css={section}>
                    <div css={userInfo}>
                        <div css={contactsInfo}>
                            <ul css={listStyle}>
                                <li css={listItemStyle} >8 800 000 00 00</li>
                                <li css={listItemStyle}>emailexample@email.com</li>
                            </ul>
                        </div>
                        <ContactsForm submitForm={submitForm} />
                        {error && <LoadingError>{error}</LoadingError>}
                    </div>
                    <div>
                        <SocialNets />
                    </div>
                </section>
            </Container>
        </>
    )
}

export default Contacts;