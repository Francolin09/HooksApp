import { UserContext } from '@/09-useContext/context/UserContextProvider'
import { Button } from '@/components/ui/button';
import React, { use } from 'react'
import { Link } from 'react-router'


export const AboutPage = () => {
  //1 lo primero acá será usar el useContext o el use, use más recomendado
  const {isAuthenticated, logout} = use(UserContext); //2 acá necesitaremos el isAuthenticated que la agregamos recien, te puedes fijar si quieres
                                                        //y el logout

  return (
   <div className='flex flex-col items-center justify-center min-h-screen'>
    <h1 className='text-4xl font-bold'>Página sobre mi</h1>
    <hr />
    {/* 3 entonces acá decimos con renderizado condicional si isAuthenticated es true, renderiza ese link de Perfil */}
     <div className='flex flex-col gap-2'>
      {isAuthenticated && (<Link className='hover:text-blue-500 underline text-2xl' to={'/profile'}> Perfil </Link>)}
      

      {/* 4 acá evaluamos si isAuthenticated es true, renderizamos el boton de salir, pero si es false, renderizamos el boton de inicia sesion */}
      {isAuthenticated ? 
       (<Button className ='mt-4' variant={'destructive'} onClick={logout}>Salir</Button>)
       : 
       (<Link className='hover:text-blue-500 underline text-2xl' to={'/login'}> inicia sesión</Link>)
      }
      {/* 5 y eso es todo, funciona fantastico y de maravillas, pero no tanto, porque incluso si tenemos una sesion iniciada y queremos ir al login
      podemos hacerlo y eso no se deberia ya que estamos iniciados, para resolver eso aprenderemos algo en la siguiente leccion weno? fin */}
      
     </div>
   </div>
  )

}
