import { UserContext } from '@/09-useContext/context/UserContextProvider'
import { Button } from '@/components/ui/button';
import React, { use } from 'react'
import { Link } from 'react-router'


export const AboutPage = () => {

  const {isAuthenticated, logout} = use(UserContext); 

  return (
   <div className='flex flex-col items-center justify-center min-h-screen'>
    <h1 className='text-4xl font-bold'>Página sobre mi</h1>
    <hr />

     <div className='flex flex-col gap-2'>
      {isAuthenticated && (<Link className='hover:text-blue-500 underline text-2xl' to={'/profile'}> Perfil </Link>)}
      

      {isAuthenticated ? 
       (<Button className ='mt-4' variant={'destructive'} onClick={logout}>Salir</Button>)
       : 
       (<Link className='hover:text-blue-500 underline text-2xl' to={'/login'}> inicia sesión</Link>)
      }

     </div>
   </div>
  )

}
