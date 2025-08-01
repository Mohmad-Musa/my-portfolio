import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import {fadeIn,textVariant} from '../utils/motion'
import {services} from '../constants'
import { RingGeometry } from 'three'
import { SectionWrapper } from '../hoc'
const ServiceCard = ({index,title,icon}) => {
return (
  <p>
  <Tilt className="xs:w-[250px] w-full">
<motion.div variants={fadeIn("right","spring",2 * index,0.75)}
className='w-full  green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
<div
options ={{
  max:45 ,
  scale :1 ,
  speed:450
}}
className=' bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
<img src={icon} alt={title} className='w-16 h-16 object-contain'/>
<h3 className='text-white text-[20px] font-bold text-center'>
{title}
</h3>
</div>
</motion.div>
  </Tilt>  
  </p>
)


}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-xl">Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="ml-2 text-secondary text-[19px] max-w-3xl leading-[30px]"
      >
        Full Stack Developer with over 3 years of experience in the MERN stack
        and a strong passion for software engineering. I build fast, scalable,
        and user-friendly web applications with a focus on performance and
        clean, maintainable code. I've contributed to a wide range of projects,
        including marketing sites and real-time chat apps. I enjoy solving
        complex problems and creating intuitive solutions while continuously
        learning and growing as a developer.
      </motion.p>
      <div className="mt-20  flex flex-wrap gap-10">
        {services.map((services, index) => (
          <ServiceCard key={services.title} index={index} {...services} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About,"about")