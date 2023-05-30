import axios from "axios";

const api = axios.get({
    baseURL: "localhost:8080/aulas"
})

export default api;