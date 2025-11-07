import { stat } from "fs";

export interface ScrambleWordState {
    currentWord: string;
    errorCounter: number;
    guess: string;
    isGameOver: boolean;
    maxAllowErrors: number;
    maxSkips: number;
    points: number;
    scrambledWord: string;
    skipCounter: number;
    words: string[];
    totalWords: number
}

const GAME_WORDS = [
    'REACT',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'HTML',
    'ANGULAR',
    'SOLID',
    'NODE',
    'VUEJS',
    'SVELTE',
    'EXPRESS',
    'MONGODB',
    'POSTGRES',
    'DOCKER',
    'KUBERNETES',
    'WEBPACK',
    'VITE',
    'TAILWIND',
];

//1 definimos la accion 
export type ScrambledWordActions =
    | { type: 'SET_GUESS', payload:string } //2 y vamos a agregarla al reducer abajo
    | { type: 'CHECK_ANSWER' }//7 la nueva accion será check_anser, que no necesitará ningun payload, vamos abajo a definir
    | { type: 'NO-SE-QUE-ACCIONES-NECESITARË-AUN3' }


const shuffleArray = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5); //!el metodo sort modifica el arreglo, no crea uno nuevo
};


const scrambleWord = (word: string = '') => {
    return word
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
};


export const getInitialState = (): ScrambleWordState => {
    const shuffledWords = shuffleArray([...GAME_WORDS]) //!usamos el spread para crear una copia y jugar con la copia, asi no tocamos el arreglo inicial
    return {
        currentWord: shuffledWords[0],
        errorCounter: 0,
        guess: '',
        isGameOver: false,
        maxAllowErrors: 3,
        maxSkips: 3,
        points: 0,
        scrambledWord: scrambleWord(shuffledWords[0]),
        skipCounter: 0,
        words: shuffledWords,
        totalWords: shuffledWords.length
    }
}



export const scrambleWordsReducer = (state: ScrambleWordState, action: ScrambledWordActions): ScrambleWordState => {
    switch (action.type) {
        case 'SET_GUESS':
            return {
                ...state,
                guess: action.payload.trim().toUpperCase(),
            }//3 agregamos el caso SET_GUESS donde nos retorna un nuevo estado que tiene el estado y el guess
            //entonces ahora que tenemos nuestro molde vamos a usarlo en el onChange del input en scrambleWords

            //8 acá definimos la nueva accion check_answer que se detonará al al hacer click en el boton Enviar adivinanza
        case 'CHECK_ANSWER': {
            if(state.currentWord === state.guess){ //9 validamos que el guess que es la palabra ingresada sea igual a la palabra actual 
                const newWords = state.words.slice(1); //10 si es el caso, definimos unas nuevas palabras, sin la palabra adivinada
                return { 
                    //11 luego retornamos un objeto, haciendo copia del state pero reemplazando los valores que se necesitan actualizar
                    //para la siguiente ronda
                    ...state,
                    words: newWords,
                    points: state.points+1,
                    guess:'',
                    currentWord: newWords[0],
                    scrambledWord: scrambleWord(newWords[0]),
                    
                }
            }
             return { //12 ahora en el caso que la palabra no sea la misma, devolvemos el state igual pero aumentando 
                //el contador de errores y validando el gameover. hecho esto nos vamos al metodo handlesubmit a implementarlo
                ...state,
                guess:'',
                errorCounter: state.errorCounter+1,
                isGameOver:state.errorCounter +1 >= state.maxAllowErrors,

             }

        }    
        default:
            return state;
    }
}