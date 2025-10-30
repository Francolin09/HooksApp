//1 lo que queremos hacer acá es aplicar un efecto despues del cambio de estado, en este caso un contador que retroceda
import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow:'bg-yellow-500 animate-pulse',
    green:'bg-green-500 animate-pulse'
}

type TrafficLightColor = 'red'|'green'|'yellow'



export const TrafficLightWithUseEffect = () => {

    const [light, setLight] =useState<TrafficLightColor>('red'); 
    //2 lo primero será obtener un nuevo estado para el valor de la cuenta regresiva
    const [countdown, setcountdown] = useState(5);

    //3 luego creamos el useEffect, recuerda que este recibe una funcion callback donde establecimos todo.
    useEffect(() => {

      if (countdown === 0) return; //validacion pequeña

      const interval = setInterval(() => { //5 definimos el setInterval que ejecuta una funcion de forma repetida cada cierta cantidad de tiempo
        setcountdown(prev => prev-1)
      },1000);

      return () => { //6 la funcion de retorno es muy importante y en ese caso aplicamos el clearInterval para detener la cuenta en cada intervalo.
        console.log('cleanUp')
        clearInterval(interval) //7 lo importante de terminar la instancia en cada intervalo radica en que de no hacerlo, todas las "instancias" de 
                               //decremento afectarán a la misma variable countdown, entonces ya no decremenara -1 sino menos muchosssss.
      }
    },[countdown]) //4 lo siguiente a pensar es definir a que variable estará atengo el useEffect, en este caso countdown


   
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
        <div className="flex flex-col items-center space-y-8">

          <h1 className="text-white text-xl font-thin">Semaforo con use effect</h1>
          <h2 className="text-white text-xl"> Countdown {countdown}</h2>
       
          <div className={`w-32 h-32 ${light === 'red' ? colors[light]: 'bg-gray-500'} rounded-full`}></div>
          <div className={`w-32 h-32 ${light === 'yellow' ? colors[light]: 'bg-gray-500'} rounded-full`}></div>
          <div className={`w-32 h-32 ${light === 'green' ? colors[light]: 'bg-gray-500'} rounded-full`}></div>
  
   
         
        </div>
      </div>
    );
  };