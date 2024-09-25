import {
  Environment,
  Float,
  OrbitControls,
  PresentationControls,
  useGLTF,
} from '@react-three/drei'
import './Scene.css'

function Scene(): JSX.Element {
  const laptop = useGLTF('./models/laptop.gltf')
  return (
    <>
      <Environment preset="forest" />
      <color args={['#214e34']} attach="background" />
      {/* <OrbitControls makeDefault /> */}
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2] /* limit vertical rotation */}
        azimuth={[-1, 0.75] /* limit horizontal rotation */}
      >
        <object3D name="laptop">
          <Float rotationIntensity={0.4}>
            <primitive object={laptop.scene} position-y={-1.2} />
          </Float>
        </object3D>
      </PresentationControls>
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
