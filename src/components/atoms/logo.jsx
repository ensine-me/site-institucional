import { Link } from 'react-router-dom';

import sLogo from '../../assets/styles/atoms/logo.module.css'

import Title from './title.jsx'
import LogoSvg from '../../assets/img/logo/svg/icon-modified.svg'

const Logo = () => {
    return <div className={sLogo.logoContainer}>
        <div className={sLogo.linkHome}>
            <Link to="../">
                <img className={sLogo.img} src={LogoSvg} alt='Logotipo ensine.me' />
                <Title text='Ensine.me' />
            </Link>
        </div>
    </div>
};

export default Logo