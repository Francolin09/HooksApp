import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClientInformation } from './08-use-suspense/ClientInformation'
import { getUserAction } from './08-use-suspense/api/get-user.action'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={
      <div className='bg-gradient flex flex-col'>
        <h1 className='text-2xl'> Cargando... </h1>
      </div>
    }>
      <ClientInformation getUser={getUserAction(100)} /> 
      {/* aqui viste, de esa forma el id se lo podemos pasar de donde sea */}
     </Suspense>
  </StrictMode>,
)
