import { Suspense, useState, useEffect} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF, Html, PerspectiveCamera } from '@react-three/drei'
import Loader from '../Loader'

const Hardware = ({ isMobileDevice }) => {
    const hardware = useGLTF('./computer_hardware/scene.gltf')
    return(
      <>
        <mesh>
          <hemisphereLight intensity={2} groundColor='black'/>
          <pointLight intensity={3}/>
          <primitive 
            object={hardware.scene}
            position={[3,-8, 0]}
            scale={1.8}
            rotation={[0.4, -0.2, -0.1]}/>
        </mesh>
      </>
    )
}

const HardwareCanvas = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false)
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobileDevice(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobileDevice(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
      <Canvas 
      frameloop='demand' 
      shadows
      camera={{position: [10,10,20]}}
      gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<Loader/>}>
        <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        <Hardware/>
      </Suspense>

      <Preload all/> 
    </Canvas>
  )
}

export default HardwareCanvas