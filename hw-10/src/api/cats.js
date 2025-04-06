
import axios from "axios"

const catsInstance = axios.create({
    baseURL: "https://api.thecatapi.com/v1/images/search"
})

export const getCats = async () => {
    const {data} = await catsInstance.get("/")
    return data;
}

