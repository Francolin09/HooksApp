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

    const valorPesadito = useMemo(()=> funcionPesada(contador),
    [contador])


  return (
    <div className='bg-gradient flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>{valorPesadito}</h1>
        <hr />

        <h4>counter:{contador}</h4>
        <h4>counter 2 :{contador2} </h4>

        <button onClick={increment} className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer">+1</button>
        <button onClick={increment2}className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer">Contador2 +1</button>

    </div>
  )
}
