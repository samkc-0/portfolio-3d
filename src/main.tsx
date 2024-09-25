import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Scene from './Scene.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Canvas
      className="r3f"
      camera={{ near: 1, far: 10000, position: [-2, 0.8, 3], zoom: 1.3 }}
    >
      <Scene />
    </Canvas>
  </StrictMode>
)
