import React from 'react';

import styles from "generalStyle/styles.module.css"
import sOferecemos from "./style/oQueOferecemos.module.css"
import sDepoimentos from "./style/depoimentos.module.css"
import sFooter from "generalStyle/footer.module.css"

import Menu from 'components/organisms/menu/menu';
import FirstSection from 'components/templates/firstSection/firstSection';
import QuemSomosSection from 'components/templates/quemSomosSection/quemSomosSection'
import ComoFuncionaSection from 'components/templates/comoFuncionaSection/comoFuncionaSection';

import depoimento1 from "assets/img/stock/depoimentos/v3_0591770.jpg"
import depoimento2 from "assets/img/stock/depoimentos/v3_0866164.jpg"
import depoimento3 from "assets/img/stock/depoimentos/v3_0946854.jpg"
import depoimento4 from "assets/img/stock/depoimentos/v3_0752929.jpg"

const Home = () => {
    return (
        <>
            <div className={styles.telaInicial}>
                <Menu />
                <FirstSection text={'Educação de qualidade a todos'} />
                <QuemSomosSection />
                <ComoFuncionaSection />
            </div>

            <section id='o-que-oferecemos' className={sOferecemos.oQueOferecemos}>
                <div className={sOferecemos.oQueOferecemosContainer}>
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
                        <div className={sOferecemos.oQueOferecemosTexto}>
                            <h3>Para o professor</h3>
                            <ul>
                                <li>Chance de impactar a vida de quem mais precisa</li>
                                <li>Ambiente para aperfeiçoamento de sua didática</li>
                                <li>Certificado de aulas complementares</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id='depoimentos' className={sDepoimentos.depoimentosContainer}>
                <h2 className={sDepoimentos.depoimentos}>
                    Depoimentos
                </h2>
                <div className={sDepoimentos.depoimentosContainer}>
                    <div className={sDepoimentos.depoimentosBlock}>
                        <div className={sDepoimentos.cardDepoimento}>
                            <p className={sDepoimentos.depoimentoTexto}>Esta plataforma é incrível. Tive a oportunidade de mudar vidas das
                                pessoas que mais precisavam. Meu trabalho nunca foi tão gratificante antes.</p>
                            <h3 className={[sDepoimentos.depoimentoNome, sDepoimentos.depoimentoInfoAutor].join(' ')}>Najila Vitoria</h3>
                            <img src={depoimento1} alt="" className={sDepoimentos.depoimentoImagem} />
                            <h3 className={[sDepoimentos.depoimentoCargo, sDepoimentos.depoimentoInfoAutor].join(' ')}>Professora</h3>
                        </div>
                        <div className={sDepoimentos.cardDepoimento}>
                            <p className={sDepoimentos.depoimentoTexto}>Eu não me sentia preparado para o vestibular e não tinha dinheiro
                                para um cursinho. A ensine.me foi a única que me deu preparo para estar onde estou hoje</p>
                            <h3 className={[sDepoimentos.depoimentoNome, sDepoimentos.depoimentoInfoAutor].join(' ')}>Guilherme Henrique</h3>
                            <img src={depoimento2} alt="" className={sDepoimentos.depoimentoImagem} />
                            <h3 className={[sDepoimentos.depoimentoCargo, sDepoimentos.depoimentoInfoAutor].join(' ')}>Aluno</h3>
                        </div>
                    </div>
                    <div className={sDepoimentos.depoimentosBlock}>
                        <div className={sDepoimentos.cardDepoimento}>
                            <p className={sDepoimentos.depoimentoTexto}>Encontrei alunos incríveis e pude fazer a diferença com um impacto
                                real em suas vidas</p>
                            <h3 className={[sDepoimentos.depoimentoNome, sDepoimentos.depoimentoInfoAutor].join(' ')}>Maria Antonieta</h3>
                            <img src={depoimento3} alt="" className={sDepoimentos.depoimentoImagem} />
                            <h3 className={[sDepoimentos.depoimentoCargo, sDepoimentos.depoimentoInfoAutor].join(' ')}>Professora</h3>
                        </div>
                        <div className={sDepoimentos.cardDepoimento}>
                            <p className={sDepoimentos.depoimentoTexto}>Nunca achei que entraria em Medicina em uma Federal saindo de uma
                                escola pública. Foi essa a porta que a ensine.me abriu para mim</p>
                            <h3 className={[sDepoimentos.depoimentoNome, sDepoimentos.depoimentoInfoAutor].join(' ')}>Arthur Oliveira</h3>
                            <img src={depoimento4} alt="" className={sDepoimentos.depoimentoImagem} />
                            <h3 className={[sDepoimentos.depoimentoCargo, sDepoimentos.depoimentoInfoAutor].join(' ')}>Aluno</h3>
                        </div>
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