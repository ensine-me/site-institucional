import Lottie from 'lottie-react';
import animationData from './lotties/lottieAlunoOption.json'

import Home from './pages/Home';
import Cadastro from './pages/cadastro'
import CadastroAluno from 'pages/cadastro/alunocad/'
import Login from 'pages/login';
import DashOne from 'pages/dashboards/dashboardOne/DashboardOne';

import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const App = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
    </div>,
    <BrowserRouter>
        <Routes>
            <Route>
              <Route path="/" exact element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/cadastro/alunocad" element={<CadastroAluno />}/>
              <Route path="/login" element={<Login />} />
              <Route path="/dashboardOne" element={<DashOne />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default App;