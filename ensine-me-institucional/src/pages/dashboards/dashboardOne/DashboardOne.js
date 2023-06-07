import styles from "../style/dash.module.css";
import { Link } from "react-router-dom";
import Chart from "./components/Chart";
import { useNavigate } from "react-router-dom";

import Logo from "components/atoms/logo/logo";
import UrlUsuarios from "authProvider/urlUsuarios";
import UrlAulas from "authProvider/urlAulas";
import { useState } from "react";

const apiUsuarios = new UrlUsuarios();
const apiAulas = new UrlAulas();

//<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
//<div className={sMenu.menu}>

/*
 <div className={styles.cards}>
                        <div className={styles.card}>
                            a
                        </div>
                        <div className={styles.card}>
                            a
                        </div>
                        <div className={styles.card}>
                            a
                        </div>
                    </div>





<div className={styles.apresentacaoPerfil}>
                    <div className={styles.cardPerfil}>
                        <div className={styles.alinhamento}>
                            <h1 className={styles.h1Descricao}>Perfil</h1>
                            <div className="">
                                <img src={depoimento1} alt="" className={styles.fotoPerfil}/>
                            </div>
                        </div>
                        <ul className={styles.ulMenuDashOne}>
                            <p className={styles.pPerfil}>Nome</p>
                            <li className={styles.liMenuDashOne}>Najila Trindade</li>
                            <p className={styles.pPerfil}>Idade</p>
                            <li className={styles.liMenuDashOne}>27 Anos</li>
                            <p className={styles.pPerfil}>Email</p>
                            <li className={styles.liMenuDashOne}>najilat@gmail.com</li>
                            <p className={styles.pPerfil}>LinkedIn</p>
                            <li className={styles.liMenuDashOne}>Najila Trindade</li>
                            <p className={styles.pPerfil}>Telefone</p>
                            <li className={styles.liMenuDashOne}>(11) 93453-3429</li>
                        </ul>
                    </div>
                    <div className={styles.cardDescricao}>
                        <div className={styles.lousa}>
                        <div className={styles.alinhamento}>
                            <h1 className={styles.h1Descricao}>Descrição</h1>
                        </div>
                        <div className={styles.descProfessor}>Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia nastirus saviata naravia matiria querovax.
                        </div>
                        </div>
                    </div>

                </div>

*/

const DashOne = () => {
    const [series, setSeries] = useState([])   
  const navigate = new useNavigate();
  const estiloNone = {
    display: "none",
  };

  const estiloBlock = {
    display: "block",
  };

  const [perfil, setperfil] = useState(true);
  const [analises, setAnalises] = useState(false);
  const [aulas, setaulas] = useState(false);

  const contagemAulas = async (event) => {
    setAnalises(true);
    setperfil(false);
    setaulas(false);

    event.preventDefault();
    const data = await apiAulas.listarContagem();

    if (data) {
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAA ", data[0].materiaNome)
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAA ", data[0].total)
      alert("tem valor");
        console.log("setSeriesEEEEEE: ",series)
    } else {
      alert("Não tem valor");
    }
  };

  const Deslogar = async (event) => {
    event.preventDefault();
    try {
      const response = await apiUsuarios.logout();

      if (response === true) {
        navigate("/");
      }
      console.log("RESPONSE: ", response);
    } catch (error) {
      console.log("ERRO: ", error);
    }
  };

  return (
    <>
      <div className={styles.page}>
        <div className={styles.menu}>
          <div className={styles.menuLogoContainer}>
            <Logo />
          </div>
          <ul className={styles.ulMenuDashOne}>
            <li className={styles.liMenuDashOne}>Perfil</li>
            <li className={styles.liMenuDashOne}>Minhas Aulas</li>
            <li className={styles.liMenuDashOne}>Agenda</li>
            <li className={styles.liMenuDashOne}>Finanças</li>
            <li className={styles.liMenuDashOne} onClick={contagemAulas}>
              Analises
            </li>
            <div className={styles.centralizarSair}>
              <li className={styles.liSair} onClick={Deslogar}>
                Sair
              </li>
            </div>
          </ul>
        </div>
        <div className={styles.apresentacao}>
          <div
            className={styles.apresentacaoPerfil}
            style={perfil === true ? estiloBlock : estiloNone}
          >
            <div className={styles.cardPerfil}>
              <div className={styles.alinhamento}>
                <h1 className={styles.h1Descricao}>Perfil</h1>
                <div className=""></div>
              </div>
              <ul className={styles.ulMenuDashOne}>
                <p className={styles.pPerfil}>Nome</p>
                <li className={styles.liMenuDashOne}>Najila Trindade</li>
                <p className={styles.pPerfil}>Idade</p>
                <li className={styles.liMenuDashOne}>27 Anos</li>
                <p className={styles.pPerfil}>Email</p>
                <li className={styles.liMenuDashOne}>najilat@gmail.com</li>
                <p className={styles.pPerfil}>LinkedIn</p>
                <li className={styles.liMenuDashOne}>Najila Trindade</li>
                <p className={styles.pPerfil}>Telefone</p>
                <li className={styles.liMenuDashOne}>(11) 93453-3429</li>
              </ul>
            </div>
            <div className={styles.cardDescricao}>
              <div className={styles.alinhamento}>
                <h1 className={styles.h1Descricao}>Descrição</h1>
              </div>
              <div className={styles.descProfessor}>
                Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus. Curabitur
                tempor quis eros tempus lacinia. Nam bibendum pellentesque quam
                a convallis. Sed ut vulputate nisi. Integer in felis sed leo
                vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat
                ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus
                lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit
                amet magna non ligula vestibulum eleifend. Nulla varius volutpat
                turpis sed lacinia nastirus saviata naravia matiria querovax.
              </div>
            </div>
          </div>

          <div
            className={styles.cards}
            style={aulas == true ? estiloBlock : estiloNone}
          >
            <div className={styles.card}>a</div>
            <div className={styles.card}>a</div>
            <div className={styles.card}>a</div>
          </div>

          <div
            className={styles.cardGrafico}
            name="grafico"
            style={analises == true ? estiloBlock : estiloNone}
          >
            <Chart />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashOne;
