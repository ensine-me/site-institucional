import { React } from 'react';
import { Link } from 'react-router-dom';
import logoSvg from "assets/img/logo/images/svg/icon-modified.svg"
import sMenu from "generalStyle/menu.module.css"

import Lottie from 'lottie-react';
import alunoOption from '../../lotties/lottieAlunoOption.json';
import professorOption from '../../lotties/lottieProfessorOption.json';

import sCadastro from "./style/cadastro.module.css"

<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>


const Cadastro = () => {
    return (
        <>
            <div className={sCadastro.page}>
                <div className={sCadastro.card}>
                    <div className={[sMenu.menuLogoContainer, sCadastro.menuLogoContainer].join(' ')}>
                            <img src={logoSvg} alt="logotipo" className={sMenu.menuLogo} />
                        <a href='./'>
                            <Link to="../">
                                <h2>ensine.me</h2>
                            </Link>
                        </a>
                    </div>
                    <div className={sCadastro.options}>
                        <div className={[sCadastro.option, sCadastro.optionProfessor].join(' ')}>
                            <p>
                                Quero ser professor
                            </p>
                            <Lottie animationData={professorOption} />
                        </div>
                        <div className={[sCadastro.option, sCadastro.optionAluno].join(' ')}>
                            <p>
                                Quero ser aluno
                            </p>
                            <Lottie animationData={alunoOption} />
                        </div>
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