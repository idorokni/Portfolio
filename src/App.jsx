import { BrowserRouter } from "react-router-dom"

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, MatrixRainEffect, Loader, Education } from "./components"
import { useState, useEffect } from "react"
import { useTexture } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <BrowserRouter>
    <div className="relative z-0">
      <div className="bg-cover bg-no-repeat bg-center">
        <div>
          <Navbar/>
          <MatrixRainEffect className="absolute inset-0"/>
        </div>
        <Hero isMobile={isMobile}/>
      </div>
      <About/>
      <Education/>
      <Experience/>
      <Works isMobile={isMobile}/>
      <div className="relative z-0">
        <Contact/>
      </div>
    </div>
  </BrowserRouter>
    
  )
}

export default App
