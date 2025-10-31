import { useEffect, useState } from "react";

interface Props {
    id:number
}
//8 creamos nuestra interface
interface Pokemon {
    id:number;
    name:string;
    imageUrl:string
}

//5 ya, acá el hook funcionará con el id del pokemon, entonces para tiparlo usaremos una interface.
export const usePokemon = ({id}: Props) => {
    //6 ahora pensemos yo necesito poder manejar los valores de varios atributos del pokemon como el nombre, el numero, el tipo etc
    //7entonces como le hacemos, creamos un useState para cada propiedad? no seas tonto. mejor manejamos un objeto con todas esas propiedades
    //en un solo useState. Entonces sigamos pensando, vamos a trabajar en un useState con un objeto de cierta forma
    //y como estamos en TypeScript lo mejor es tipar todo, asi que nos creamos una interface del pokemon para usar en el useState

    //9 ahora hacemos uso del useState, y recuerda que como haremos una peticion http todo puiede fallar y ser null asi que tipamos eso igual
    const [pokemon, setPokemon] = useState<Pokemon | null >(null)

    //10 ahora necesitamos hacer la peticion http y tu podrias pensar, como necesito que cuando el hook se monte haga la peticion podriamos
    //usar une useEffect, pues estarias muy mal porque dentro de un useEffect no se pueden utilizar cosas asincronas

    //11 asi que nos creamos un método que haga la peticion y en el setPokemon asignamos al objeto las propiedades que vienen de la api
    const getPokemonById = async(id: number) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json();

        setPokemon({
            id: id,
            name: data.name,
            imageUrl:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

        })
    }
    //12 despuesss, ponemos el useEffect y ahi usamos la funcion que hace la peticion http, además debemos hacer que el useEffect escuche los cambios de id
    useEffect(() => {
        getPokemonById(id);
    },[id]);
    //13 hecho esto nos devolvemos al pokemonPage a utilizar esto



    return {
        pokemon
    }
}
