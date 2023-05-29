import Home from './pages/Home';
import Cadastro from './pages/cadastro'
import Login from 'pages/login/Login';
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
              <Route path="/login" element={<Login />} />
              <Route path="/dashboardOne" element={<DashOne />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default App;