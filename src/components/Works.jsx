import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { projects } from '../constants'
import { SectionWrapper } from '../hoc'
import { fadeIn,textVariant } from '../utils/motion'
import { Navigate } from 'react-router-dom'
const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
return(
  <div variants={fadeIn("up","spring",index * 0.5, 0.75)}>
 <Tilt options={{
  max:45,
  speed:450,
  scale:1,
 }} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
<div className='relative w-full h-[230px] '>
<img src={image} alt={name} className='w-full h-full object-cover rounded-2xl'/>

</div>
<div className='mt-5 text-secondary text-[14px]'>
 
<h3 className='text-white font-bold text-[24px] '>
{name}
</h3>
 <button onClick={()=>{
          window.open(source_code_link, '_blank', 'noopener,noreferrer');
 }} className='bg-black p-2 rounded-full font-bold hover:bg-blue-600 mt-2'>
Visit Website
</button>
<p className='mt-2 text-secondary text-[14px]'>
  {description}
</p>
</div>
<div className='mt-4 flex flex-wrap gap-2 '>
{tags.map((tag)=>(
  <p key={tag.name} className={`text-[14px] ${tag.color}`}>
#{tag.name}
  </p>
))}
</div>
 </Tilt>
  </div>
)
}
const Works = () => {
  return (
    <>
      <motion.div>
        <p className='text-xl'>
          My Works
        </p>
        <h2 className={styles.sectionHeadText}>
          Project.
        </h2>

      </motion.div>
      <div className='w-full flex'>
<motion.p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
Following Projects showcases my skills and experience through real-world examples of my work.
It reflects my ability to solve complex p
problems ,
and manage projects effectively
</motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
{projects.map((project,index)=>(
  <ProjectCard  key={`project-${index}`} index={index} {...project} />
))}
      </div>
    </>
  )
}

export default SectionWrapper(Works,"");