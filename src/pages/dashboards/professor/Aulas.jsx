import apiAulas from '../../../authProvider/urlAulas';
import { useState } from "react";

export default class Aulas{
  constructor([{data}]){
    this.dados=[]
      for (let index = 0; index < data.length; index++) {
        this.dados[index]={
          name: data[index].nome,
          data: data[index].total
      }     
  }
}
}




//Select SELECT nome_aula, COUNT(*) FROM aulas JOIN professores ON professores.id = aulas.professorid
// AND data BETWEEN NOW() AND NOW() DATEDIFF(-30) GROUP BY nome_aula