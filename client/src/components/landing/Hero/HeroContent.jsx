import {motion, useScroll, useTransform} from 'framer-motion';
import HeroButtons from './HeroButtons';

const HeroContent = () => {

    const {scrollY} = useScroll();

  const opacity = useTransform(
    scrollY,
    [0, 350],
    [1, 0]
  )

  const textY = useTransform(
    scrollY,
    [0, 500],
    [0, -40]
  );

  return (
    <motion.div  className="md:m-10 absolute w-full min-h-screen top-0 left-0 flex justify-start items-center">
        <motion.div style={{y: textY, opacity}} className="p-5 md:p-10 flex flex-col text-left">
          <p className="bg-linear-to-r from-brand-gold  to-brand-accent bg-clip-text text-transparent text-md md:text-lg font-normal mb-1">
            Powered By Gemini+GPT-4o
          </p>
          <motion.h1 style={{ opacity}} className="bg-linear-to-r from-brand-accent to-hero-heading text-transparent bg-clip-text text-4xl md:text-5xl lg:text-6xl font-extrabold my-2 line-clamp-6 tracking-normal leading-tight md:leading-15">
            Prepare Smarter, <br /> Win Every Interview
          </motion.h1>
          <motion.p  className="text-text-body/90 md:max-w-md text-sm md:text-md my-2">
            AI mock interviews, resume scoring, coding practice & aptitude prep
            - all in one platform built for freshers, students & career
            switchers.
          </motion.p>

          <HeroButtons />
        </motion.div>
      </motion.div>
  )
}

export default HeroContent
