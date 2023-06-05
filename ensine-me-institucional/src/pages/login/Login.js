import { useState, useEffect } from 'react';
import { Link } from '../../../node_modules/react-router-dom/dist/index';
import styles from './style/Login.module.css'
import googleLogo from 'assets/img/icons/googleLogo.png'
import { validarEmail, validarSenha } from 'authProvider/utils/validadores';

import Logo from 'components/atoms/logo/logo';
import apiUsuarios from 'authProvider/urlUsuarios';

<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>


const Login = () => {

    const [loading, setLoading] = useState()
    const [form, setForm] = useState({});

    const HandleSubmit = async (event) => {
        event.preventDefault();

        const usuario = {
            email: form.email,
            senha: form.senha
        }
        console.log(usuario)

        try {
            useEffect(() => {
                 apiUsuarios
                    .post(`/login`,usuario)
                    .then((response) => {
                        console.log("Dento: ", usuario)
                        console.log(response.data)
                        localStorage.setItem('email', response.data.email)
                        localStorage.setItem('senha', response.data.senha)
                        localStorage.setItem('email', response.data.token)
                        console.log(localStorage.getItem('email'))
                    })
                    .catch((erro) => {
                        console.log(erro);
                    });
            }, []);


            setLoading(false)
            alert("deu certo")
            setLoading(true)
        } catch (error) {
            alert('error')
        }
    }

    const handleChange = (event) => {

        console.log("digitando ", event.target.name, event.target.value)
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const validarInput = () => {
        return validarEmail(form.email) && validarSenha(form.senha)
    }

    //alert("form valid ? ", validarInput())


    return (
        <>
            <div className={styles.page}>
                <div className={styles.card}>
                    <div className={styles.menuLogoContainer}>
                        <Logo />
                    </div>
                    <div className={styles.formulario}>
                        <div className={styles.titleLabel}>
                            Email
                        </div>
                        <input className={styles.input} placeholder='email@email.com' type='email' name="email" id="iptEmail" onChange={handleChange} />
                        <div className={styles.titleLabel1}>
                            Senha
                        </div>
                        <input className={styles.input} placeholder='*******' type='password' name="senha" id="iptSenha" onChange={handleChange} />
                    </div>
                    <div className={styles.buttons} >
                        <button className={styles.button} onClick={HandleSubmit} disabled={loading === true || !validarInput()}>
                            Login
                        </button>
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