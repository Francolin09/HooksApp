import { useOptimistic, useState } from 'react';

//1 ahora si que haremos uso del useOptimistic dejando además ese delay de 3 segundos y viendo como se comporta
//la idea de esta cuestion es generar una accion optimista mientras se realizan procesos como el posteo de un comentario
//en este caso es mostrar el comentario inmediatamente en la ui, incluso si no se ha completado el posteo en el servidor, ahora que si este 
//falla, simplemente se hace rollback y no se muestra nada 

//1.5   //Esta es la estrcutura gneral del usOptimistic

//   const [optimisticState, addOptimistic] = useOptimistic(
//     currentValue, //1.6current value es el estado real actual del componente
//     (state, newValue) => { 1.7 acá state, hace referencia al estado optimista actual, no al real, sino al temporal y el newValue
                           //es el valor que se le pasara cuando usemos el addOptimistic
//       return /* 1.8 acá definimos lo que queremos mostrar en la ui temporalmente */
//     }
//   );


interface Comment {
  id: number;
  text: string;
  optimistic?: boolean;
}

export const Instagrom = () => {
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, text: '¡Gran foto!' },
    { id: 2, text: 'Me encanta 🧡' },
  ]);

  //2 usemos el useOptimistic. este devuelve un arreglo y necesita uno o dos argumentos. estos son el estado que queremos manejar y una funcion 
  //reducer. 
  //3 entonces expliquemos primero en nuestro optmisticComments tendremos el arreglo de datos optimistas (temporales)
  //y el add pos será como un useState pero para este estado temporal. 
  //Ahora bien el useoptimistic recibe los comments que son nuestro estado actual y solo se usarán como molde o base para crear el estado temporal
  //luego recibimos una funcion reducer con dos argumentos, currentComments que es igual al comments pero solo la primera vez. como dijimos 
  //acá el comments no se toca, solo es el molde, lo que modificamos es el currentComments y cada vez que usemos el addOptimistic este cambiará
  //se puede pensar tambien que el comments es como un backup en caso de que quede la cagá volvemos al estado inicial. 
  //finalmente devolvemos un arreglo donde esparcimos todos los comentarios que existan de manera temporal, además de agregar el comentario nuevo
  //que estamos agregando. junto con la bandera optimistic true y este qarreglo será al final el valor de optimisticComments
  const [optmisticComments, addOptimisticComment] = useOptimistic(comments, (currentComments, newCommentText: string) => {
    return [...currentComments, {
        id: new Date().getTime(),
        text: newCommentText,
        optimistic: true

    }]
  })

  const handleAddComment = async (form: FormData) => {

    const messageText = form.get('post-message') as string 
    console.log('Nuevo comentario', messageText);
    //4 ahora para usarlo simplemente usamos el addOptimisticComment y le pasamos el mensaje. ten en cuenta que acá el mensaje corresponde al 
    //segundo argumento, ya que el primero que que es currentComment ya lo maneja react internamente. 

    addOptimisticComment(messageText);

    //5 con una promesaz y un setTimeout simulamos el retardo

    await new Promise((resolve) => setTimeout(resolve,3000));

    console.log("mensaje posteado")
    setComments(prev => [...prev,{ //6 y finalmente en el setcomment establecemos las propiedades que seran el id y el text que será lo que escribimos
        //en el input. hecho esto y teniendo abajo la linea comment.optimistic && nos mostrara un mensaje de enviando junto con el comentario aun cuando
        //aun no se haya procesado en el servidor. fin.
        id: new Date().getTime(),
        text: messageText 
    }])
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
          disabled={false}
          className="bg-blue-500 text-white p-2 rounded-md w-full"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
