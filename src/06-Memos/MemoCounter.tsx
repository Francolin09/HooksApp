import { useCounter } from "@/hooks/useCounter"
import { useMemo } from "react"
const funcionPesada = (iterationNumber: number) => {
    console.time("Cosas_Pesadas_Sucediendo")

    for (let index = 0; index < iterationNumber; index++) {
       console.log("iteeeerando")
        
    }
    console.timeEnd("Cosas_Pesadas_Sucediendo")

    return `${iterationNumber} iteraciones realizadas`
}

export const MemoCounter = () => {
    const {contador,increment } = useCounter(70);
    const {contador: contador2 ,increment: increment2 } = useCounter(70);

    //1 Ahora para solucionar el tema de que esta cosa se ejecute siempre siempre usaremos el hook useMemo
    //2 el useMemo recibe un callback el cual ejecuta la funcion que queremos memorizar y debemos pasarle una depéndecia para
    //que sepa en que momento debe volver a renderizar ese valor. La diferencia con el useCallback es que ese memoriza la funcion
    //y este memoriza el valor de retorno de la funcion 
    const valorPesadito = useMemo(()=> funcionPesada(contador),
    [contador])
   


    //3 y ahora tú te preguntas y esto para que chucha. y muy simple, imagina tenemos dos contadores, al momento de aumentar uno, se
    //ejecutaria la funcion pesada dos veces, DOSSS y si tuvieramos tres pior aun. 

  return (
    <div className='bg-gradient flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>{valorPesadito}</h1>
        <hr />

        <h4>counter:{contador}</h4>
        {/* 4 entonces agregaremos otro contador junto con otro botoncito */}
        <h4>counter 2 :{contador2} </h4>

        <button onClick={increment} className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer">+1</button>
        <button onClick={increment2}className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer">Contador2 +1</button>

        {/* 5 entonces ahora probemos, poniendo el useMemo y sacandolo
        Si dejamos el useMemo nos damos cuenta que la funcionpesada solo se ejecuta cuando aumentamos el contador,
         pero al aumentar el contador2 se incrementa el valor pero no se ejecuta la funcion 
         
         Si quitamos el useMemo nos daremos cuenta que cuando apretamos cualquiera de los dos botones, la funcionPesada se ejecuta igual,
         siempre, una duda para que reflexiones, es en que se diferencia en este punto el memorizar la funcion con el useCallback
         y memorizar el valor con el useMemo, no lo entendi tan bien, pero cuando leas esto de seguro ya lo entendiste porque eres 
         muy listo*/}
    </div>
  )
}
