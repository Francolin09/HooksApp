import React from "react";

interface Props {
    title:string;
    
    
}


export const MyTitle = React.memo(({title}: Props) => {
    console.log("re render del titulo")
  return (
    <h1 className="text-6xl font-bold">{title}</h1>
  )
})
