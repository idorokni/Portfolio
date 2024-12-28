import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { NexusOSPoints } from "../constants";
import { HardwareCanvas } from "./canvas";

const NexusOS = ({ isMobile }) => {

  return (
    <div className="flex flex-col md:flex-row h-full w-full">
      {/* Left Section */}
      <motion.div className={`${isMobile ? "w-full" : "w-1/2"} flex flex-col`}>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>NexusOS.</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.sectionSubText} mt-4 text-[17px] max-w-3xl leading-[30px]`}
        >
          NexusOS is a custom-built, 32-bit operating system developed entirely by me, with a focus on adhering to POSIX standards to ensure compatibility with UNIX-like environments. It is written in low-level C and assembly, emphasizing efficiency, performance, and precise control over the system’s hardware and processes.
        </motion.p>
        <motion.ul className="mt-5 list-disc ml-5 space-y-5 max-w-5xl">
          {NexusOSPoints.map((point, index) => (
            <motion.li
              key={`point-${index}`}
              className="text-[#D3D0CB] text-[20px] pl-1 tracking-wider p-1"
              variants={fadeIn("left", "spring", 0.5 * index, 1)}
            >
              <span className="text-[#FCFFEB] text-[25px]">{point.name}</span> -{" "}
              {point.point}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {!isMobile && (
        <motion.div className="w-1/2 flex items-center justify-center">
          <HardwareCanvas />
        </motion.div>
      )}
    </div>
  );
};

export default NexusOS;
