//1 la labor ahora es hacer lo mismo pero sacando logica de acá y poniendola en un hook personalizado
import { useTrafficLight } from "../hooks/useTrafficLight";
//2 esta tarea la hiciste solito, te felicito, simplemente copiaste la logica en el hook importaste las cosas necesarias y devolviste
//las cosas que necesitabamos usar acpa





export const TrafficLightWithHook = () => {

    
  const {light, colors, countdown} = useTrafficLight();
   
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
        <div className="flex flex-col items-center space-y-8">

          <h1 className="text-white text-xl font-thin">Semaforo con use effect</h1>
          <h2 className="text-white text-xl"> Countdown {countdown}</h2>
      
          <div className="w-64 bg-gray-700 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear" style={{width:`${(countdown/5)*100}%`}}></div>
          </div>
       
          <div className={`w-32 h-32 ${light === 'red' ? colors[light]: 'bg-gray-500'} rounded-full`}></div>
          <div className={`w-32 h-32 ${light === 'yellow' ? colors[light]: 'bg-gray-500'} rounded-full`}></div>
          <div className={`w-32 h-32 ${light === 'green' ? colors[light]: 'bg-gray-500'} rounded-full`}></div>
  
   
         
        </div>
      </div>
    );
  };