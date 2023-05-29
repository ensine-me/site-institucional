import { React } from 'react';
import { Link } from 'react-router-dom';
import logoSvg from "assets/img/logo/images/svg/icon-modified.svg"
import sMenu from "generalStyle/menu.module.css"

import { Player, Controls } from '@lottiefiles/react-lottie-player';
import alunoOption from '../../lotties/lottieAlunoOption.json';
import professorOption from '../../lotties/lottieProfessorOption.json';

import sCadastro from "./style/cadastro.module.css"

const Cadastro = () => {
    return (
        <>
            <div className={sCadastro.page}>
                <div className={sCadastro.card}>
                    <div className={sCadastro.menuLogoContainer}>
                        <img src={logoSvg} alt="logotipo" className={[sMenu.menuLogo, sCadastro.menuLogo].join(' ')} />
                        <Link to="../">
                            <h2>Ensine.me</h2>
                        </Link>
                    </div>
                    <div className={sCadastro.options}>
                        <Link to="./CadastroProfessor">
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