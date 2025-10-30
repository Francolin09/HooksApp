import { useEffect, useState } from 'react'

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow:'bg-yellow-500 animate-pulse',
    green:'bg-green-500 animate-pulse'
}

type TrafficLightColor = 'red'|'green'|'yellow'

export const useTrafficLight = () => {

    const [light, setLight] =useState<TrafficLightColor>('red'); 

    const [countdown, setcountdown] = useState(5);

    useEffect(() => {

        if (countdown === 0) return; 

        const interval = setInterval(() => {
          setcountdown(prev => prev-1)
        },1000);

        return () => {
          console.log('cleanUp')
          clearInterval(interval) 
        }
    },[countdown]) 


    useEffect(() => {
      if(countdown === 0){
        setcountdown(5);
        if(light ==='green'){
          setLight('yellow')
          return;
        }
        if(countdown === 0){
          setcountdown(5);
          if(light ==='red'){
            setLight('green')
          }
        }
        if(countdown === 0){
          setcountdown(5);
          if(light ==='yellow'){
            setLight('red')
          }
        }
        return;
      }

    },[countdown, light])

  
    return {light, colors, countdown}
}
