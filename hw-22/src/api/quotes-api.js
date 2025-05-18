import axios from "axios";

const quoteInstance = axios.create({
    baseURL: "https://zenquotes-proxy.onrender.com/api/random"
})

export const getQuotesApi = async() => {
    const {data} = await quoteInstance.get("/");
    return data;
}