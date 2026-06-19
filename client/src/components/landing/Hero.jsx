import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='relative w-full h-screen flex items-center justify-center font-body bg-gradient-to-r from-btn-ghost to-page-alt overflow-hidden'>
          <motion.div 
          initial={{y: 0}}
          animate={{y: -48}}
          transition={{duration: 2, ease: 'linear', repeat: Infinity, repeatType: 'reverse'}}
          className='absolute top-60 left-100 bg-page-bg/60 h-70 w-70 rounded-full'/>
          <motion.div 
          initial={{y: 0}}
          animate={{y: -30}}
          transition={{duration: 1, ease: 'linear', repeat: Infinity, repeatType: 'reverse'}}
          className='absolute top-150 left-250 bg-gradient-to-r from-brand-accent to-brand-accent/50 h-25 w-25 rounded-full'/>
          <motion.div 
          initial={{rotate: 0}}
          animate={{rotate: 360}}
          transition={{duration: 6, ease: 'linear', repeat: Infinity, repeatType: 'reverse'}}
          className='absolute top-100 left-320 bg-gradient-to-r from-brand-gold to-brand-gold/80  h-32 w-32 rounded-2xl'/>

          <div className='m-10 absolute w-full h-screen top-0 left-0 grid grid-cols-1 md:grid-cols-2 justify-center items-center'>
            <div className='p-10 flex flex-col text-left'>
            <p className='bg-gradient-to-r from-brand-gold  to-brand-accent bg-clip-text text-transparent text-lg font-normal mb-1'>Powered By Gemini+GPT-4o</p>
            <h1 className='bg-gradient-to-r from-hero-heading to-brand-accent text-transparent bg-clip-text text-5xl font-extrabold my-2 line-clamp-6 tracking-normal leading-15'>Prepare Smarter, <br/> Win Every Interview</h1>
            <p className='text-text-body/80 text-md my-2'>AI mock interviews, resume scoring, coding practice & aptitude prep - all in one platform built for freshers, students & career switchers.</p>

            <div className='flex gap-6 my-5'>
            <button className='px-5 py-3 bg-gradient-to-r from-hero-heading to-btn-primary rounded-md text-btn-primary-text cursor-pointer'>Start Free Today</button>
            <button className='px-5 py-3 bg-gradient-to-r from-hero-heading to-btn-primary rounded-md text-btn-primary-text cursor-pointer'>Watch Demo</button>
            </div>
            </div>

            <div className='p-10 flex flex-col justify-center items-center gap-4'>
              <button>Start Free Today</button>
              <button>Watch Demo</button>
            </div>
          </div>


    </div>
  )
}

export default Hero
