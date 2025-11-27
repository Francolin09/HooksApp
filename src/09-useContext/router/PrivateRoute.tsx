//1 este debe ser un componente asi que lo hacemos 

import { use, type JSX } from "react"
import { UserContext } from "../context/UserContextProvider"
import { Navigate, } from "react-router";

//2 definiremos una interface que tendrá un elemento de tipo jsx.element por que? porque si nos vamos al app.router nos fijamos que 
//el element definidos en las rutas es de tipo jsx.element
interface Props{
    element: JSX.Element,
}

export const PrivateRoute = ({element}: Props) => {
    //3 ahora como estamos en functional componente no tenemos problemas para usar el contexto asi que vamosle 
    const {authStatus} = use(UserContext); //4 obtenemos el authstatus

    if(authStatus==='checking'){  //5 y validamos si está en checking mostramos cargando
        return <div>cargando...</div>;
    }

    if(authStatus==='authenticated'){ //6 si esta en authenticated retornamos el elemento recibido
        return element;
    }

  return <Navigate to="/login" replace/> //7 sino cumple con las dos anteriores navegamos al login y el replace para no dejar entrada en el historial
  
  //8 ahora vamos a usar esta ruta privada al app.router
}
