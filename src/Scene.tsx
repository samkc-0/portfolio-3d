import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
  useGLTF,
  Text,
} from '@react-three/drei'
import { Leva, useControls } from 'leva'
import './Scene.css'

const BACKGROUND_COLOR = '#002626'
const TEXT_COLOR = '#5B8C5A'

function Scene({ debug = false }: { debug?: boolean }): JSX.Element {
  return (
    <>
      {!debug && <Leva hidden />}
      <Environment preset="forest" />
      <color args={[BACKGROUND_COLOR]} attach="background" />
      {/* <OrbitControls makeDefault /> */}
      <Float rotationIntensity={0.4}>
        <AuthorName first="SAMUEL" last="CARTER" />
        <PresentationControls
          global
          rotation={[0.13, 0.1, 0]}
          polar={[-0.04, 0.2] /* limit vertical rotation */}
          azimuth={[-1, 0.75] /* limit horizontal rotation */}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 2, tension: 400 }}
        >
          <Laptop displayUrl="https://threejs.org/" scale={1} />
        </PresentationControls>
      </Float>
      {/* Laptop casts a shadow on the ground: */}
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  )
}

function Laptop({
  displayUrl,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}: {
  displayUrl: string
  scale?: number
  position?: [number, number, number]
  rotation?: [number, number, number]
}): JSX.Element {
  const model = useGLTF('./models/laptop.gltf')
  return (
    <object3D
      name="laptop"
      scale={scale}
      position={position}
      rotation={rotation}
    >
      <rectAreaLight
        width={2.5}
        height={1.65}
        intensity={65}
        position={[0, 0.55, -1.15]}
        rotation={[0.1, Math.PI, 0]}
        color={'white'}
        name="laptop-backlight"
      />
      <primitive object={model.scene} position-y={-1.2}>
        <Html
          transform
          wrapperClass="htmlScreen"
          distanceFactor={1.17}
          position={[0, 1.56, -1.4]}
          rotation={[-0.256, 0, 0]}
          name="laptop-screen"
        >
          <iframe
            title="Laptop Screen Content"
            width="320"
            height="240"
            src={displayUrl}
          ></iframe>
        </Html>
      </primitive>
    </object3D>
  )
}

function AuthorName({
  first,
  last,
}: {
  first: string
  last: string
}): JSX.Element {
  const color = TEXT_COLOR
  const rotationY = -Math.PI / 2
  const font = './fonts/ConcertOne-Regular.ttf'
  return (
    <group name="author-name">
      {/* <Float> */}
      <Text font={font} position={[3, 1.2, -1]} rotation-y={rotationY}>
        {first}
        <meshStandardMaterial attach="material" color={color} opacity={1} />
      </Text>
      <Text font={font} position={[3, 0, -1]} rotation-y={rotationY}>
        {last}
        <meshBasicMaterial attach="material" color={color} opacity={1} />
      </Text>
      {/* </Float> */}
    </group>
  )
}

export default Scene
