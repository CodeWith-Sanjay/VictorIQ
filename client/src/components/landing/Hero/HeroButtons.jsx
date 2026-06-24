import { useRef } from 'react';
import {motion} from 'framer-motion';

import { buttonAnimation } from '../../../hooks/buttonAnimation.js';
import { transition } from '../../../utils/animation.js';

const HeroButtons = () => {

    const heroButtonRef = useRef(null);
    const heroButtonRef2 = useRef(null);

    const {handleMouseMove, buttonAnimationMouseEnter, buttonAnimationMouseLeave} = buttonAnimation();

  return (
    <motion.div style={{}} className="flex gap-6 my-5">
                
        <button
        aria-label='Start-free button'
        onMouseMove={(e) => handleMouseMove(e, heroButtonRef)}
        onMouseEnter={() => buttonAnimationMouseEnter(heroButtonRef.current)}
        onMouseLeave={() => buttonAnimationMouseLeave(heroButtonRef.current)}  
        className={`relative px-2 md:px-5 py-2 md:py-3 bg-btn-primary text-btn-primary-text hover:bg-btn-primary-hover hover:shadow-btn-primary-hover rounded-full text-sm md:text-md cursor-pointer overflow-hidden ${transition}`}>
          <span 
          ref={heroButtonRef} 
          className='pointer-events-none absolute h-48 w-80 rounded-full bg-btn-primary'
          style={{
            left: 0,
            top: 0,
            transform: 'translate(-50%, -50%) scale(0)'
          }}/>
          <span className='relative z-10'>Start Free Today</span>
        </button>
            
        <button 
        onMouseMove={(e) => handleMouseMove(e, heroButtonRef2)}
        onMouseEnter={() => buttonAnimationMouseEnter(heroButtonRef2.current)}
        onMouseLeave={() => buttonAnimationMouseLeave(heroButtonRef2.current)} 
        className={`relative px-2 md:px-5 py-2 md:py-3 bg-btn-primary rounded-full text-btn-primary-text hover:bg-btn-primary-hover hover:shadow-btn-primary-hover text-sm md:text-md cursor-pointer overflow-hidden ${transition}`}>
            <span 
            ref={heroButtonRef2}
            className='absolute pointer-events-none h-48 w-65 rounded-full bg-btn-primary'
            style={{
                top: 0,
                left: 0,
                transform: 'translate(-50%, -50%) scale(0)'
            }}/>
            <span className='relative z-10'>Watch Demo</span>
        </button>
      </motion.div>
  )
}

export default HeroButtons
