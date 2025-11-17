import { useOptimistic, useState, useTransition } from 'react';
//1 hasta ahora funciona, pero solo en el caso de que funcione bien, pero y si falla? o si hay registros duplicados? eso haremos 


interface Comment {
  id: number;
  text: string;
  optimistic?: boolean;
}

let lastId = 2; //2 primero pondremos cual es el ultimo id que tenemos y despues dentro del useOptimistic lo aumentamos y asignamos, eso no mas

//3 ahora conoceremos el hook useTransition el cual permite marcar ciertas actualizaciones de estado como transiciones, es decir
//actualizaciones que pueden demorar pero no deberian bloquear la ui 

export const Instagrom = () => {
  const [isPending, startTransition] = useTransition(); //4 acá definimos el hook que tendrá si esta pendiente o no y una accion 
  
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, text: '¡Gran foto!' },
    { id: 2, text: 'Me encanta 🧡' },
  ]);

  const [optmisticComments, addOptimisticComment] = useOptimistic(comments, (currentComments, newCommentText: string) => {
    lastId++;
    return [...currentComments, {
        id: lastId,
        text: newCommentText,
        optimistic: true

    }]
  })

  const handleAddComment = async (form: FormData) => {

    const messageText = form.get('post-message') as string 
    console.log('Nuevo comentario', messageText);

    addOptimisticComment(messageText);

    //5 acá es donde debemos usar el startTransition y es dentro de el donde debemos colocar todo el codigo bloqueante

    startTransition(async () => {
        await new Promise((resolve) => setTimeout(resolve,3000));
    
        console.log("mensaje posteado")
        setComments(prev => [...prev,{ 
            id: new Date().getTime(),
            text: messageText 
        }])
        
    })
    //6 ahora ponemos este codigo adentro del startTransition
    // await new Promise((resolve) => setTimeout(resolve,3000));
    
    //     console.log("mensaje posteado")
    //     setComments(prev => [...prev,{ 
    //         id: new Date().getTime(),
    //         text: messageText 
    //     }])

    //7 igual acá no se ve mucho el efecto porque no era tan bloqueante la cuestion incluso podemos ponerle en el boton un disabled si el ispending = true
    //8 eso hara que no nos deje ingresar nuevos valores si no se ha terminado de postear el primero. fin 

  };

 
  return (
    <div className="bg-slate-700 h-screen flex flex-col items-center justify-center">
      {/* Post de ejemplo */}
      <div className="flex flex-col items-center justify-center bg-gray-300 rounded-t-3xl p-4 w-[500px]">
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=500&fit=crop"
          alt="Instagrom"
          className="object-cover rounded-xl mb-4"
        />
        <p className="text-black font-bold mb-4">
          Mira que interesante esta funcionalidad de la API de React.
        </p>
      </div>

      {/* Comentarios */}
      <ul className="flex flex-col items-start justify-center bg-gray-300 w-[500px] p-4">
        {optmisticComments.map((comment) => (
          <li key={comment.id} className="flex items-center gap-2 mb-2">
            <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-white text-center">A</span>
            </div>
            <p className="text-black">{comment.text}</p>
            {comment.optimistic && (
              <span className="text-gray-500 text-sm">enviando... </span>
            )}
          </li>
        ))}
      </ul>

      {/* Formulario de comentarios */}
      <form
        action={handleAddComment} 

        className="flex flex-col items-center justify-center bg-gray-300 w-[500px] rounded-b-3xl p-4"
      >
     
        <input
          type="text"
          name="post-message"
          placeholder="Escribe un comentario"
          required
          className="w-full p-2 rounded-md mb-2 text-black bg-white"
        />
        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-500 text-white p-2 rounded-md w-full"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
