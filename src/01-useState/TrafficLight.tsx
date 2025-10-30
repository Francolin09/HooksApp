//1 creamos este componente que son puras clases de tailwind que hacen un semaforo con unos botones

import { useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow:'bg-yellow-500 animate-pulse',
    green:'bg-green-500 animate-pulse'
}

export const TrafficLight = () => {

    //2 ahora bien, recordando siempre que queremos que algo cambie su valor y verlo reflejado necesitaremos algo con lo que
    //identificar su estado, para eso usamos el useState

    const [light, setLight] =useState('red'); //3 entonces lo primero creamos el useState con valor default de red

    //3 luego lo que necesitamos es poder manejar las clases un poco mas dinamicamente, para eso primero nos crearemos un objeto
    //que tendrá para cada color la clase de tailwind correspondiente.

    //5 finalmente creamos una funcion para manejar el color con el setLight y la pasamos en cada uno de los botones con el valor correspondiente
    const handleChangeColor = (color: string) => {
        setLight((prev) => {
            console.log(prev)
            return color;
        })
    }
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
        <div className="flex flex-col items-center space-y-8">
            {/* 4 Hecho eso ahora podemos decir que si light es red, que es cierto porque el valor por defecto, entonces nos retorne y agregue
            la clase correspondiente al red, y de no ser, entonces que sea gris. */}
          <div className={`w-32 h-32 ${light === 'red' ? colors[light]: 'bg-gray-500'} rounded-full`}></div>
          <div className={`w-32 h-32 ${light === 'yellow' ? colors[light]: 'bg-gray-500'} rounded-full`}></div>
          <div className={`w-32 h-32 ${light === 'green' ? colors[light]: 'bg-gray-500'} rounded-full`}></div>
  
          {/* Botón para cambiar el estado de la luz */}
          <div className="flex gap-2">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={ () => handleChangeColor('red')}>
              Rojo
            </button>
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer"onClick={ () => handleChangeColor('yellow')}>
              Amarillo
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={ () => handleChangeColor('green')}>
              Verde
            </button>
          </div>
        </div>
      </div>
    );
  };