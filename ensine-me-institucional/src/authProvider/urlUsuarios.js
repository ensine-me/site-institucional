import api from "./utils/api";

export default class UrlUsuarios {
    constructor() {
    }

    async login(dados) {
        const {data} = await api.post(`/login`, dados);
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
            const response = await api.delete(`logoff/${email}`)
    
            if (response) {
                localStorage.removeItem('nome')
                localStorage.removeItem('email')
                localStorage.removeItem('id')
                localStorage.removeItem('token')

                return true;
            }

            return false;

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




