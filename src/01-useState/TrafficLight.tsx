//1 acá todo bien pero tenemos un problemita, y es que a pesar de tener tres colores, podriamos poner cualquier cosa y ts no se quejaria 
//entonces para evitar eso crearemos unos tipos

import { useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow:'bg-yellow-500 animate-pulse',
    green:'bg-green-500 animate-pulse'
}

//2 creamos los tipos en indicamos sus posibles valores
type TrafficLightColor = 'red'|'green'|'yellow'
//2.5 esta forma de arriba es totalmente válida pero algunos tontitos dicen, ya pero si agrego un color arriba, tengo que agregarlo aca y paja.
//para esos tontitos está este metodo avanzado
type TrafficLightColors = keyof typeof colors; //aca decimos que la variable será una de las llaves de el tipo colors, entonces si usaramos esta
//despues solo tendriamos que agregar el color en el objeto de colores y fin.

export const TrafficLight = () => {

    const [light, setLight] =useState<TrafficLightColor>('red'); //3 ahora ponemos eluseState será del tipo que creamos


    const handleChangeColor = (color: TrafficLightColor) => { //4 y acá el color igual
        setLight((prev) => {
            console.log(prev)
            return color;
        })
    }
    //5 hecho e eso ahora solo podremos pasarle alguno de los valores definidos en el tipo.
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
        <div className="flex flex-col items-center space-y-8">
       
          <div className={`w-32 h-32 ${light === 'red' ? colors[light]: 'bg-gray-500'} rounded-full`}></div>
          <div className={`w-32 h-32 ${light === 'yellow' ? colors[light]: 'bg-gray-500'} rounded-full`}></div>
          <div className={`w-32 h-32 ${light === 'green' ? colors[light]: 'bg-gray-500'} rounded-full`}></div>
  
   
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