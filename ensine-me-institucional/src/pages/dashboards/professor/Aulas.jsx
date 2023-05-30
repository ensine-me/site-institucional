import api from "./api";
import { useState } from "react";


const [listaAulas, setListaAulas] = useState([]);

useEffect(() => {
  api
    .get()
    .then((response) => {
      setListaAulas(response.data);
    })
    .catch((erro) => {
      console.log(erro);
    });
}, []);

//Select SELECT nome_aula, COUNT(*) FROM aulas JOIN professores ON professores.id = aulas.professorid 
// AND data BETWEEN NOW() AND NOW() DATEDIFF(-30) GROUP BY nome_aula