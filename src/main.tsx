import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClientInformation } from './08-use-suspense/ClientInformation'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ClientInformation id={100} />
  </StrictMode>,
)
