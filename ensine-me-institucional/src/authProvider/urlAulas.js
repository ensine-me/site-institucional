import axios from "axios";

const Api = axios.create({
    baseURL: "localhost:8080/aulas"
})

export default Api;