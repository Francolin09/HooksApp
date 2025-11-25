import { UserContext } from '@/09-useContext/context/UserContextProvider'
import { Button } from '@/components/ui/button'
import { use, useContext } from 'react'


export const ProfilePage = () => {
//9 desestructuramos el metodo que necesitaremos y lo usamos abajo
  const {user,logout} = use(UserContext) 
//10 en este punto se te ocurrio hacer una redireccion lo cual esta muy bien, pero más adelante aprenderemos una forma de redireccionar cuando
//no haya un usuario asignado que te parece
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-4xl'> Perfil de usuario</h1>
      <hr />
      <pre className='my-4'>{JSON.stringify({user},null,2)}</pre>

      <Button variant={"destructive"} onClick={logout}>Salir</Button>
    </div>
  )
 
}
