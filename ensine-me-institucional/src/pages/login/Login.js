import styles from './style/Login.module.css'
<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>


const Login = () => {
    return (
        <>
            <div className={styles.page}>
                <div className={styles.card}>
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
                    <div className={styles.google}>
                        <div className={styles.button} onClick="">
                            Login
                        </div>
                        <div className={styles.button} onClick="">
                            Login com o google
                        </div>
                    </div>
                    <div className={styles.titleLabel2}>
                        Ainda não tem conta?
                    </div>
                    <div className={styles.titleLabel3}>
                        Cadastre-se 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;