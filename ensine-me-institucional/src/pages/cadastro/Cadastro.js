import { React } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../components/atoms/logo/logo.jsx'

import { Player } from '@lottiefiles/react-lottie-player';

import sCadastro from "./style/cadastro.module.css"

const Cadastro = () => {
    return (
        <>
            <div className={sCadastro.page}>
                <div className={sCadastro.card}>
                    <div className={sCadastro.menuLogoContainer}>
                        <Logo/>
                    </div>
                    <div className={sCadastro.options}>
                        <Link to="/cadastro/professorcad">
                            <div className={[sCadastro.option, sCadastro.optionProfessor].join(' ')}>
                                <p>
                                    Quero ser professor
                                </p>
                                <Player
                                hover
                                loop
                                src="https://assets4.lottiefiles.com/packages/lf20_7htpyk2w.json"
                                style={{ height: '250px', width: '250px' }}
                                >
                                </Player>
                            </div>
                        </Link>
                        <Link to="/cadastro/alunocad">
                            <div className={[sCadastro.option, sCadastro.optionAluno].join(' ')}>
                                <p>
                                    Quero ser aluno
                                </p>
                                <Player
                                hover
                                loop
                                src="https://assets10.lottiefiles.com/private_files/lf30_htijkvxe.json"
                                style={{ height: '300px', width: '300px' }}
                                >
                                </Player>
                            </div>
                        </Link>
                    </div>
                    <div className={sCadastro.formulario}>
                        <p>
                            Preencha com seus dados
                        </p>
                    </div>
                    <div className="loginGoogle">
                        <div className={sCadastro.googleButton}>
                            botão do google aqui
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cadastro