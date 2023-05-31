import PropTypes from 'prop-types'
import sLogo from './logo.module.css'

import GreenTitle from '../title/greenTitle'
import LogoSvg from '../../../assets/img/logo/images/svg/icon-modified.svg'

import Home from '../../../pages/Home'

const Logo = () => {
    return <div className={sLogo.logoContainer}>
        <a className={sLogo.a} href={Home}>
            <img className={sLogo.img} src={LogoSvg} alt='Logotipo ensine.me' />
            <GreenTitle texto='Ensine.me' />
        </a>
    </div>
};

export default Logo