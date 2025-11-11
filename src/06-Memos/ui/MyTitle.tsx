import React from "react";

interface Props {
    title:string;
}

//1 acá simplemente poniendo todo nuestro componente dentro del memo este solo se actualizará cuando la prop title se vea afectada.fin
export const MyTitle = React.memo(({title}: Props) => {
    console.log("re render del titulo")
  return (
    <h1 className="text-6xl font-bold">{title}</h1>
  )
})
