import { useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { Mysubtitle } from "./ui/MySubtitle"


export const MemoHook = () => {
  const [title, setTitle] = useState("Super titulo especial")
  const [subtitle, setSubtitle] = useState("Super Subtitulo especial")
  return (
    <div className="bg-gradient flex flex-col gap-4">
        <h1 className="text-2xl font-thin text-white">MemoAPPP</h1>

        <MyTitle title={title}/>
        <Mysubtitle subtitle={subtitle}/>

        <button onClick={() => setTitle('Heola')} className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">Cambiar titulo</button>
        <button onClick={() => setSubtitle('papasnatas')} className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">Cambiar subtitulo</button>
    </div>
  )
}
