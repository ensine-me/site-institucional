import Home from './pages/Home';
import Cadastro from './pages/cadastro'

import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route>
              <Route path="/" exact element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default App;