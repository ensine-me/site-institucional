import axios from "axios";

const apiUsuarios = axios.create({
    baseURL: "localhost:8080/usuarios"
})

export default apiUsuarios;  