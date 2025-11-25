import { UserContext } from '@/09-useContext/context/UserContextProvider'
import { Button } from '@/components/ui/button'
import { use, useContext } from 'react'


export const ProfilePage = () => {

  const {user,logout} = use(UserContext) 

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-4xl'> Perfil de usuario</h1>
      <hr />
      <pre className='my-4'>{JSON.stringify({user},null,2)}</pre>

      <Button variant={"destructive"} onClick={logout}>Salir</Button>
    </div>
  )
 
}
