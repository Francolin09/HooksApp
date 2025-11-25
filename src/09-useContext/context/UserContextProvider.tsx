
import { createContext, useEffect, useState, type PropsWithChildren } from "react"
import { users, type User } from "../data/user-mock.data"



type AuthStatus =  'checking' | 'authenticated'|'not-authenticated';
interface UserContextProps {
  //state
  authStatus : AuthStatus;
  user: User | null;

  //methods
  login: (userId: number) => boolean;
  logout: () => void;
  isAuthenticated: boolean

}

export const UserContext = createContext( {} as UserContextProps );

export const UserContextProvider = ({children}: PropsWithChildren) => {

  const [authStatus, setAuthStatus] = useState<AuthStatus>('checking')

  const [user, setUser] = useState<User|null>(null);


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

    localStorage.setItem('userId',userId.toString());
    return true;
  }

  const handleLogout = () => {
    console.log('logoutttt')
    setUser(null);
    setAuthStatus('not-authenticated');

    localStorage.removeItem('userId');

    
  }

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId'); 
    if(storedUserId){ 
      handleLogin(+storedUserId);
    }
  },[])

  return (

    <UserContext value={{
      authStatus:authStatus,
      user:user,
      login:handleLogin,
      logout:handleLogout,
      isAuthenticated: authStatus==='authenticated',
    }}>
      {children}
    </UserContext>

    
  )
}
