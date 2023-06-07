import Aulas from "pages/dashboards/professor/Aulas";
import apiAulas from "./utils/apiAulas";



export default class UrlAulas {
    constructor() {
    }

    async listarContagem () {
        const idProfessor = sessionStorage.getItem('id')
        const {data} = await apiAulas.get(`/contagem/${idProfessor}`)
        if(data){
            const aulas = new Aulas([{data}]);
            console.log('aulas: ', aulas)
            
            return aulas;
        }
        return null
    }

}