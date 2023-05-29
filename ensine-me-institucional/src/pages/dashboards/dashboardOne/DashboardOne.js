import styles from '../style/dash.module.css'
import sMenu from "generalStyle/menu.module.css"
import { Link } from 'react-router-dom';
import logoSvg from "assets/img/logo/images/svg/icon-modified.svg"



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
                    <ul className="">
                        <li className="">Perfil</li>
                        <li className="">Minhas Aulas</li>
                        <li className="">Agenda</li>
                        <li className="">Finanças</li>
                        <li className="">Analises</li>
                    </ul>
                </div>
                <div className={styles.apresentacaoPerfil}>
                    <div className={styles.cardPerfil}>
                        <h1 className={styles.h1Perfil}>Perfil</h1>
                        <div className={styles.fotoPerfil}>
                        </div>
                        <ul className="">
                            <li className="">Nome</li>
                            <li className="">Contato</li>
                            <li className="">Email</li>
                            <li className="">Linkedin</li>
                            <li className="">Telefone</li>
                        </ul>
                    </div>
                    <div className={styles.cardDescricao}>
                        <h1 className={styles.h1Descricao}>Descrição</h1>
                        <h4> </h4>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DashOne;