import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import { educationData } from "../constants";

const Education = () => {
    return (
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>MY EDUCATION</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>
        <div className="mt-10 flex flex-row justify-start gap-6">
            {educationData.map((entry, index) => (
                <motion.div
                    key={index}
                    className={`h-full w-1/${educationData.length} border border-[${styles.mainColor}] p-6 rounded-2xl bg-opacity-50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300 gap-2`}>
                    <motion.h2 
                        className={`text-[${styles.mainColor}] text-[25px] font-semibold mt-0.4`}
                        variants={textVariant()}>
                        {entry.program}
                    </motion.h2>
                    <motion.h4
                        className="text-[#FCECC9] mt-3 text-[18px]"
                        variants={textVariant()}>
                        {entry.year}
                    </motion.h4>
                    <motion.p className={`text-[${styles.mainColor}] max-w-[600px] mt-4`}>
                        {entry.details}
                    </motion.p>
                </motion.div>
            ))}
        </div>
      </>
    )
}

export default SectionWrapper(Education, "eduaction")