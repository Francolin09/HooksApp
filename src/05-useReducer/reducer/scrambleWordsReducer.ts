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


export type ScrambledWordActions =
    | { type: 'SET_GUESS', payload:string }
    | { type: 'CHECK_ANSWER' }
    | { type: 'SKIP_WORD' } //1 AGREGAMOS LA ACCION Y VAMOS ABAJO A PONERLA AL CASE
    | { type: 'PLAY_AGAIN'} //7 creamos la accion y vamos a agregar el case


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
            }

        case 'CHECK_ANSWER': {
            if(state.currentWord === state.guess){ 
                const newWords = state.words.slice(1); 
                return { 
               
                    ...state,
                    words: newWords,
                    points: state.points+1,
                    guess:'',
                    currentWord: newWords[0],
                    scrambledWord: scrambleWord(newWords[0]),
                    
                }
            }
             return {
                ...state,
                guess:'',
                errorCounter: state.errorCounter+1,
                isGameOver:state.errorCounter +1 >= state.maxAllowErrors,

             }

        }    
        case 'SKIP_WORD':{
            if(state.skipCounter >=state.maxSkips) return state;//2 validamos que no se haya llegado al maximo de intentos
            const updatedWords = state.words.slice(1);//3 actualizamos las palabras descartando la primera que se está saltando

            return { //4 devolvemos el estado con las variables actualizadas y vamos a usarla con un dispatch all en scramblewords.tsx
                ...state,
                skipCounter: state.skipCounter+1,
                words: updatedWords,
                scrambledWord: scrambleWord(updatedWords[0]),
                guess:''
            }
        }
        //8 Acá lo hiciste de una manera muy bien y solito asi que te felicito, pero hay una forma más facilita que haremos abajo
        //pero muy bien porque hiciste la parte compleja solito asi que bien.

        case 'PLAY_AGAIN':{
            const {skipCounter,words,scrambledWord,guess, maxAllowErrors,maxSkips, points,isGameOver,currentWord,errorCounter,totalWords} = getInitialState();
            return {
                ...state,
                skipCounter,
                words,
                scrambledWord,
                guess,
                maxAllowErrors,
                maxSkips,
                currentWord,
                errorCounter,
                isGameOver,
                points,
                totalWords
            }
        }
        default:
            return state;
    }
}