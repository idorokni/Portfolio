import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { languages } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { Tilt } from "react-tilt"

const LanguageCard = ({ index, image}) => {
  return (
    <Tilt className="2xl:w-[500px] xs:w-[400px] w-full">
      <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75 )}
        className="w-full gray-black-gradient p-[1px] rounded-[20px]">
        <div
          options={{
            max: 30,
            scale: 1,
            speed: 450
          }}
          className="bg-transparent rounded-[20px] min-h-[100px] flex justify-evenly items-stretch flex-col"
        >
            <div className="p-10">
              <img 
                src={image}
                alt="none"
                className="w-full h-full object-contain flex rounded-[20px]">

              </img>
            </div>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className={`${styles.sectionSubText} mt-4 text-[17px] max-w-3xl leading-[30px]`}>
        I am a skilled software developer with extensive experience in C#, .NET, C++, C, and assembly. I have worked across various domains, from low-level systems programming to high-level application development, leveraging my deep understanding of multiple programming languages and frameworks. My expertise allows me to tackle complex software challenges efficiently, whether in performance optimization, system design, or building scalable solutions. I am always keen on expanding my knowledge and refining my craft through continuous learning and hands-on projects.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {languages.map((language, index) => (
          <LanguageCard key={language.image} index={index} {...language}/>
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About, "about");
