import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { ProffesionalApp } from './09-useContext/ProfessionalApp'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProffesionalApp/>
  </StrictMode>
)
