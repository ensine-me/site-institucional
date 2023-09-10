import React from "react";
import UrlUsuarios from "authProvider/urlUsuarios";
import Routering from "./routes";

const apiUsuarios = new UrlUsuarios();

const ProtectedRoutes = ({children}) => {
    const usuarioAutenticado = apiUsuarios.usuarioAutenticado()
    return(
        usuarioAutenticado ? children : <Routering />
    )  
}

export default ProtectedRoutes;