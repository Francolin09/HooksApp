ya ahora partiremos con los memos asi que nos creamos la 06 memos y dentro un memoHook.tsx escribiremos unos componentes titulo
y subtitulos para demostrar cual es el problema que te explico acá 
Primero debemos tener en claro dos conceptos fundamentales Renderizar y actualizar el DOM
Renderizar es cuando react ejecuta un componente y el nuevo arbol virtual todo eso en la cpu(javascript)

Actualizar el dom es aplicar los cambios realizados en el navegador

React intenta minimizar la actrualizacion del dom pero el renderizado siempre ocurre! (salvo que sea optimizado)

Ahora bien, por que se re renderiza un componente hijo?
por defecto cuando un padre se re renderiza por una reaccion en cadena se vuelven a ejecutar todos los hijos. ojo! esto no significa que se esten redibujando o actualizando el dom, solo está recalculando el jsx de los hijos, lo cual puede ser innecesario y costoso si ese hijo no depende del estado que cambio.


cuando actualizamos el estado de una variable react vuelve a ejecutar el componente donde esta se encuentra
se vuelve a calcular el jsx, es decir el arbol virtual de elementos que el componente retorna
luego react compara ese nuevo arbol virtual con el anterior 
finalmente reacr actualiza solo las partes necesarias en el dom real

es ahi donde nos viene a ayudar el memo que dira si las props de este componente no cambiaron, no vualvas a renderizarlo o te pego

vamos a aplicarlo en el Mytitle.tsx
