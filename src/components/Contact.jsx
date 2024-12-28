import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import { SectionWrapper } from '../hoc'
import { styles } from '../style'
import { motion } from 'framer-motion'
import { textVariant, fadeIn } from '../utils/motion'
import { powerOnButton } from '../assets'
import emailjs from '@emailjs/browser'

const ComputerLikeComputerTeminal = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [currentLine, setCurrentLine] = useState(0)
  const [isPowerOn, setIsPowerOn] = useState(false)
  const [volume, setVolume] = useState(50)
  const [brightness, setBrightness] = useState(100)
  const [isLoading, setIsLoading] = useState(false)
  const [command, setCommand] = useState('')
  const [commandHistory, setCommandHistory] = useState([])
  const [systemStatus, setSystemStatus] = useState({
    cpu: Math.floor(Math.random() * 100),
    memory: Math.floor(Math.random() * 100),
    network: Math.floor(Math.random() * 100),
  })

  const lines = [
    "> PERFORMING SYSTEM DIAGNOSTICS",
    "> LOADING OPERATING SYSTEM",
    "> C:\\> CONTACT.EXE",
    "> INITIALIZING CONTACT PROTOCOL",
    "> READY FOR INPUT"
  ]

  useEffect(() => {
    if (isPowerOn) {
      const timer = setTimeout(() => {
        if (currentLine < lines.length - 1) {
          setCurrentLine(currentLine + 1)
        }
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [currentLine, isPowerOn])

  useEffect(() => {
    const interval = setInterval(() => {
      setSystemStatus(prev => ({
        cpu: Math.floor(Math.random() * 100),
        memory: Math.floor(Math.random() * 100),
        network: Math.floor(Math.random() * 100),
      }))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setCommandHistory(prev => [...prev, `> SENDING MESSAGE TO: ${email}`])
    setTimeout(() => {
      console.log('Submitted:', { email, content })
      emailjs
      .sendForm('service_nn4u9rw', 'template_h176ygg', form.current, {
        publicKey: 'pHGUudFOLGTRq3ns7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      setSubmitted(true)
      setIsLoading(false)
      setCommandHistory(prev => [...prev, '> MESSAGE SENT SUCCESSFULLY'])
      setTimeout(() => setSubmitted(false), 3000)
    }, 2000)
  }

  const handlePowerToggle = () => {
    setIsPowerOn(!isPowerOn)
    if (!isPowerOn) {
      setCurrentLine(0)
      setEmail('')
      setContent('')
      setSubmitted(false)
      setCommandHistory([])
    }
  }

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      setCommandHistory(prev => [...prev, `> ${command}`])
      processCommand(command)
      setCommand('')
    }
  }

  const Input = ({ className, ...props }) => {
    return (
      <input
        className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        {...props}
      />
    );
  };

  const Textarea = ({ className, ...props }) => {
    return (
      <textarea
        className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        {...props}
      />
    );
  };


  return (
    <div className="min-h-screen flex justify-center relative overflow-hidden mt-14">
      <div className="relative z-10 w-full max-w-4xl">
        {/* Retro Computer Case */}
        <div className="bg-[#d4cfc5] p-8 rounded-lg shadow-2xl">
          {/* Monitor */}
          <div className="bg-[#b8b2a9] p-4 rounded-lg border-8 border-[#a09b92]">
            <div className="bg-black p-6 rounded-sm relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
              {/* Screen Content */}
              <div
                className={`font-mono text-green-500 h-full overflow-y-auto rounded-lg`}
              >
                {isPowerOn && (
                  <>
                    {lines.slice(0, currentLine + 1).map((line, index) => (
                      <div key={index} className="ml-3 mr-3 mt-3 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 mb-2">
                        {line}
                      </div>
                    ))}
                    {currentLine === lines.length - 1 && (
                      <form onSubmit={handleSubmit} className="space-y-4 mt-4" ref={form}>
                         <div className='ml-3 mr-3'>
                          <label htmlFor="employer_name" className="block mb-1 text-sm">
                            {'> Enter_Name:'}
                          </label>
                          <input
                            type="name"
                            id="employer_name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full bg-black border-green-500 text-green-500 placeholder-green-700 flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="name"
                            name='employer_name'
                          />
                        </div>
                        <div className='ml-3 mr-3'>
                          <label htmlFor="employer_email" className="block mb-1 text-sm">
                            {'> Enter_Email:'}
                          </label>
                          <input
                            type="email"
                            id="employer_email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full bg-black border-green-500 text-green-500 placeholder-green-700 flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="your.email@gmail.com"
                            name='employer_email'
                          />
                        </div>
                        <div className='ml-3 mr-3'>
                          <label htmlFor="message" className="block mb-1 text-sm">
                            {'> Enter_Message:'}
                          </label>
                          <textarea
                            id="message"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                            className="w-full h-24 bg-black border-green-500 text-green-500 placeholder-green-700 flex rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Your message here..."
                            rows={3}
                            name='message'
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-green-500 text-black font-bold py-2 px-4 rounded-lg duration-300 ease-in-out transform inline-flex items-center justify-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none text-primary-foreground hover:bg-red-400" 
                          disabled={isLoading}
                        >
                          {isLoading ? 'TRANSMITTING...' : 'TRANSMIT'}
                        </button>
                      </form>
                    )}
                    {submitted && (
                      <div className="mt-4 animate-pulse">
                        {'> Message received. Initiating contact sequence...'}
                      </div>
                    )}
                    {/* Command History */}
                    <div className="mt-4">
                      {commandHistory.map((cmd, index) => (
                        <div key={index} className="text-sm">{cmd}</div>
                      ))}
                    </div>
                  </>
                )}
              </div>
              {/* Screen Reflection */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-transparent to-white opacity-10 pointer-events-none"
                style={{ opacity: isPowerOn ? 0.1 : 0 }}
              ></div>
              {/* Scanlines */}
              <div className="absolute inset-0 bg-scanlines pointer-events-none"></div>
            </div>
          </div>
          {/* Computer Base */}
          <div className="mt-4 bg-[#d4cfc5] p-4 rounded-lg flex justify-between items-center">
            {/* Floppy Drives */}
            <div className="flex space-x-4">
              <div className="bg-[#b8b2a9] w-16 h-8 rounded flex items-center justify-center">
                <div className="w-8 h-1 bg-[#a09b92]"></div>
              </div>
              <div className="bg-[#b8b2a9] w-16 h-8 rounded flex items-center justify-center">
                <div className="w-8 h-1 bg-[#a09b92]"></div>
              </div>
            </div>
            {/* System Controls */}
            <div className="flex items-center justify-center space-x-4">
              <motion.button
                onClick={handlePowerToggle}
                className={`${isPowerOn ? 'bg-green-500' : 'bg-red-500'} text-white p-2 w-12 h-12 rounded-lg`}
                whileHover={{ scale: 1.2 }} // Animates the button to scale up when hovered
                whileTap={{ scale: 0.9 }}
              >
                <img 
                  src={powerOnButton}
                  alt='power button'/>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Contact = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = '> CONTACT ME'

  useEffect(() => {
    let i = 0
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingEffect)
      }
    }, 100)

    return () => clearInterval(typingEffect)
  }, [])

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>contact me</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className={`${styles.sectionSubText} mt-4 text-[100px] max-w-3xl leading-[30px]`}>
        press the red button to activate contact terminal
      </motion.p>
      <div className='justify-center'>
        <ComputerLikeComputerTeminal/>
      </div>
    </>
  )
}

export default SectionWrapper(Contact,"contact")