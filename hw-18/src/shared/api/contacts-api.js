import backendInstance from "./backendInstance";

import requestDecorator from "./requestDecorator";


export const sendMessage = requestDecorator(async payload => {
    const {data} = await backendInstance.post("/contacts/message", payload); // здесь точного адреса запрося я не знаю
    return data;
})