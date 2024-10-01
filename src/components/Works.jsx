import React from 'react'
import { NexusOS } from '../components'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../style'
import { SectionWrapper } from '../hoc'
const Works = ({ isMobile }) => {
  return (
    <>
      <motion.div 
        variants={textVariant()}>
        <p className={styles.sectionSubText}>PROJECTS</p>
      </motion.div>
      <NexusOS isMobile={isMobile}/>
    </>
  )
}

export default SectionWrapper(Works, 'works')