import React from 'react'
import {motion} from'framer-motion'
import {styles} from'../style';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
    <div className={`${styles.paddingX} absolute inset-0 top-[120px] ax-w-7xl max-auto flex flex-row items-start gap-5`}>
   <div className='flex flex-col justify-center items-center mt-5'>
    {/* divs for the line that appears on the left hand side of the name*/}
    <div className='w-5 h-5 rounded-full bg-[#915eff]' />
    <div className='w-1 sm:h-80 h-40 violet-gradient'/>
   </div>
   <div>
      <h1 className={`${styles.heroHeadText} text-white`}>
        Hi, I'm <span  className='text-[#915eff]'>Abhyshek</span>
      </h1>
      <p className={`sm:${styles.heroSubText} mt-2 text-white-100  `}>Passionate about crafting unique <br className='sm:block hidden'/>websites and tackling challenging problems</p>
    </div>
    </div>
    <ComputersCanvas/>

    <div className=' absolute xs:bottom-6 bottom-32 w-full flex justify-center items-center'>
    <a href="#about">
      <div className='w-[35px] h-[65px] rounded-3xl border-4 border-secondary justify-center items-start p-2 hidden sm:flex '>
        <motion.div animate={{
          y:[0,24,0]
        }}
        transition={{
          duration:1.5,
          repeat:Infinity,
          repeatType:'loop'
        }}
        className='w-3 h-3 rounded-full bg-secondary mb-1'

        />

      </div>
    </a>
    </div>
    </section>
    
  )
}

export default Hero