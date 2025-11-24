//5 acá comenzaremos con nuestro contexto, sabemos que el contexto nos servirá para compartir informacion entre componentes sin necesidad
//de pasar por cada uno. La estructura y uso del contexto es, crear el contexto, crear un provider y consumir el contexto


import { createContext, useState, type PropsWithChildren } from "react"
import type { User } from "../data/user-mock.data"

//6 primero crearemos una interface que tendrá el tipo de las props (children) que pasaremos 
//7 tambien crearemos el archivo user-mock.data.ts con una data mockeada para usar acá 
type AuthStatus =  'checking' | 'authenticated'|'not-authenticated';
interface UserContextProps {
  //state
  authStatus : AuthStatus;
  user: User | null;

  //methods
  login: (userId: number) => boolean;
  logout: () => void;

}
//8 creamos el contexto
export const UserContext = createContext( {} as UserContextProps );

//9acá crearemos el provider que es quien entrega el valor global
export const UserContextProvider = ({children}: PropsWithChildren) => {
  //10 acá crearemos los estados que necesitamos manejar
  const [authStatus, setAuthStatus] = useState<AuthStatus>('checking')

  const [user, setUser] = useState<User|null>(null);

  //11 ahora los metodos que necesitamos segun la interface 
  const handleLogin = (userId:number) => {
    console.log({userId});
    return true;
  }

  const handleLogout = () => {
    console.log('logoutttt')
  }

  return (
    //!en las versiones anteriores era comun ver el <UserContext.provider> </UserContext.provider> pero ya no es necesario
    <UserContext value={{
      authStatus:authStatus,
      user:user,
      login:handleLogin,
      logout:handleLogout
    }}>
      {children}
    </UserContext>
    //12 entonces ahora retornamos este userContext y podemos ir al componente principal o de mas alto orden a utilizarlo
    //asi que vamos al professionalApp
    
  )
}
