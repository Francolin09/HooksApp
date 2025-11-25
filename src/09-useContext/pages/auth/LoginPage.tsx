import { UserContext } from '@/09-useContext/context/UserContextProvider'
import { Button } from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { toast } from 'sonner'

export const LoginPage = () => {
  //3 recordemos que nos creamos nuestro userContext con varias propiedades, una de esas era el login que es la que usaremos acá
  const {login} = useContext(UserContext) //usamos el hook useContext
  //3.5si se te olvido recordemos que en el provider definimos el login con el valor de handlelogin el cual era una funcion que usaba un find para 
  //encontrar por id, eso es todo.
  
  //2 acá en el login necesitamos pos logearnos, osea validar asi que necesitaremos un estado para setear el userId
  const [userId, setUserId] = useState('')

  const navigation = useNavigate(); //8 este navigate es el que usaremos para la navegacion dentro de nuestro router y manteniendo el contexto.

  //4 ahora nos crearemos la funcion que ejecutaremos al hacer submit del form 
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { //5 recibimod el event porque claro, viene de un HTMLElement
    event.preventDefault(); 
    const result = login(+userId) //6 el resultado será el estado de userId pasado por la funcion login, y esta nos devuelve true o false 
    console.log(userId)
    console.log(result)

    if(!result){
      toast.error("Usuario no encontrado")
      return;
    }


    navigation('/profile');//9 cuando todo salga bien, enviaremos a la pagina de perfil, que ahora no tiene nada pero vayamos y la completamos 
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
     <h1 className='text-4xl font-bold'>Login</h1>
     <hr />

    {/*7 Entonces acá en el input asignamos el value como el userId y en el onchange tenemos nuestro evento como argumento y nos ejecutará el
    setUserId con el valor del value en el input es decir el userId. en terminos simples asignará al userId el valor que ingresemos en el input  */}
     <form onSubmit={handleSubmit}>
       <Input type='number' placeholder='ID del usuario' value={userId} onChange={(event) =>setUserId(event.target.value)}/>
       <Button type='submit'> Login</Button>
     </form>
      <div className='flex flex-col gap-2'>
    
       <Link className='hover:text-blue-500 underline text-2xl' to={'/'}>
        <Button className='cursor-pointer' variant= "ghost">Volver a la página principal</Button>
       </Link>
      </div>
    </div>
   )

}
