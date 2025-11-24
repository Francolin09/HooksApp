import { Button } from '@/components/ui/button'
import React from 'react'

export const ProfilePage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-4xl'> Perfil de usuario</h1>
      <hr />
      <pre className='my-4'>{JSON.stringify({},null,2)}</pre>

      <Button variant={"destructive"}>Salir</Button>
    </div>
  )
  //4 ya hecho esto ahora pensemos en nuestras funcionalidades como login, como mostrar el perfil y todo eso. 
  //para que eso funcione debemos tener un flujo de datos del cual estár al tanto para manejar el comportamiento de esas paginas
  //pero como usamos esos datos en componentes que están en la misma jerarquia? exacto con el contexto. entonces vamos y nos creamos context/UserContext.tsx
}
