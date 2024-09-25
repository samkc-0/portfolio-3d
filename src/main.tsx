import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Scene from './Scene.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Canvas className="r3f">
      <Scene />
    </Canvas>
  </StrictMode>
)
