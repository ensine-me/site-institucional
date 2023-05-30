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
                    <ul className="ulMenuDashOne">
                        <li className={styles.liMenuDashOne}>Perfil</li>
                        <li className={styles.liMenuDashOne}>Minhas Aulas</li>
                        <li className={styles.liMenuDashOne}>Agenda</li>
                        <li className={styles.liMenuDashOne}>Finanças</li>
                        <li className={styles.liMenuDashOne}>Analises</li>
                    </ul>
                </div>
                <div className={styles.apresentacaoPerfil}>
                    <div className={styles.cardPerfil}>
                        <h1 className={styles.h1Perfil}>Perfil</h1>
                        <div className={styles.fotoPerfil}>
                            
                        </div>
                        <ul className="">
                            <li className={styles.liMenuDashOne}>Nome</li>
                            <li className={styles.liMenuDashOne}>Contato</li>
                            <li className={styles.liMenuDashOne}>Email</li>
                            <li className={styles.liMenuDashOne}>Linkedin</li>
                            <li className={styles.liMenuDashOne}>Telefone</li>
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