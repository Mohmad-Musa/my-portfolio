import {motion} from 'framer-motion';
import {styles} from '../styles';
import { ComputersCanvas } from './canvas';
import creator from "../assets/creator.png"
const Hero = () => {
  return (
    <section className="relative w-full h-56 mx-auto mb-48">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className=" flex flex-col justify-center items-center mt-5">
          <div className="w-20 h-20 rounded-full bg-blue-700" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello , I`m <span></span>
         
          </h1>   <span className={`${styles.heroHeadText} !text-blue-700`} >Mohamad Musa</span>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full Stack Developer
            <br className="sm:block hidden" />with 3+
            years of experience
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero