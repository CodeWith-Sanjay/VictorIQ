import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {motion} from 'framer-motion';
import {gsap} from 'gsap';

import vitorIQLogo from '../../assets/logos/victorIq_logo.png';
import { transition } from '../../utils/animation.js';

const Navbar = () => {

    const [visible, setVisible] = useState(true);

    const lastScrollY = useRef(0);
    const getStartedCircleRef = useRef(null);
    const loginCircleRef = useRef(null);

    const navbarOptionStyles = 'tracking-wide text-nav-link hover:text-nav-link-hover active:text-nav-link-active cursor-pointer';

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if(currentScrollY > lastScrollY.current && currentScrollY > 100) {
          if(visible) setVisible(false)
        } else {
          if(!visible) setVisible(true);
        }

        lastScrollY.current = currentScrollY;
      }

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, [visible]);

    const animateCircle = (ref, x, y) => {
      gsap.to(ref, {
        left: x,
        top: y,
        xPercent: -50,
        yPercent: -50,
        duration: 0.4,
        ease: 'power3.inOut'
      });
    };

    const buttonAnimationMouseEnter = (ref) => {
      gsap.to(ref, {
        scale: 1,
        duration: 0.4,
        ease: 'power3.inOut'
      })
    }

    const buttonAnimationMouseLeave = (ref) => {
      gsap.to(ref, {
        scale: 0,
        duration: 0.4,
        ease: 'power3.out'
      })
    }

    const handleGetStartedMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      animateCircle(getStartedCircleRef.current, x, y);
    }

    const handleLoginMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      animateCircle(loginCircleRef.current, x, y);
    }

  return (
    <motion.div 
    initial={{opacity: 0, y: -100}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 1, ease: 'easeInOut'}}
    className={`fixed top-0 left-0 z-50 bg-navbar-bg/80 backdrop-blur-md border-b border-text-body/10 text-text-body flex py-5 justify-between items-center w-full px-10 ${visible ? 'translate-y-0' : '-translate-y-full'} ${transition}`}>
      <div className='flex justify-center items-center gap-2 font-heading font-extrabold'>
        <img className='h-14 w-14 ' src={vitorIQLogo} alt='victor_iq'/>
        <h1 className='text-3xl font-bold text-brand-accent'>Victor<span className='text-brand-gold'>IQ</span></h1>
      </div>

      <div className='flex justify-center items-center gap-10 font-body text-md font-light'>
        <NavLink to='/' className={`${navbarOptionStyles} ${transition}`}>Home</NavLink>
        <NavLink to='/features' className={`${navbarOptionStyles} ${transition}`}>Features</NavLink>
        <NavLink to='/howItWorks' className={`${navbarOptionStyles} ${transition}`}>How It Works</NavLink>
        <NavLink to='/pricing' className={`${navbarOptionStyles} ${transition}`}>Pricing</NavLink>
        <NavLink to='/blog' className={`${navbarOptionStyles} ${transition}`}>Blog</NavLink>
      </div>

      <div className='flex justify-center items-center gap-2 font-body'>
        <button 
        aria-label='Get started with VictorIQ'
        onMouseMove={handleGetStartedMouseMove}
        onMouseEnter={() => buttonAnimationMouseEnter(getStartedCircleRef.current)}
        onMouseLeave={() => buttonAnimationMouseLeave(getStartedCircleRef.current)} 
        className={`px-6 py-2 relative rounded-full border-0 overflow-hidden bg-btn-primary text-btn-primary-text hover:bg-btn-primary-hover hover:shadow-btn-primary-hover cursor-pointer ${transition} `}>
          <span 
          ref={getStartedCircleRef} 
          className='pointer-events-none absolute h-48 w-48 rounded-full bg-btn-primary-hover'
          style={{
            left: 0,
            top: 0,
            transform: 'translate(-50%, -50%) scale(0)'
          }} />
          <span className='relative z-10'>Get Started</span>
        </button>

        <button 
        aria-label='Login to VictorIQ'
        onMouseMove={handleLoginMouseMove}
        onMouseEnter={() => buttonAnimationMouseEnter(loginCircleRef.current)}
        onMouseLeave={() => buttonAnimationMouseLeave(loginCircleRef.current)} 
        className={`px-6 py-2 relative rounded-full overflow-hidden bg-white border border-btn-primary text-btn-primary hover:text-btn-primary-text hover:bg-btn-primary hover:shadow-btn-primary-hover cursor-pointer ${transition} `}>
          <span 
          ref={loginCircleRef} 
          className='pointer-events-none absolute h-48 w-48 rounded-full bg-btn-primary'
          style={{
            left: 0,
            top: 0,
            transform: 'translate(-50%, -50%) scale(0)'
          }} />
          <span className='relative z-10'>Login</span>
        </button>
      </div>
    </motion.div>
  )
}

export default Navbar
