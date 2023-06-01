import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import sLogo from './logo.module.css'

import GreenTitle from '../title/greenTitle/greenTitle.jsx'
import LogoSvg from '../../../assets/img/logo/images/svg/icon-modified.svg'

const Logo = () => {
    return <div className={sLogo.logoContainer}>
        <div className={sLogo.linkHome}>
        <Link to="../">
            <img className={sLogo.img} src={LogoSvg} alt='Logotipo ensine.me' />
            <GreenTitle text='Ensine.me' />
        </Link>
        </div>
    </div>
};

export default Logo