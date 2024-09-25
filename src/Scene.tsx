import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
  useGLTF,
  Text,
} from '@react-three/drei'
import './Scene.css'

function Scene(): JSX.Element {
  return (
    <>
      <Environment preset="forest" />
      <color args={['#214e34']} attach="background" />
      {/* <OrbitControls makeDefault /> */}
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.04, 0.2] /* limit vertical rotation */}
        azimuth={[-1, 0.75] /* limit horizontal rotation */}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 2, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <Text name="author-name">Sam Carter</Text>
          <Laptop displayUrl="https://threejs.org/" scale={1.2} />
        </Float>
      </PresentationControls>
      {/* Laptop casts a shadow on the ground: */}
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  )
}

function Laptop({
  displayUrl,
  scale = 1,
}: {
  displayUrl: string
  scale?: number
}): JSX.Element {
  const model = useGLTF('./models/laptop.gltf')
  return (
    <object3D name="laptop" scale={scale}>
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

export default Scene
