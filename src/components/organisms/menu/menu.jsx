import UlElementList from "components/molecules/ulElementList/ulElementList";
import Logo from '../../atoms/logo/logo.jsx'

import sMenu from './menu.module.css';
import Button from "components/molecules/button/button.jsx";

import styles from '../../../pages/login/style/Login.module.css'
import googleLogo from 'assets/img/icons/googleLogo.png'

const HandleSubmit = async (event) => {
    window.location.href = "http://localhost:3000"
}

const Menu = () => {
    return (
        <div className={sMenu.menu}>
            <Logo />
            <UlElementList items={[
                { text: 'Sobre', link: '#quem-somos', size: 'large' },
                { text: 'Proposta', link: '#como-funciona', size: 'large' },
                { text: 'Funcionamento', link: '#o-que-oferecemos', size: 'large' },
                { text: 'Depoimentos', link: '#depoimentos', size: 'large' }]}
            />
            <div className={sMenu.buttons}>
                <div className={styles.googleButtonContainer}>
                    <div className={styles.googleButton} onClick={HandleSubmit}>
                        <img src={googleLogo} />
                        Login com google
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Menu;