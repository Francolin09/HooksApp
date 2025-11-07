//1 ya, lo primero será crearnos una interface con los estados que necesitaremos y agregaremos una más que será totalWords
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
//2 luego nos traemos el listado de palabras y lo comentamos allá. Lo traemos porque ahora queremos manipularlo acá 
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
//3 definimos las acciones que tendrá nuestro reducer que por ahora no sabemos cuales serán 
export type ScrambledWordActions =
    | { type: 'NO-SE-QUE-ACCIONES-NECESITARË-AUN' }
    | { type: 'NO-SE-QUE-ACCIONES-NECESITARË-AUN2' }
    | { type: 'NO-SE-QUE-ACCIONES-NECESITARË-AUN3' }

// 4 Nos traemos las funciones que actuan sobre el listado de palabras
const shuffleArray = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5); //!el metodo sort modifica el arreglo, no crea uno nuevo
};


const scrambleWord = (word: string = '') => {
    return word
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
};

//5 establecemos un estado inicial, acuerdate que lo necesita si o si el reducer
export const getInitialState = (): ScrambleWordState => { //establecemos que será del tipo del estado que definimos arriba 
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



//6 creamos el reducer que recibe un stado y una accion, ambos tipos ya estan definidos, ahora vamos al scrambleWords.tsx
export const scrambleWordsReducer = (state: ScrambleWordState, action: ScrambledWordActions) => {
    switch(action.type){
        default:
            return state;
    }
}