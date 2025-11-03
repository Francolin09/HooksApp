//2 entonces creamos las interfaces para el to-do y el estado de los to-dos 
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

//3Además definiremos las posibles acciones, en este caso serán un objeto con distintas propiedades, además le pasaremos el payload
//que será la informacion que necesita para ejecutarse
export type TaskAction = //4 por ejemplo para agregar necesita el texto, para cambiar su estado necesita el id del to-do y para borrar igual
| {type: 'ADD_TODO'; payload:string} 
| {type: 'TOGGLE_TODO'; payload: number} 
| {type: 'DELETE_TODO'; payload:number}

//1Un reducer no es más que una funcion que debe retornar siempre un estado nuevo basado en sus argumentos (estado, accion)
//Ahora entendamos nuestro contexto, lo que queremos hacer es poder manejar el estado de nuestras variables relaciones al todo
//que hicimos anteriormente pero ahora haciendo uso de un reducer. Para eso y porque estamos en ts tiparemos lo que mas podamos partiendo 
//por los todos y por el estado de los todos que será la variable que almacene a todos los todos y eso debemos devolver 
export const taskReducer = (state: TaskeState, action:TaskAction ): TaskeState => {
   //4 casi siempre usamos un switch en los reducer
    switch(action.type){ //5 entonces evaluamos cual es el type del action y segun eso actuamosss
        case 'ADD_TODO':{
            const newTodo: Todo = { //6 si el type es agregar entonces creamos un nuevo todo y despues lo agregamos al listado completo
                id: Date.now(),
                text: action.payload,
                completed:false
            }
            //! 7pero esto No se debe hacer
            //state.todos.push(newTodo) //!porque acá estamos mutando un state y eso es del diablo, siempre debe ser un nuevo state 

            //8 entonces lo correcto es que retornamos un nuevo arreglo donde esparcimos las propiedades que ya tiene el state
            //y luego sobreescribimos las necesarias
            return {...state,
                todos:[...state.todos, newTodo], //8.5 acá esparcimos los to-dos existentes y le agregamos el nuevo
                length: state.todos.length +1,
                pending:state.pending+1
            };
            //9 te explico en detalle, con el ..state estamos copiando todas las propiedades del TaskeState que tiene el listado de tareas
            //luego modificamos tres de sus propíedades, todos: para agregar el nuevo to-do que creamos, el largo y los pendientes, las otras
            //propiedades como el completed quedan intactas.
        }

        //10 aca solo queremos actualizar el valor para eso primero hacemos un map al state.todos y por cada uno evaluamos si su id
        //es igual al id que se entrega en el payload. En caso de que si devolvemos un nuevo objeto con el mismo todo, pero el valor 
        //del completed modificado
        case 'TOGGLE_TODO':{
            const updatedTodos = state.todos.map((todo) => {
                if(todo.id === action.payload){
                    return {...todo, completed: !todo.completed}
                }
                return todo; //11 al final me devuelve cada uno de los to-dos que se evaluaron en un arreglo de todos
            })
            return {...state, //12 aqui solo armamos el objeto esparciendo el state y sobrescribiendo las propiedades necesarias
                todos: updatedTodos,
                completed: updatedTodos.filter(todo => todo.completed).length,
                pending: updatedTodos.filter((todo) => !todo.completed).length,
            };
        }

        //13 acá lo mismo solo que usamos el filter para que nos devuelva el listado completo de to-dos excepto aquel que coincida con el id FIN
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
    return state;
} 