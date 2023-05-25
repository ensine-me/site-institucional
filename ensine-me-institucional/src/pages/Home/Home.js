import { Link } from 'react-router-dom';
import styles from "generalStyle/styles.module.css"
import sComoFunciona from "./style/comoFunciona.module.css"
import sMenu from "generalStyle/menu.module.css"
import sQuemSomos from "./style/quemSomos.module.css"
import sOferecemos from "./style/oQueOferecemos.module.css"
import sDepoimentos from "./style/depoimentos.module.css"
import sSwiper from "./style/swiper.module.css"
import sFooter from "generalStyle/footer.module.css"

import logoSvg from "assets/img/logo/images/svg/icon-modified.svg"

import depoimento1 from "assets/img/stock/depoimentos/v3_0591770.jpg"
import depoimento2 from "assets/img/stock/depoimentos/v3_0866164.jpg"
import depoimento3 from "assets/img/stock/depoimentos/v3_0946854.jpg"
import depoimento4 from "assets/img/stock/depoimentos/v3_0752929.jpg"

// import comoFuncionaVideo from "assets/video/fluxoOperacao.mp4"

import swiperScript from "./javaScript.js"
<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>

const Home = () => {
    return (
        <>
            <div className={styles.telaInicial}>
                <nav className={sMenu.menu}>
                    <div className={sMenu.menuLogoContainer}>
                        <img src={logoSvg} alt="logotipo" className={sMenu.menuLogo} />
                        <h2>ensine.me</h2>
                    </div>
                    <div className={sMenu.menu}>
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

                <header>
                    <h1 className="headerh1">Educação de qualidade a todos</h1>
                </header>
            </div>
            <section className={sQuemSomos.quemSomos}>
                <h2 className={[sQuemSomos.quemSomosTitulo, styles.subtitulo].join(' ')}>Quem Somos</h2>
                <p className={sQuemSomos.quemSomosTexto}>A Ensine.me é uma organização sem fins lucrativos que leva aulas particulares ou em
                    grupo para alunos do ensino médio de baixa renda</p>
                <p className={sQuemSomos.quemSomosTexto}>Nós conectamos professores que querem fazer a diferença com alunos que querem
                    aprender, levando educação de forma gratuita e preparando jovens de quaisquer condições econômicas para o
                    vestibular</p>
            </section>

            <section className={sComoFunciona.comoFunciona}>
                <h2 className={[sComoFunciona.comoFuncionaTitulo, styles.subtitulo].join(' ')}>
                    Como funciona
                </h2>
                {/* <video src={comoFuncionaVideo} loop id="video-como-funciona" muted="muted"></video> */}
            </section>

            <section className={sOferecemos.oQueOferecemos}>
                <h2 className={[sOferecemos.oQueOferecemos, styles.subtitulo]}>
                    O que oferecemos
                </h2>
                <div className={sOferecemos.oQueOferecemosTextosContainer}>
                    <div className={sOferecemos.QueOferecemosTexto}>
                        <h3>Para o aluno</h3>
                        <ul>
                            <li>Preparação gratuita para vestibulares</li>
                            <li>Aulas direcionadas de temas escolhidos pelos alunos</li>
                            <li>Variedade de professores e disciplinas</li>
                        </ul>
                    </div>
                    <div className={sOferecemos.QueOferecemosTexto}>
                        <h3>Para o professor</h3>
                        <ul>
                            <li>Chance de impactar a vida de quem mais precisa</li>
                            <li>Ambiente para aperfeiçoamento de sua didática</li>
                            <li>Certificado de aulas complementares</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={sDepoimentos.depoimentosContainer}>
                <h2 className={sDepoimentos.depoimentos}>
                    Depoimentos
                </h2>
                <div className={sDepoimentos.depoimentosContainer}>
                    <div class="Swiper">
                        <div className={sSwiper.swiperWrapper}>
                            <div className={sDepoimentos.cardDepoimento}>
                                <p className={sDepoimentos.depoimentoTexto}>Esta plataforma é incrível. Tive a oportunidade de mudar vidas das
                                    pessoas que mais precisavam. Meu trabalho nunca foi tão gratificante antes.</p>
                                <h3 className={[sDepoimentos.depoimentoNome, sDepoimentos.depoimentoInfoAutor].join(' ')}>Najila Vitoria</h3>
                                <h3 className={[sDepoimentos.depoimentoCargo, sDepoimentos.depoimentoInfoAutor].join(' ')}>Professora</h3>
                                <img src={depoimento1} alt="" className={sDepoimentos.depoimentoImagem} />
                            </div>
                            <div className={sDepoimentos.cardDepoimento}>
                                <p className={sDepoimentos.depoimentoTexto}>Eu não me sentia preparado para o vestibular e não tinha dinheiro
                                    para um cursinho. A ensine.me foi a única que me deu preparo para estar onde estou hoje</p>
                                <h3 className={[sDepoimentos.depoimentoNome, sDepoimentos.depoimentoInfoAutor].join(' ')}>Guilherme Henrique</h3>
                                <h3 className={[sDepoimentos.depoimentoCargo, sDepoimentos.depoimentoInfoAutor].join(' ')}>Aluno</h3>
                                <img src={depoimento2} alt="" className={sDepoimentos.depoimentoImagem} />
                            </div>
                            <div className={sDepoimentos.cardDepoimento}>
                                <p className={sDepoimentos.depoimentoTexto}>Encontrei alunos incríveis e pude fazer a diferença com um impacto
                                    real em suas vidas</p>
                                <h3 className={[sDepoimentos.depoimentoNome, sDepoimentos.depoimentoInfoAutor].join(' ')}>Maria Antonieta</h3>
                                <h3 className={[sDepoimentos.depoimentoCargo, sDepoimentos.depoimentoInfoAutor].join(' ')}>Professora</h3>
                                <img src={depoimento3} alt="" className={sDepoimentos.depoimentoImagem} />
                            </div>
                            <div className={sDepoimentos.cardDepoimento}>
                                <p className={sDepoimentos.depoimentoTexto}>Nunca achei que entraria em Medicina em uma Federal saindo de uma
                                    escola pública. Foi essa a porta que a ensine.me abriu para mim</p>
                                <h3 className={[sDepoimentos.depoimentoNome, sDepoimentos.depoimentoInfoAutor].join(' ')}>Arthur Oliveira</h3>
                                <h3 className={[sDepoimentos.depoimentoCargo, sDepoimentos.depoimentoInfoAutor].join(' ')}>Aluno</h3>
                                <img src={depoimento4} alt="" className={sDepoimentos.depoimentoImagem} />
                            </div>
                        </div>

                        <div class="swiperPagination"></div>

                        <div class="swiperScrollbar"></div>
                    </div>
                </div>

            </section>

            <footer>
                <div className={sFooter.footerLinks}>
                    <ul>
                        <li>
                            <a href="https://github.com/orgs/ensine-me/repositories">
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={sFooter.footerCopyright}>
                    ensine.me ©️ 2023
                </div>
            </footer>
        </>  
    )
}

export default Home