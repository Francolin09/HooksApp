import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Instagrom } from './07-useOptimistic/instagrom'
import {Toaster} from 'sonner'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Toaster/>
      <Instagrom/>
  </StrictMode>,
)
