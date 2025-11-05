interface Todo {
    id:number;
    text: string;
    completed: boolean;
}
interface TaskeState {
    todos: Todo[]
    length:number;
    completed: number;
    pending: number;
}


export type TaskAction = 
| {type: 'ADD_TODO'; payload:string} 
| {type: 'TOGGLE_TODO'; payload: number} 
| {type: 'DELETE_TODO'; payload:number}

export const getTaskInitialState = ():TaskeState => {
    //3 como acá es donde obtenemos nuestro estado inicial, es acá donde consumiremos la info que esté en el localStorage
    //entonces, primero obtenemos con el getItem y despues evaluamos si trajo algo o no, si no trajo nada, todo vacio.
    const localStorageState = localStorage.getItem('task-state');
    if(!localStorageState){
        return {
            todos:[],
            completed:0,
            pending:0,
            length:0
        }
    }
    //4 pero si trae algo el retorno será un objeto( que por cierto obtenemos un string pero con json.parse, lo hacemos objeto)
    //y ese será nuestro estado inicial. fin 
    return JSON.parse(localStorageState);
    
}

export const taskReducer = (state: TaskeState, action:TaskAction ): TaskeState => {

    switch(action.type){ 
        case 'ADD_TODO':{
            const newTodo: Todo = { 
                id: Date.now(),
                text: action.payload,
                completed:false
            }
    
            return {...state,
                todos:[...state.todos, newTodo], 
                length: state.todos.length +1,
                pending:state.pending+1
            };
           
        }

 
        case 'TOGGLE_TODO':{
            const updatedTodos = state.todos.map((todo) => {
                if(todo.id === action.payload){
                    return {...todo, completed: !todo.completed}
                }
                return todo; 
            })
            return {...state,
                todos: updatedTodos,
                completed: updatedTodos.filter(todo => todo.completed).length,
                pending: updatedTodos.filter((todo) => !todo.completed).length,
            };
        }

        case 'DELETE_TODO': {
            const currentTodos = state.todos.filter((todo) => todo.id !== action.payload)
            return {
                ...state,
                todos: currentTodos,
                length: currentTodos.length,
                completed: currentTodos.filter(todo => todo.completed).length,
                pending: currentTodos.filter((todo) => !todo.completed).length,
            };
        }
           

        default:
            return state;         
    }
} 