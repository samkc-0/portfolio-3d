import { OrbitControls } from '@react-three/drei'
import './Scene.css'
import { useState } from 'react'

function Scene(): JSX.Element {
  const [color, setColor] = useState('red')
  return (
    <>
      <color args={['#241a1a']} attach="background" />
      <OrbitControls makeDefault />
      <mesh onClick={() => setColor(randomColor())}>
        <boxGeometry />
        <meshBasicMaterial color={color} />
      </mesh>
    </>
  )
}

function randomColor(alpha: boolean = false): string {
  return alpha
    ? `rgba(${randomByte()}, ${randomByte()}, ${randomByte()}, ${Math.random()})`
    : `rgb(${randomByte()}, ${randomByte()}, ${randomByte()})`
}

function randomByte(): number {
  return Math.floor(Math.random() * 256)
}

export default Scene
