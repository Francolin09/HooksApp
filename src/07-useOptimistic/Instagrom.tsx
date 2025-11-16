import { useState } from 'react';
//1 lo primero que haremos acá será entender un poco este formulario además de simular el comportamiento comun que tendría 
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

  //4 Ahora pensemos para manejar el formulario que info necesita esta funcion???
//   const handleAddComment = async () => {
//     console.log('Nuevo comentario');
//   };

  //5 pos necesita el formulario y sabemos que abajo en el action el handleAddComment es lo mismo que event => handleAddComment(event) entonces
  //se lo pasamos acá como argumento
  const handleAddComment = async (form: FormData) => {
    //6 el tipo formData nos permite obtener el objeto del formulario cuyos campos tengan el atributo name, en nuestro caso el input
    const messageText = form.get('post-message') as string //7 acá obtenemos el campo del formulario con el name = "post-message", esto nos sirve mucho
    //porque con el form ahora podriamos obtener todos los campos del formulario que quisieramos.
    console.log('Nuevo comentario', messageText);

    //8 simularemos la latencia de un post y lo que demora en llegar al servidor, para luego ser mostrado en pantalla
    await new Promise((resolve) => setTimeout(resolve,3000));

    console.log("mensaje posteado")
    setComments(prev => [...prev,{
        id: new Date().getTime(),
        text: messageText //9 acá nos daba un error de tipo que no entendi bien y se soluciono poniendo el as string arriba
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
        {comments.map((comment) => (
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
        // 3 aca en este accion es donde recibiremos las instrucciones de como manejar el formulario con el metodo handleAddComment
        className="flex flex-col items-center justify-center bg-gray-300 w-[500px] rounded-b-3xl p-4"
      >
        {/* 2 Algo destaccable es que acá no manejaremos el formulario dentro de la etiqueta input sino que lo pondremos como action dentro del form */}
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
