import { useCallback, useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { Mysubtitle } from "./ui/MySubtitle"


export const MemoHook = () => {
  const [title, setTitle] = useState("Super titulo especial")
  const [subtitle, setSubtitle] = useState("Super Subtitulo especial")

//1 entonces, continuando con la cosa ahora debemos memorizar la funcion para que no nos pase el re renderizado
//y para eso existe el useCallback
//2 pero ojo que si dejamos el arreglo de dependencias vacio, siempre queda inmutable pero y si necesitamos mostrar un valor que si cambia?
//por ejemplo queremos mostrar el subtitulo
  const handleMyApiCall = useCallback(() => {
    console.log("Llamando a la apipipi"+ subtitle)
  },[subtitle]); //3 ahi tenemos que pasarle el subtitulo como dependencia para que cuando este cambie si se renderice de nuevo todo.finn
  
  return (
    <div className="bg-gradient flex flex-col gap-4">
        <h1 className="text-2xl font-thin text-white">MemoAPPP</h1>

        <MyTitle title={title}/>
        <Mysubtitle subtitle={subtitle} callMyApi={handleMyApiCall}/>


        <button onClick={() => setTitle('Heola')} className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">Cambiar titulo</button>
        <button onClick={() => setSubtitle('papasnatas')} className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">Cambiar subtitulo</button>
    </div>
  )
}
