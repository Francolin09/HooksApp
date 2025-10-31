import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PokemonPage } from './03-examples/PokemonPage'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <PokemonPage/>
  </StrictMode>,
)
