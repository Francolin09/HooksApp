import React from "react";

interface Props {
    subtitle:string;
    //1 acá simplemente agregaremos una funcion, es decir nuestro componente ahora necesitará que se le pase una funcion como prop
    callMyApi: () => void;
}

//2 entonces ahora la desestructuramos de las props igual que el title
export const Mysubtitle = React.memo(({subtitle,callMyApi}: Props) => {
  console.log("re render del subtitulo")
return (
  <>
  <h6 className="text-2xl font-bold">{subtitle}</h6>
  {/* 3 hacemos que el onclick ejecute la funcion que hasta ahora solo tenemos la definicion */}
  <button className="bg-indigo-500 text-white py-1 px-2 rounded-md cursor-pointer" onClick={callMyApi}>Llamar a funcion</button>
  {/* 4 hecho eso ahora nos vamos a memoHook a agregar esta prop en el uso del componente y tambien a definir la accion que realizara la funcion */}
  </>
)
}
)