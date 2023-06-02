import sDepoimentoCard from './depoimentoCard.module.css'

import SimpleText from "components/atoms/simpleText/simpleText";
import Title from "components/atoms/title/title";

import PropTypes from 'prop-types';

const DepoimentoCard = ({ txtDepoimento, txtNome, imgSrc, txtTipoUsuario }) => {
    return (
        <div className={sDepoimentoCard.depoimentoCardContainer}>
            <div className={sDepoimentoCard}>
                <Title text={txtNome} />
                <div className={sDepoimentoCard.imgAndText}>
                    <img src={imgSrc} alt={"Foto do depoimentista"} className={sDepoimentoCard.img} />
                    <p className={sDepoimentoCard.depoimentoCardTexto}>
                        <SimpleText text={txtDepoimento} color={'black'} />
                    </p>
                </div>
            </div>
            <Title text={txtTipoUsuario} />
        </div>
    )
}

DepoimentoCard.propTypes = {
    txtDepoimento: PropTypes.string.isRequired,
    txtNome: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    txtTipoUsuario: PropTypes.string.isRequired
}

export default DepoimentoCard;