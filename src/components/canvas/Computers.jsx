import { Suspense, useState, useEffect} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import Loader from '../Loader'

const Computers = ({ isMobile }) => {
  const computer_1 = useGLTF('./computer_1/scene.gltf')
  const computer_2 = useGLTF('./computer_2/scene.gltf')

  return (
    <>
      {!isMobile &&
        <>
          <mesh>
            <hemisphereLight intensity={1} groundColor='black'/>
            <pointLight intensity={10}/>
            <primitive 
              object={computer_1.scene}
              position={[2.8,0, -1.5]}
              scale={0.6}
              rotation={[0.4, -0.2, -0.1]}/>
          </mesh>
          <mesh>
            <hemisphereLight intensity={0.0001} groundColor='black'/>
            <pointLight intensity={1}/>
            <primitive 
              object={computer_2.scene}
              position={[-4,-2.8, 4]}
              scale={0.009}
              rotation={[0,1.8,0]}/>
          </mesh>
        </>
      } 
    </>
  )
}



const ComputersCanvas = ({ isMobile }) => {
  return (
    <>
      <Canvas 
        frameloop='demand' 
        shadows
        camera={{position: [5,0,5]}}
        gl={{ preserveDrawingBuffer: true}}
      >
        <Suspense fallback={<Loader/>}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile}/>
        </Suspense>

        <Preload all/>
      </Canvas>
    </>
  )
}

export default ComputersCanvas