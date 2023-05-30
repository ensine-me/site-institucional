import styles from '../style/dash.module.css'
import { Link } from 'react-router-dom';
import Chart from './components/Chart'

import logoSvg from "assets/img/logo/images/svg/icon-modified.svg"
import depoimento1 from "assets/img/stock/depoimentos/v3_0591770.jpg"


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
    return (
        <>
            <div className={styles.page}>
                <div className={styles.menu}>
                    <div className={styles.menuLogoContainer}>
                        <img src={logoSvg} alt="logotipo" className={styles.menuLogo} />
                        <Link to="../">
                            <h2>Ensine.me</h2>
                        </Link>
                    </div>
                    <ul className={styles.ulMenuDashOne}>
                        <li className={styles.liMenuDashOne}>Perfil</li>
                        <li className={styles.liMenuDashOne}>Minhas Aulas</li>
                        <li className={styles.liMenuDashOne}>Agenda</li>
                        <li className={styles.liMenuDashOne}>Finanças</li>
                        <li className={styles.liMenuDashOne}>Analises</li>
                    </ul>
                </div>
                <div className={styles.apresentacaoPerfil}>
                        <div className={styles.cardPerfil}>
                            <Chart />
                        </div>


                </div>
            </div>
        </>
    )
}

export default DashOne;