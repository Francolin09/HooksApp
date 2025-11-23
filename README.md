Ahora comenzaremos a ver el tema del useContext, para eso nos crearemos un directorio simulando una app más completa asi que vamos al src y nos creamos una carpeta que se llame 09-useContext y dentro un componente ProfessionalApp.tsx, luego dentro de 09-useContext nos crearemos una carpeta data y una carpeta pages, dentro de la carpeta pages crearemos tres carpetas con sus respectivos archivos about, auth y profile. Y luego creamos los functional components para cada una de estas con el rafc.

Qué queremos hacer con esto?? una SPA, la gracia de estas es que podremos cabiar de vistas y paginas a traves de la url, ya que hasta ahora todo 
lo hacemos en una sola vista.
La forma en la que veniamos trabajando funcionaba porque al tener una vista padre podiamos mandar props para la comunicacion con los componentes hijos pero que pasa en las spa? Tengo más componentes que estan en el mismo orden de jerarquia, es decir hermanos y no puedo pasar props entre hermanos, entonces como lo hago? comoooo? bueno para eso usaremos el contexto asi que vamosle 
partiremos con la instalacion de react router , donde usaremos el modo data que es ideal para spa 
entonces le damos al npm i react-router
una vez instalado debemos crear un objeto router, es más ordenado tener los router separados segun cada necesidad asi que vamos a la carpeta de useContext y nos creamos una carpeta router y nos creamos app.router.tsx y escribimos lo siguiente:

import {createBrowserRouter} from 'react-router';

export const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<div>Hola pianolas</div>
    }
])

esta es la estructura que suele tener el router pero vamos y le agregamos más cositas
