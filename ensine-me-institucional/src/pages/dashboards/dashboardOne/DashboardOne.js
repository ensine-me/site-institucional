import styles from '../style/dash.module.css'
import { Link } from 'react-router-dom';
import Chart from './components/Chart'
import { useNavigate } from 'react-router-dom'


import Logo from 'components/atoms/logo/logo';
import UrlUsuarios from 'authProvider/urlUsuarios';
import UrlAulas from 'authProvider/urlAulas';
import { useState } from 'react';
import Aulas from '../professor/Aulas';
import ValidarGrafico from './components/validarChart';


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


                <Chart
                            series = {dadosAulas.dados} />
*/

const DashOne = () => {

    

    const navigate = new useNavigate()
    const estiloBlock = {
        display: 'flex',
    }
    const estiloNone = {
        display: 'none',
    }

    const [dadosAulas, setDadosAulas] = useState([])
    const [analises, setAnalises] = useState(false)
    const [perfil, setperfil] = useState(true)
    const [aulas, setaulas] = useState(false)
    const [agenda, setagenda] = useState(false)

    const perfilTrue = () => {
        setAnalises(false)
        setperfil(true)
        setaulas(false)
    }

    const minhasAulas = () => {
        setAnalises(false)
        setperfil(false)
        setaulas(true)
    }

    const minhasAnalises = () => {
        console.log("DADOS DA AULA: ", dadosAulas )

        setAnalises(true)
        setperfil(false)
        setaulas(false)
    }
    const contagemAulas = async (event) => {
        event.preventDefault()

        const data = await apiAulas.listarContagem();
        setDadosAulas( data)
        if (data) {
            console.log("DADOS DA AULA: ", dadosAulas )
            alert("tem valor")
            console.log("DADOS AULA: ", dadosAulas)

            for (var i = 0; i < data.length; i++) {
                setDadosAulas([...dadosAulas, { ...dadosAulas[i], name: data[i].nome, data: data[i].total }])
                console.log("DADOS AULA: ", dadosAulas)
                series.push({
                    name: data[i].nome,
                    data: data[i].total
                })
            }


            console.log("series: ", series)

        } else {
            alert("Não tem valor")
        }


    }

    const Deslogar = async (event) => {
        event.preventDefault()
        try {

            const response = await apiUsuarios.logout()

            if (response === true) {
                navigate("/")
            }
            console.log("RESPONSE: ", response)
        } catch (error) {
            console.log("ERRO: ", error)
        }


    }


    return (
        <>
            <div className={styles.page} onLoad={contagemAulas}>
                <div className={styles.menu}>
                    <div className={styles.menuLogoContainer}>
                        <Logo />
                    </div>
                    <ul className={styles.ulMenuDashOne}>
                        <li className={styles.liMenuDashOne} onClick={perfilTrue}>Perfil</li>
                        <li className={styles.liMenuDashOne} onClick={minhasAulas}>Minhas Aulas</li>
                        <li className={styles.liMenuDashOne}>Agenda</li>
                        <li className={styles.liMenuDashOne} >Finanças</li>
                        <li className={styles.liMenuDashOne} onClick={minhasAnalises}>Analises</li>
                        <div className={styles.centralizarSair}>
                            <a className={styles.liSair} onClick={Deslogar}>Sair</a>
                        </div>
                    </ul>
                </div>
                <div className={styles.apresentacao}>
                    <div className={styles.apresentacaoPerfil} style={perfil == true ? estiloBlock : estiloNone}>
                        <div className={styles.cardPerfil}>
                            <div className={styles.alinhamento}>
                                <h1 className={styles.h1Descricao}>Perfil</h1>
                                <div className="">
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
                        {/*<div className={styles.cardDescricao}>
                            <div className={styles.lousa}>
                                <div className={styles.alinhamento}>
                                    <h1 className={styles.h1Descricao}>Descrição</h1>
                                </div>
                                <div className={styles.descProfessor}>Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
                                </div>
                            </div>
    </div>*/}
                    </div>

                    <div className={styles.cards} style={aulas == true ? estiloBlock : estiloNone} >
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

                    <div className={styles.cardPerfil} name="grafico" style={analises == true ? estiloBlock : estiloNone}>
                    <ValidarGrafico dados = {dadosAulas} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashOne;