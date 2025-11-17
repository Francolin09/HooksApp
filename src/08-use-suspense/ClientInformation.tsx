//1 empezamos creando un componente de mierda, la idea es la informacion que mostremos no sea estática sino dinámica
//para eso vamos al get-User.action a simulaaar como que hacemos una peticion

import { useEffect } from "react"
import { getUserAction } from "./api/get-user.action"

export const ClientInformation = ({id}: {id:number}) => {

    //5 Ahora piensa como le hacemos para ocupar esa info que viene del get-user??
    //propongamos opciones 
    //! 6 lo que hemos venido haciendo sería algo asi, pero esta malisimo
    // useEffect(() => {
    //     const user = getUserAction(id); //pero esto necesitaria un await, y no podemos usar await en el useEffect NUNCA!!!
    // },[])

    //7 entonces lo correcto seria hacer esto
    useEffect(()=> {
        getUserAction(id).then(user => console.log(user))
    },[id])

    //8 pero si queremos asignar nuestra info al componente se debe actualizar el estado por lo que deberiamos tener un setState
    //y claro si estuvieramos en next podriamos usar server components y pasarnos todo por la raja pero acá no se puede asi que en el siguiente
    //veremos como hacerle 

  return (
    <div className="bg-gradient flex flex-col gap-4">
        <h2 className="text-4xl font-thin text-white">Francolin -#123</h2>
        <p className="text-white text-2xl">Santiago, Chile</p>
        <p className="text-white text-xl">un rol de usuario</p>
    </div>
  )
}
