import Home from './pages/Home';
import Cadastro from './pages/cadastro'
import CadastroAluno from 'pages/cadastro/alunocad/'
import CadastroProfessor from 'pages/cadastro/professorcad'
import Login from 'pages/login';
import DashOne from 'pages/dashboards/dashboardOne/DashboardOne';

import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route>
              <Route path="/" exact element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/cadastro/alunocad" element={<CadastroAluno />} />
              <Route path="/cadastro/professorcad" element={<CadastroProfessor />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboardOne" element={<DashOne />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default App;