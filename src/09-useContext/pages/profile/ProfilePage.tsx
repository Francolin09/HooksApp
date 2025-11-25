import { UserContext } from '@/09-useContext/context/UserContextProvider'
import { Button } from '@/components/ui/button'
import { use, useContext } from 'react'


export const ProfilePage = () => {
  //10 acá tomaremos el user del contexto, era una tarea y lo hiciste muy bien, felicitaciones
  // const {user} = useContext(UserContext) 
  const {user} = use(UserContext) //11 acá podemos usar el useContext o el use, como use es mas nuevo y recomendado para react 19 pos lo usamos 

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-4xl'> Perfil de usuario</h1>
      <hr />
      <pre className='my-4'>{JSON.stringify({user},null,2)}</pre>

      <Button variant={"destructive"}>Salir</Button>
    </div>
  )
 
}
