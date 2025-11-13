import { useState } from "react"

export const useCounter = (numero: number) => {
  const [contador, setContador] = useState(numero)

  const increment = () => {
    
    setContador(prev => prev + 1);
  }

  const decrement = () => {
    if(contador <= 1) return;
    setContador(prev => prev - 1)
  }

  return { contador, increment, decrement}
}
