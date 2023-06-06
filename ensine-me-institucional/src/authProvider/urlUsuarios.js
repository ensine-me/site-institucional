import axios from "axios";
import api from "./utils/api";
import { string } from "prop-types";

export default class UrlUsuarios {
    constructor() {
        // localStorage.setItem('token', "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmZXJhQGVtYWlsLmNvbSIsImlhdCI6MTY4NTkyODkyMiwiZXhwIjoxNjg5NTI4OTIyfQ.iNiAMjKS6N5NzOGqV1vRgwkQGoVcgaRalXVrszR1tgi-tmUEQ6HmYRCiZmNEinVDi71eWWmkz5mPbkHEj0i8hw")
        // localStorage.setItem('email', "fera@email.com")

    }

    async login(dados) {
        const { data } = await api.post(`/login`, dados);
        if (data) {
            localStorage.setItem('nome', data.nome)
            localStorage.setItem('email', data.email)
            localStorage.setItem('id', data.userId)
            localStorage.setItem('token', data.token)

            return true
        }

        return false
    }

    usuarioAutenticado() {
        return localStorage.getItem('token') != undefined ? true : false
    }

    async logout() {
        const email = localStorage.getItem('email')

        try{
            const response = await api.delete(`logoff/${email}`, email)
    
            if (response) {
                localStorage.removeItem('nome')
                localStorage.removeItem('email')
                localStorage.removeItem('id')
                localStorage.removeItem('token')
            }

        }catch(error){
            alert(error)
        }

    }


    async cadastro(dados) {
        const { data } = await api.post(`/professor/cadastrar`, dados);
        if (data) {
            return true
        }

        return false
    }
}




