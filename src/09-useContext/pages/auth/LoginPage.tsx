import { UserContext } from '@/09-useContext/context/UserContextProvider'
import { Button } from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { toast } from 'sonner'

export const LoginPage = () => {

  const {login} = useContext(UserContext) 


  const [userId, setUserId] = useState('')

  const navigation = useNavigate(); 


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    const result = login(+userId)
    console.log(userId)
    console.log(result)

    if(!result){
      toast.error("Usuario no encontrado")
      return;
    }


    navigation('/profile');
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
     <h1 className='text-4xl font-bold'>Login</h1>
     <hr />

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
