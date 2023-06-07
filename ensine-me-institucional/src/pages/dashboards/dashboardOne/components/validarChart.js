 import React from "react"
 import Chart from "./Chart"
 const ValidarGrafico = (props) => {
    var Tem = false
    if(Object.keys(props.dados).length > 0){
        Tem = true
        console.log("TAMANHO DA PROPS", Object.keys(props.dados).length)
    }else{
        console.log("NAAAAAAAAAAAAAAO TEM")
    }
    return(
       Tem == true ? <Chart series = {props.dados} /> : <h1>ola</h1>
    )
}

export default ValidarGrafico;