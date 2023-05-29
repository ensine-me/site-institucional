import styles from '../style/dash.module.css'
import sMenu from "generalStyle/menu.module.css"
import { Link } from 'react-router-dom';
import logoSvg from "assets/img/logo/images/svg/icon-modified.svg"



//<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
//<div className={sMenu.menu}>



const DashOne = () => {
    return (
        <>
            <nav className={sMenu.menu}>
                <div className={sMenu.menuLogoContainer}>
                    <img src={logoSvg} alt="logotipo" className={sMenu.menuLogo} />
                    <h2>ensine.me</h2>
                </div>
                <div className="">
                    <ul className={sMenu.menuOpcoesContainer}>
                        <li className={sMenu.menuHamburguerOpcoesLi}><a href="../Home.js" className={sMenu.opcaoHamburguer}>Home</a></li>
                        <li className={sMenu.menuHamburguerOpcoesLi}><a href="../Home.js" className={sMenu.opcaoHamburguer}>Quem somos</a></li>
                        <li className={sMenu.menuHamburguerOpcoesLi}><a href="../Home.js" className={sMenu.opcaoHamburguer}>O que oferecemos</a></li>
                        <li className={sMenu.menuHamburguerOpcoesLi}><a href="../Home.js" className={sMenu.opcaoHamburguer}>Como funciona</a></li>
                        <li className={sMenu.menuHamburguerOpcoesLi}><a href="../Home.js" className={sMenu.opcaoHamburguer}>Depoimentos</a></li>
                    </ul>
                </div>
                <div className={sMenu.buttons}>
                    <a href="../Home.js" className={sMenu.btnAcessar}>
                        <Link to="./Login">
                            Login
                        </Link>
                    </a>
                    <a href="./cadastro" className={sMenu.btnAcessar}>
                        <Link to="./cadastro">Cadastro</Link>
                    </a>
                </div>
                <div className={sMenu.iptMenuHamburguer}>
                    <input type="checkbox" name="iptMenuHamburguer" id="iptMenuHamburguer" />
                </div>
                <div className={sMenu.menuHamburguerOpcoesContainer}>
                    <label htmlFor="iptMenuHamburguer" className={sMenu.hamburguerContainerLabel}>
                        {/*<span className={sMenu.menuContainerImagemBurguer}></span>*/}
                    </label>
                    <div className={sMenu.menuContainerImagemBurguer}>
                        <ul className={sMenu.menuHamburguerOpcoes}>
                            <li className={sMenu.menuHamburguerOpcoesLi}><a href="../Home.js" className={sMenu.opcaoHamburguer}>Home</a></li>
                            <li className={sMenu.menuHamburguerOpcoesLi}><a href="../Home.js" className={sMenu.opcaoHamburguer}>Quem somos</a></li>
                            <li className={sMenu.menuHamburguerOpcoesLi}><a href="../Home.js" className={sMenu.opcaoHamburguer}>O que oferecemos</a></li>
                            <li className={sMenu.menuHamburguerOpcoesLi}><a href="../Home.js" className={sMenu.opcaoHamburguer}>Como funciona</a></li>
                            <li className={sMenu.menuHamburguerOpcoesLi}><a href="../Home.js" className={sMenu.opcaoHamburguer}>Depoimentos</a></li>
                        </ul>
                        <a href="../Home.js" className={sMenu.btnAcessarHamburguer}>Acessar</a>
                    </div>
                </div>
            </nav>





            <div className={styles.page}>
                <div className={styles.cards1}>
                    <div className={styles.card}>
                        a
                    </div>
                    <div className={styles.card}>
                        a
                    </div> <div className={styles.card}>
                        a
                    </div> <div className={styles.card}>
                        a
                    </div> <div className={styles.card}>
                        a
                    </div>
                </div>

                <div className={styles.cards2}>
                    <div className={styles.card}>
                        a
                    </div>
                    <div className={styles.card}>
                        a
                    </div> <div className={styles.card}>
                        a
                    </div> <div className={styles.card}>
                        a
                    </div> <div className={styles.card}>
                        a
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashOne;