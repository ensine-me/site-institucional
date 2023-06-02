import { Link } from '../../../node_modules/react-router-dom/dist/index';
import styles from './style/Login.module.css'
import googleLogo from 'assets/img/icons/googleLogo.png'

import Logo from 'components/atoms/logo/logo';

<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>


const Login = () => {
    return (
        <>
            <div className={styles.page}>
                <div className={styles.card}>
                    <div className={styles.menuLogoContainer}>
                        <Logo/>
                    </div>
                    <div className={styles.formulario}>
                        <div className={styles.titleLabel}>
                            Email
                        </div>
                        <input className={styles.input} placeholder='email@email.com' type='text'>
                        </input>
                        <div className={styles.titleLabel1}>
                            Senha
                        </div>
                        <input className={styles.input} placeholder='*******' type='text'>
                        </input>
                    </div>
                    <div className={styles.buttons}>
                        <Link to="../dashboardOne">
                            <div className={styles.button}>
                                Login
                            </div>
                        </Link>
                        <Link to="../dashboardOne">
                            <div className={styles.googleButtonContainer}>
                                <div className={styles.googleButton}>
                                    <img src={googleLogo}></img>
                                    Login com google
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.titleLabel2}>
                        Ainda não tem conta?
                    </div>
                    <Link to="../cadastro">
                        <div className={styles.titleLabel3}>
                            Cadastre-se
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Login;