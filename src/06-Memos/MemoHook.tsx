import { useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { Mysubtitle } from "./ui/MySubtitle"


export const MemoHook = () => {
  const [title, setTitle] = useState("Super titulo especial")
  const [subtitle, setSubtitle] = useState("Super Subtitulo especial")

  //5 primero definimos la funcion
  const handleMyApiCall = () => {
    console.log("Llamando a la apipipi")
  }
  return (
    <div className="bg-gradient flex flex-col gap-4">
        <h1 className="text-2xl font-thin text-white">MemoAPPP</h1>

        <MyTitle title={title}/>
        {/* 6 y ahora la pasamos como la prop correspóndiete */}
        <Mysubtitle subtitle={subtitle} callMyApi={handleMyApiCall}/>
        {/* 7 ya, punto importante acá,lo que estamos por ver ya no aplica, porque al parecer react lo solucionó memorizando funciones solito
        pero como antes no era asi, habia que hacer otras cosas, asi que haremos como si fuera la versionb vieja,
        ahi lo que pasaba es que al dar click a cambiar el titulo, volvia a renderizar cada vez y nosotros decimos pero como? si antes los 
        habiamos memorizado que está pasando?
        El problema yace en como js almacena funciones ya que al cambiar el estado de una variable se vuelve a cargar todo y con las funciones
        lo que ocurre es que al volver a ejecutarlas crea un espacio en memoria completamente diferente es por eso que para el compilador
        si existe un cambio y ahora la prop callMyApi cambió, entonces, hay que volver a renderizar, aunque tenga el mismo valor que antes, al existir en otro espacio de memoria 
        es nuevo. dejemoslo hasta ahi y seguimos en el siguiente. fin */}

        <button onClick={() => setTitle('Heola')} className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">Cambiar titulo</button>
        <button onClick={() => setSubtitle('papasnatas')} className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">Cambiar subtitulo</button>
    </div>
  )
}
