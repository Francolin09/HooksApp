
import { use, useEffect, type Usable } from "react"
import { getUserAction, type User } from "./api/get-user.action"

//const userPromise = getUserAction(1) //1 en un principio pensamos que esta era la solucion pero estos deja poniendole el id manual y no po
//asi que nos creamos una interface con un metodo Usable<User> el tipo user viene del get.user.action
interface Props {
    getUser: Usable<User>
}
export const ClientInformation = ({getUser}: Props) => { //desestructuramos acá

 const user = use(getUser); //y acá usamos el use pasandole el getUser, porque el use necesita un tipo Usable
 //entonces ahora vamos al main y allá llamamos al metodo del get-userAction y se lo pasamos como prop al componente este

  return (
    <div className="bg-gradient flex flex-col gap-4">
        <h2 className="text-4xl font-thin text-white">{user.name}- #{user.id}</h2>
        <p className="text-white text-2xl">{user.location}</p>
        <p className="text-white text-xl">{user.role}</p>
    </div>
  )
}
