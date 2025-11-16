import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Instagrom } from './07-useOptimistic/instagrom'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Instagrom/>
  </StrictMode>,
)
