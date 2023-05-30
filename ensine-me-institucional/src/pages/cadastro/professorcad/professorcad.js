import { React } from 'react';
import { Link } from 'react-router-dom';

import sUsuariocad from '../style/usuariocad.module.css';
import sCadastro from "../style/cadastro.module.css"
import logoSvg from "assets/img/logo/images/svg/icon-modified.svg"
import sMenu from "generalStyle/menu.module.css"

import googleLogo from 'assets/img/icons/googleLogo.png'

const Professorcad = () => {
    return (
        <>
            <div className={sUsuariocad.page}>
                <div className={sUsuariocad.card}>
                    <div className={[sCadastro.menuLogoContainer, sUsuariocad.me].join(' ')}>
                        <img src={logoSvg} alt="logotipo" className={[sMenu.menuLogo, sCadastro.menuLogo].join(' ')} />
                        <Link to="../">
                            <h2>Ensine.me</h2>
                        </Link>
                    </div>
                    <div className={sUsuariocad.formulario}>
                        <p>
                            Cadastro de professor
                        </p>
                        <div className={sUsuariocad.titleLabel}>
                            <div className={sUsuariocad.inputNames}>
                                Nome
                            </div>
                        </div>
                        <input className={sUsuariocad.input} placeholder='Jurandir Macedo' type='text'></input>
                        <div className={sUsuariocad.titleLabel1}>
                            <div className={sUsuariocad.inputNames}>
                                Email
                            </div>
                        </div>
                        <input className={sUsuariocad.input} placeholder='email@email.com' type='text'></input>
                        <div className={sUsuariocad.titleLabel1}>
                            <div className={sUsuariocad.inputNames}>
                                Senha
                            </div>
                        </div>
                        <input className={sUsuariocad.input} placeholder='*******' type='text'></input>
                    </div>
                    <div className={sUsuariocad.buttons}>
                        <div className={sUsuariocad.button} onClick="">
                            Cadastrar
                        </div>
                        <div className={sUsuariocad.googleButtonContainer} onClick="">
                            <div className={sUsuariocad.googleButton}>
                                <img src={googleLogo}></img>
                                Cadastrar com o google
                            </div>
                        </div>
                    </div>
                    <p className={sUsuariocad.paragrafo}>
                        <i>Ao clicar em cadastrar você aceita os nossos
                            <a>termos de uso</a> e <a>privacidade</a></i>
                    </p>
                    <div className={sUsuariocad.titleLabel2}>
                        Já tem uma conta?
                    </div>
                    <div className={sUsuariocad.titleLabel3}>
                        <Link to="../login">
                            Faça login
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Professorcad
