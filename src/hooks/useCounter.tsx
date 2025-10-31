import { useState } from "react"

export const useCounter = () => {
  const [contador, setContador] = useState(1)

  const increment = () => {
    
    setContador(prev => prev + 1);
  }

  const decrement = () => {
    if(contador <= 1) return;
    setContador(prev => prev - 1)
  }

  return { contador, increment, decrement}
}
