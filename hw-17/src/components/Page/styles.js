import { css } from "@emotion/react";

export const boxWrapperStyle = css`
    font-size:50px;
    padding: 50px;
    display: flex;
    justify-content: center;
    height: 100vh;
`;

export const boxInnerStyle = css `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;

export const buttonStyle = ({backgroundColorBtn, colorBtn, backgroundColorBtnHover}) => css`

    background-color: ${backgroundColorBtn};
    color: ${colorBtn};
    border-radius: 10px;
    transition: 0.4s;
    border: 1px solid #000;

    :hover {
        background-color: ${backgroundColorBtnHover};
    }
`;

