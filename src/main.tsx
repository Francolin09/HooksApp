import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TrafficLightWithUseEffect } from './02-useEffect/TrafficLightWithUseEffect'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <TrafficLightWithUseEffect/>
  </StrictMode>,
)
