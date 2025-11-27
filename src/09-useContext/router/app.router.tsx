import {createBrowserRouter, Navigate} from 'react-router';
import { AboutPage } from '../pages/about/AboutPage';
import { LoginPage } from '../pages/auth/LoginPage';
import { ProfilePage } from '../pages/profile/ProfilePage';
import { PrivateRoute } from './PrivateRoute';

export const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AboutPage/>
    },
    {
        path:'/login',
        element:<LoginPage/>
    },
    //9 entonces acá si pensamos el unico lugar donde necesitamos aplicar esa logica es en el profilepage, donde no queremos que se muestre 
    //si no está autenticado
    {
        path:'/profile',
        // element:<ProfilePage/> 10 y ahora en vez de pasarle solo el profilepage, le pasamos el privateRoute con el elemento jsx que es ProfilePage
        element: <PrivateRoute element={<ProfilePage/>}/> //11 ahora funciona todo de maravilla pero ojo que nos faltaba 
        // agregar el logout en el useEffect del UsercontextProvider. fin
    },
    {
        path:'*',
        element: <Navigate to={'/'}/>
    }
])
