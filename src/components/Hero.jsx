import { motion } from "framer-motion"
import { styles } from "../style"
import { ComputersCanvas } from "./canvas"

const Hero = ({ isMobile }) => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#FCFFEB]"/>
          <div className="w-1 sm:h-80 h-40 white-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-[#FCFFEB]`}>Hi, I'm <span className="text-gray-500">Ido</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-[#FCFFEB]`}>A highly skilled software developer known for delivering efficient,<br className="sm:block hidden"/> high-quality solutions.</p>
        </div>
      </div>
      <ComputersCanvas isMobile={isMobile}/>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#474350] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-[#474350] mb-1"/>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero