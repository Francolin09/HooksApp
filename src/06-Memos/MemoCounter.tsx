import { useCounter } from "@/hooks/useCounter"
//1 empezaremos creando una funcion que simula hacer muchas cosas y mediremos el tiempo porque si, al final devolvemos la cantidad de iteraciones
const funcionPesada = (iterationNumber: number) => {
    console.time("Cosas_Pesadas_Sucediendo")

    for (let index = 0; index < iterationNumber; index++) {
       console.log("iteeeerando")
        
    }
    console.timeEnd("Cosas_Pesadas_Sucediendo")

    return `${iterationNumber} iteraciones realizadas`
}

export const MemoCounter = () => {
    const {contador,increment } = useCounter(70);//2 despues usamos nuestro hook contador para generar un valor que cambie

    const valorPesadito = funcionPesada(contador); //3 ahora creamos una constante cuyo bvalor será la cantidad de veces que itera nuestra fuincion
    //segun la cantidad que le pasamos al contador, en este caso 70

    //4entonces el problema está en que cada vez que se re renderice, se va ejecutar esta funcion super pesada, imagina con 50000 registros
    //la solucion a esto en el siguiente capitulo. fin


  return (
    <div className='bg-gradient flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>{valorPesadito}</h1>
        <hr />

        <h4>counter:{contador}</h4>
        <h4></h4>

        <button className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer">+1</button>
    </div>
  )
}
