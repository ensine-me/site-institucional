import apiAulas from "./utils/apiAulas";

export default class UrlAulas {
    constructor() {
    }

    async listarContagem () {
        const idProfessor = sessionStorage.getItem('id')
        const {data} = await apiAulas.get(`/contagem/${idProfessor}`)
        if(data){
            console.log('data: ', data)
            return true;
        }
        return false
    }

}