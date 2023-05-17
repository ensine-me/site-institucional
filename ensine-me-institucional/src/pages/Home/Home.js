import styles from "generalStyle/styles.module.css"
import styles from "../Home/style/como-funciona.module.css"

const Home = () => {
    return (
        <>
            <div className={styles.telaInicial}>
                <nav className="menu">
                    <div className="menu__logo-container">
                        <img src="./img/logo/images/svg/icon-modified.svg" alt="" className="menu__logo"/>
                        <h2>ensine.me</h2>
                    </div>
                    <div className="menu__opcoes-container">
                        <ul className="menu__opcoes">
                            <li><a className="opcao-hamburguer">Home</a></li>
                            <li><a className="opcao-hamburguer">Quem somos</a></li>
                            <li><a className="opcao-hamburguer">O que oferecemos</a></li>
                            <li><a className="opcao-hamburguer">Como funciona</a></li>
                            <li><a className="opcao-hamburguer">Depoimentos</a></li>
                        </ul>
                    </div>
                    <div className="menu__hamburguer-container">
                        <input type="checkbox" name="ipt-menu-hamburguer" id="ipt-menu-hamburguer"/>
                        <label for="ipt-menu-hamburguer" className="hamburguer-container__label">
                            <span className="menu__container-imagem-burguer"></span>
                        </label>
                        <div className="menu__hamburguer-opcoes-container">
                            <ul className="menu__hamburguer-opcoes">
                                <li><a href="#" className="opcao-hamburguer">Home</a></li>
                                <li><a href="#" className="opcao-hamburguer">Quem somos</a></li>
                                <li><a href="#" className="opcao-hamburguer">O que oferecemos</a></li>
                                <li><a href="#" className="opcao-hamburguer">Como funciona</a></li>
                                <li><a href="#" className="opcao-hamburguer">Depoimentos</a></li>
                            </ul>
                            <a className="btn-acessar" href="#">Acessar</a>
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