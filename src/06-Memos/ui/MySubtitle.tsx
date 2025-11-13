import React from "react";

interface Props {
    subtitle:string;
    callMyApi: () => void;
}


export const Mysubtitle = React.memo(({subtitle,callMyApi}: Props) => {
  console.log("re render del subtitulo")
return (
  <>
  <h6 className="text-2xl font-bold">{subtitle}</h6>
  <button className="bg-indigo-500 text-white py-1 px-2 rounded-md cursor-pointer" onClick={callMyApi}>Llamar a funcion</button>
  </>
)
}
)