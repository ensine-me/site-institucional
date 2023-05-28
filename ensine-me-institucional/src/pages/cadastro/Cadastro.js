import { React } from 'react';
import { Link } from 'react-router-dom';
import logoSvg from "assets/img/logo/images/svg/icon-modified.svg"
import sMenu from "generalStyle/menu.module.css"

import Lottie from 'lottie-react';
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
                        <a href='../'>
                            <Link to="../">
                                <h2>ensine.me</h2>
                            </Link>
                        </a>
                    </div>
                    <div className={sCadastro.options}>
                        <a href='./CadastroProfessor'>
                            <Link to="./CadastroProfessor">
                                <div className={[sCadastro.option, sCadastro.optionProfessor].join(' ')}>
                                    <p>
                                        Quero ser professor
                                    </p>
                                    <Lottie animationData={professorOption} />
                                </div>
                            </Link>
                        </a>
                        <a href='./alunocad'>
                            <Link to="./alunocad">
                                <div className={[sCadastro.option, sCadastro.optionAluno].join(' ')}>
                                    <p>
                                        Quero ser aluno
                                    </p>
                                    <Lottie animationData={alunoOption} />
                                </div>
                            </Link>
                        </a>
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