import apiAulas from '../../../authProvider/urlAulas';
import { useState } from "react";


function Aulas(props) {

  const [listaAulas, setListaAulas] = useState([]);

  useEffect(() => {
    apiAulas
      .get(`/contagem/${props.id}`)
      .then((response) => {
        setListaAulas(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);


  return (
    null

  )
}




//Select SELECT nome_aula, COUNT(*) FROM aulas JOIN professores ON professores.id = aulas.professorid
// AND data BETWEEN NOW() AND NOW() DATEDIFF(-30) GROUP BY nome_aula