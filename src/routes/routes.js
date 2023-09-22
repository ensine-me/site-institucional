import React from "react";
import Login from 'pages/login/Login';
import DashOne from "pages/dashboards/dashboardOne/DashboardOne";
import Home from "pages/Home/Home";
import Cadastro from "pages/Cadastro";
import CadastroAluno from "pages/alunocad"
import CadastroProfessor from "pages/professorcad"
import ProtectedRoutes from "routes/protectedRoutes";

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
                <Route path="/dashboardOne" element={
                    <ProtectedRoutes>
                        <DashOne /> 
                    </ProtectedRoutes>
                } />
            </Routes>
        </Router>
    );
}

export default Routering;