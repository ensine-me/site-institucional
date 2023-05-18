import styles from "generalStyle/styles.module.css"
// import sComoFunciona from "../Home/style/como-funciona.module.css"
import sMenu from "generalStyle/menu.module.css"

const Home = () => {
    return (
        <>
            <div className={styles.telaInicial}>
                <nav className={sMenu.menu}>
                    <div className={sMenu.menuLogoContainer}>
                        <img src="./img/logo/images/svg/icon-modified.svg" alt="" className={sMenu.menuLogo}/>
                        <h2>ensine.me</h2>
                    </div>
                    <div className={sMenu.menu}>
                        <ul className={sMenu.menuOpcoesContainer}>
                            <li><a className={sMenu.opcaoHamburguer}>Home</a></li>
                            <li><a className={sMenu.opcaoHamburguer}>Quem somos</a></li>
                            <li><a className={sMenu.opcaoHamburguer}>O que oferecemos</a></li>
                            <li><a className={sMenu.opcaoHamburguer}>Como funciona</a></li>
                            <li><a className={sMenu.opcaoHamburguer}>Depoimentos</a></li>
                        </ul>
                    </div>
                    <div className={sMenu.menuHamburguerContainer}>
                        <input type="checkbox" name="ipt-menu-hamburguer" id="ipt-menu-hamburguer"/>
                        <label for="ipt-menu-hamburguer" className={sMenu.hamburguerContainerLabel}>
                            <span className={sMenu.menuContainerImagemBurguer}></span>
                        </label>
                        <div className={sMenu.menuContainerImagemBurguer}>
                            <ul className={sMenu.menuHamburguerOpcoesContainer}>
                                <li><a className={sMenu.opcaoHamburguer}>Home</a></li>
                                <li><a className={sMenu.opcaoHamburguer}>Quem somos</a></li>
                                <li><a className={sMenu.opcaoHamburguer}>O que oferecemos</a></li>
                                <li><a className={sMenu.opcaoHamburguer}>Como funciona</a></li>
                                <li><a className={sMenu.opcaoHamburguer}>Depoimentos</a></li>
                            </ul>
                            <a className={sMenu.btnAcessar} href="#">Acessar</a>
                        </div>
                    </div>
                </nav>

                <header>
                    <h1>Educação de qualidade a todos</h1>
                </header>
            </div>-
        </>
    )
}

export default Home