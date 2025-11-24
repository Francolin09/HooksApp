import React from 'react'
import { Link } from 'react-router'

//1 comenzaremos haciendo el uso de Link, este es como un <a></a> peeero no recarga toda la pagina, más eficiente
export const AboutPage = () => {
  return (
   <div className='flex flex-col items-center justify-center min-h-screen'>
    <h1 className='text-4xl font-bold'>Página sobre mi</h1>
    <hr />
     <div className='flex flex-col gap-2'>
      <Link className='hover:text-blue-500 underline text-2xl' to={'/profile'}> Perfil </Link>
      <Link className='hover:text-blue-500 underline text-2xl' to={'/login'}> inicia sesión</Link>
     </div>
   </div>
  )
  //2ahora vamos a hacer lo mismo al LoginPage 
}
