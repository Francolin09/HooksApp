
//1 ya, que es lo que queremos mostrar acá
//a veces hay acciones demasiado simples que al cambiar no queremos que nuestro componente vuelva a renderizar, porque no es necesario

import { useRef } from "react"

//y justo ese es el caso de un cambio de foco 
export const FocusScreen = () => {
    //2 asi que primero nos creamos una variable de useRef. como sabemos que la utilizaremos en el input podemos tiparlo como inputelement
    const inputRef =useRef<HTMLInputElement>(null);

    const handleClick = () => {
        console.log(inputRef.current?.value);
        inputRef.current?.select();
    }
  return (
    <div className="bg-gradient flex flex-col gap-4">
        <h1 className="text-2xl font-thin text-white">Focus Screen</h1>
        {/*3 Este atributo ref en react le dice cuando montes este elemento en el dom(el input) guarda su referencia en inputRef */}
        <input type="text" className="bg-white text-black px-4 py-2 rounded-md" autoFocus ref={inputRef} />
        
        {/*4 Finalmente en el boton le pasamos la funcion que creamos que lo unico que hace es tomar el input y hacerle un select al contenido */}
        {/* Lo grandioso de esto es que no se vuelve a renderizar. fin  */}
        <button
        className="bg-blue-800 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={handleClick}
        >
            Set Focus
        </button>
    </div>
  )
}
