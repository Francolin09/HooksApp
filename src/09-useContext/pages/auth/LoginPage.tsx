import { Button } from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import { Link } from 'react-router'

export const LoginPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
     <h1 className='text-4xl font-bold'>Login</h1>
     <hr />

     <form>
       <Input type='number' placeholder='ID del usuario'/>
       <Button type='submit'> Login</Button>
     </form>
      <div className='flex flex-col gap-2'>
    
       <Link className='hover:text-blue-500 underline text-2xl' to={'/'}>
        <Button className='cursor-pointer' variant= "ghost">Volver a la página principal</Button>
       </Link>
      </div>
    </div>
   )
   //3 ahora al profilePage
}
