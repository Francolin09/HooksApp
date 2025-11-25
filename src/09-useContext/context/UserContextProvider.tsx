
import { createContext, useState, type PropsWithChildren } from "react"
import { users, type User } from "../data/user-mock.data"


type AuthStatus =  'checking' | 'authenticated'|'not-authenticated';
interface UserContextProps {
  //state
  authStatus : AuthStatus;
  user: User | null;

  //methods
  login: (userId: number) => boolean;
  logout: () => void;

}

export const UserContext = createContext( {} as UserContextProps );

export const UserContextProvider = ({children}: PropsWithChildren) => {

  const [authStatus, setAuthStatus] = useState<AuthStatus>('checking')

  const [user, setUser] = useState<User|null>(null);
 //1 acá haremos algunas validaciones y setearemos los estados eso es todo
 //hecho eso vamos al LoginPage a usar el contexto y modificar cosas 
  const handleLogin = (userId:number) => {
    const user = users.find( user => user.id ===  userId);
    if(!user){
      console.log("Usuario no encontrado")
      setUser(null);
      setAuthStatus('not-authenticated');
      return false;
    }
    console.log({userId});
    setUser(user);
    setAuthStatus('authenticated');
    return true;
  }

  const handleLogout = () => {
    console.log('logoutttt')
    setUser(null);
    setAuthStatus('not-authenticated');
  }

  return (

    <UserContext value={{
      authStatus:authStatus,
      user:user,
      login:handleLogin,
      logout:handleLogout
    }}>
      {children}
    </UserContext>

    
  )
}
