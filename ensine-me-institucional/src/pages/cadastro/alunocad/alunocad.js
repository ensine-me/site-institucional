import { React } from 'react';
import { Link } from 'react-router-dom';

import sAlunocad from './style/alunocad.module.css';
import sCadastro from "../style/cadastro.module.css"
import logoSvg from "assets/img/logo/images/svg/icon-modified.svg"
import sMenu from "generalStyle/menu.module.css"

import googleLogo from 'assets/img/icons/googleLogo.png'

const Alunocad = () => {
    return (
        <>
            <div className={sAlunocad.page}>
                <div className={sAlunocad.card}>
                    <div className={[sCadastro.menuLogoContainer, sAlunocad.me].join(' ')}>
                        <img src={logoSvg} alt="logotipo" className={[sMenu.menuLogo, sCadastro.menuLogo].join(' ')} />
                        <Link to="../">
                            <h2>ensine.me</h2>
                        </Link>
                    </div>
                    <div className={sAlunocad.formulario}>
                        <div className={sAlunocad.titleLabel}>
                            Email
                        </div>
                        <input className={sAlunocad.input} placeholder='email@email.com' type='text'>
                        </input>
                        <div className={sAlunocad.titleLabel1}>
                            Senha
                        </div>
                        <input className={sAlunocad.input} placeholder='*******' type='text'>
                        </input>
                    </div>
                    <div className={sAlunocad.buttons}>
                        <div className={sAlunocad.button} onClick="">
                            Cadastrar
                        </div>
                        <div className={sAlunocad.googleButtonContainer} onClick="">
                            <div className={sAlunocad.googleButton}>
                                <img src={googleLogo}></img>
                                Cadastrar com o google
                            </div>
                        </div>
                    </div>
                    <div className={sAlunocad.titleLabel2}>
                        Ainda não tem conta?
                    </div>
                    <div className={sAlunocad.titleLabel3}>
                        Cadastre-se
                    </div>
                </div>
            </div>
        </>
    )
}

export default Alunocad