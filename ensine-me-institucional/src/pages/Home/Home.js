import styles from "generalStyle/styles.module.css"
import sComoFunciona from "./style/comoFunciona.module.css"
import sMenu from "generalStyle/menu.module.css"
import sQuemSomos from "./style/quemSomos.module.css"

const Home = () => {
    return (
        <>
            <div className={styles.telaInicial}>
                <nav className={sMenu.menu}>
                    <div className={sMenu.menuLogoContainer}>
                        <img src="./img/logo/images/svg/icon-modified.svg" alt="" className={sMenu.menuLogo} />
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
                        <input type="checkbox" name="ipt-menu-hamburguer" id="ipt-menu-hamburguer" />
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
            </div>
            <section className={sQuemSomos.quemSomos}>
                <h2 className={[sQuemSomos.quemSomosTitulo, sQuemSomos.subtitulo].join(' ')}>Quem Somos</h2>
                <p className={sQuemSomos.quemSomosTexto}>A Ensine.me é uma organização sem fins lucrativos que leva aulas particulares ou em
                    grupo para alunos do ensino médio de baixa renda</p>
                <p className={sQuemSomos.quemSomosTexto}>Nós conectamos professores que querem fazer a diferença com alunos que querem
                    aprender, levando educação de forma gratuita e preparando jovens de quaisquer condições econômicas para o
                    vestibular</p>
            </section>

            <section className={sComoFunciona.comoFunciona}>
                <h2 className={[sComoFunciona.comoFuncionaTitulo, sComoFunciona.subtitulo].join(' ')}>
                    Como funciona
                </h2>
                <video src="./img/videos/fluxo de operação.mp4" loop id="video-como-funciona" muted="muted"></video>
            </section>

            <section className="o-que-oferecemos container">
                <h2 className="o-que-oferecemos__titulo subtitulo">
                    O que oferecemos
                </h2>
                <div className="o-que-oferecemos__textos-container">
                    <div className="o-que-oferecemos__texto">
                        <h3>Para o aluno</h3>
                        <ul>
                            <li>Preparação gratuita para vestibulares</li>
                            <li>Aulas direcionadas de temas escolhidos pelos alunos</li>
                            <li>Variedade de professores e disciplinas</li>
                        </ul>
                    </div>
                    <div className="o-que-oferecemos__texto">
                        <h3>Para o professor</h3>
                        <ul>
                            <li>Chance de impactar a vida de quem mais precisa</li>
                            <li>Ambiente para aperfeiçoamento de sua didática</li>
                            <li>Certificado de aulas complementares</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="depoimentos container">
                <h2 className="depoimentos__titulo subtitulo">
                    Depoimentos
                </h2>
                <div className="depoimentos__container">
                    <div className="swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide card-depoimento">
                                <p className="depoimento__texto">Esta plataforma é incrível. Tive a oportunidade de mudar vidas das
                                    pessoas que mais precisavam. Meu trabalho nunca foi tão gratificante antes.</p>
                                <h3 className="depoimento__nome depoimento__info-autor">Najila Vitoria</h3>
                                <h3 className="depoimento__cargo depoimento__info-autor">Professora</h3>
                                <img src="./img/stock/depoimentos/v3_0591770.jpg" alt="" className="depoimento__imagem" />
                            </div>
                            <div className="swiper-slide card-depoimento">
                                <p className="depoimento__texto">Eu não me sentia preparado para o vestibular e não tinha dinheiro
                                    para um cursinho. A ensine.me foi a única que me deu preparo para estar onde estou hoje</p>
                                <h3 className="depoimento__nome depoimento__info-autor">Guilherme Henrique</h3>
                                <h3 className="depoimento__cargo depoimento__info-autor">Aluno</h3>
                                <img src="./img/stock/depoimentos/v3_0866164.jpg" alt="" className="depoimento__imagem" />
                            </div>
                            <div className="swiper-slide card-depoimento">
                                <p className="depoimento__texto">Encontrei alunos incríveis e pude fazer a diferença com um impacto
                                    real em suas vidas</p>
                                <h3 className="depoimento__nome depoimento__info-autor">Maria Antonieta</h3>
                                <h3 className="depoimento__cargo depoimento__info-autor">Professora</h3>
                                <img src="./img/stock/depoimentos/v3_0946854.jpg" alt="" className="depoimento__imagem" />
                            </div>
                            <div className="swiper-slide card-depoimento">
                                <p className="depoimento__texto">Nunca achei que entraria em Medicina em uma Federal saindo de uma
                                    escola pública. Foi essa a porta que a ensine.me abriu para mim</p>
                                <h3 className="depoimento__nome depoimento__info-autor">Arthur Oliveira</h3>
                                <h3 className="depoimento__cargo depoimento__info-autor">Aluno</h3>
                                <img src="./img/stock/depoimentos//v3_0752929.jpg" alt="" className="depoimento__imagem" />
                            </div>
                        </div>

                        <div className="swiper-pagination"></div>

                        <div className="swiper-scrollbar"></div>
                    </div>
                </div>

            </section>

            <footer>
                <div className="footer__links">
                    <ul>
                        <li>
                            <a href="#">
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__copyright">
                    ensine.me ©️ 2023
                </div>
            </footer>

        </>
    )
}

export default Home