
import { createContext, useEffect, useState, type PropsWithChildren } from "react"
import { users, type User } from "../data/user-mock.data"
import { useNavigate } from "react-router";


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
    //1 lo primero que podemos hacer acá es guardar el valor del id en el localStorage cuando el estado pase a ser authenticated
    localStorage.setItem('userId',userId.toString()); //acuerda que localStorage solo guarda strings
    return true;
  }

  const handleLogout = () => {
    console.log('logoutttt')
    setUser(null);
    setAuthStatus('not-authenticated');
    //7 primero debemos remover la informacion guardada en el localStorage
    localStorage.removeItem('userId');
    //8 ahora nos vamos al ProfilePage
    
  }
 //2 ahora pensemos, cuando se recarga la pagina necesitamos que se siga obteniendo el id y mostrando la informacion correspondiente
 //entonces usaremos un useEffect sin dependencias asi se ejecutarpa cuando se cargue la pagina. 
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId'); //3 obtenemos el dato guardado anteriormente en el localStorage
    if(storedUserId){ //4 validamos que lo obtenga correctamente
      handleLogin(+storedUserId); //5 si lo obtuvo, ejecutamos la funcion handleLogin automaticamente para setear el usuario
                                  // y su estado y que se muestre en pantalla
                                  //6 ahora hagamos el boton de salir para eliminar la info
    }
  },[])

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
