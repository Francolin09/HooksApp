//1 lo primero que vemos acá es un componente que muestra unos titulos, una imagen y unos botones
//entonces altiro pensemos... podríamos usar un contador para cambiar de numero en la url y asi mostrar otros pokimon
//para eso creemonos un hook de contador 

import { useCounter } from "../hooks/useCounter";
import { usePokemon } from "../hooks/usePokemon";





export const PokemonPage = () => {

    //2 una vez creado nuestro hook de contador lo usamos aca
    const {contador,decrement,increment} = useCounter() //3 para luego usar cada variable abajo donde corresponda
    //4 hasta este punto tenemos todo en orden excepto el nombre, para manejar eso nos crearemos otro hook que se llame usePokemon

    //14 acá comenzamos con el hook y hacemos nuestra primera conexion entre ambos hooks ya que el id que requiere el usePokemon será el contador
    //que nos entrrega el useCounter y tomamos el objeto pokemon
    const {pokemon} = usePokemon({id: contador})

    return (
      <div className="bg-gradient flex flex-col items-center">
        <h1 className="text-2xl font-thin text-white">Pokémon</h1>
        <h3 className="text-xl font-bold text-white">#{contador} {pokemon?.name}</h3>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador}.png`}
          alt=""
        />
  
        <div className="flex gap-2">
          
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={decrement}>
            Anterior
          </button>
          
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={increment}>
            Siguiente
          </button>
         
        </div>
      </div>
    );
  };