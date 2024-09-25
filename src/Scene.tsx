import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import './Scene.css'

function Scene(): JSX.Element {
  const laptop = useGLTF('./models/laptop.gltf')
  return (
    <>
      <Environment preset="forest" />
      <color args={['#214e34']} attach="background" />
      <OrbitControls makeDefault />
      <Float>
        <primitive object={laptop.scene} position-y={-1.2} />
      </Float>
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
