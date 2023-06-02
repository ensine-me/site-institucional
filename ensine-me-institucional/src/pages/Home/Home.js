import React from 'react';

import styles from "generalStyle/styles.module.css"
import sDepoimentos from "./style/depoimentos.module.css"
import sFooter from "generalStyle/footer.module.css"

import Menu from 'components/organisms/menu/menu';
import FirstSection from 'components/templates/firstSection/firstSection';
import QuemSomosSection from 'components/templates/quemSomosSection/quemSomosSection'
import ComoFuncionaSection from 'components/templates/comoFuncionaSection/comoFuncionaSection';
import OferecemosSection from 'components/templates/oQueOferecemosSection/oQueOferecemosSection';
import DepoimentosSection from 'components/templates/depoimentosSection/depoimentosSection';

const Home = () => {
    return (
        <>
            <div className={styles.telaInicial}>
                <Menu />
                <FirstSection text={'Educação de qualidade a todos'} />
                <QuemSomosSection />
                <ComoFuncionaSection />
                <OferecemosSection />
                <DepoimentosSection />
            </div>
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