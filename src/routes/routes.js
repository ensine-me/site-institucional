import React from "react";
import Login from 'pages/Login';
import Home from "pages/PaginaInicial";
import Cadastro from "pages/EscolhaCadastro";
import CadastroAluno from "pages/CadastroAluno"
import CadastroProfessor from "pages/CadastroProfessor"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/" exact element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/cadastro/alunocad" element={<CadastroAluno />} />
                <Route path="/cadastro/professorcad" element={<CadastroProfessor />} />
            </Routes>
        </Router>
    );
}

export default Routering;