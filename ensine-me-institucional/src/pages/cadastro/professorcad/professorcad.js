import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import sUsuariocad from '../style/usuariocad.module.css';
import sCadastro from "../style/cadastro.module.css"
import {navLink , useNavigate} from 'react-router-dom'
import UrlUsuarios from 'authProvider/urlUsuarios';

import Logo from 'components/atoms/logo/logo';

import googleLogo from 'assets/img/icons/googleLogo.png'

const apiUsuarios = new UrlUsuarios();

const Professorcad = () => {

    const [loading, setLoading] = useState()
    const [form, setForm] = useState([]);
    const navigate = new useNavigate()

    

    const HandleSubmit = async (event) => {
        event.preventDefault();

        const professor ={
            nome: form.nome,
            email: form.email,
            senha: form.senha,
            materias: []
        }

        try {
            setLoading(false)
            const response = await apiUsuarios.cadastro(professor)

            if (response === true) {
                alert("usuario cadastrado com sucesso")
                navigate("/login")
                //ir para dash
            }
            setLoading(true)
        } catch (error) {
            alert(error)
        }
    }

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }


    return (
        <>
            <div className={sUsuariocad.page}>
                <div className={sUsuariocad.card}>
                    <div className={[sCadastro.menuLogoContainer, sUsuariocad.me].join(' ')}>
                        <Logo/>
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
                        <input className={sUsuariocad.input} placeholder='Jurandir Macedo' type='text' name="nome" onChange={handleChange}></input>
                        <div className={sUsuariocad.titleLabel1}>
                            <div className={sUsuariocad.inputNames}>
                                Email
                            </div>
                        </div>
                        <input className={sUsuariocad.input} placeholder='email@email.com' type='text' name="email" onChange={handleChange}></input>
                        <div className={sUsuariocad.titleLabel1}>
                            <div className={sUsuariocad.inputNames}>
                                Senha
                            </div>
                        </div>
                        <input className={sUsuariocad.input} placeholder='*******' type='text' name="senha" onChange={handleChange}></input>
                    </div>
                    <div className={sUsuariocad.buttons}>
                        <div className={sUsuariocad.button} onClick={HandleSubmit} disabled={loading === true}>
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
