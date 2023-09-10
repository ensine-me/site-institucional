import React from 'react';

import style from '../../../generalStyle/index.module.css'

import Menu from 'components/organisms/menu/menu';
import FirstSection from 'components/templates/firstSection/firstSection';
import QuemSomosSection from 'components/templates/quemSomosSection/quemSomosSection'
import ComoFuncionaSection from 'components/templates/comoFuncionaSection/comoFuncionaSection';
import OferecemosSection from 'components/templates/oQueOferecemosSection/oQueOferecemosSection';
import DepoimentosSection from 'components/templates/depoimentosSection/depoimentosSection';
import Footer from 'components/organisms/footer/footer';

const PaginaInicial = () => {
    return (
        <>
            <Menu />
            <FirstSection text={'Educação de qualidade a todos'} />
            <QuemSomosSection />
            <ComoFuncionaSection />
            <OferecemosSection />
            <DepoimentosSection />
            <Footer />
        </>
    )
}

export default PaginaInicial;