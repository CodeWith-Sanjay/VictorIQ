import { useRef } from "react";

import { transition } from "../../../utils/animation.js";
import { buttonAnimation } from "../../../hooks/buttonAnimation.js";

const NavbarButtons = () => {

    const loginCircleRef = useRef(null);

    const {handleMouseMove, buttonAnimationMouseEnter, buttonAnimationMouseLeave} = buttonAnimation();

  return (
    <div className='flex justify-center items-center gap-2 font-body'>

        <button 
        aria-label='Login to VictorIQ'
        onMouseMove={(e) => handleMouseMove(e, loginCircleRef)}
        onMouseEnter={() => buttonAnimationMouseEnter(loginCircleRef.current)}
        onMouseLeave={() => buttonAnimationMouseLeave(loginCircleRef.current)} 
        className={`px-6 py-2 relative rounded-full overflow-hidden bg-btn-primary text-btn-primary-text hover:text-btn-primary-text hover:bg-btn-primary-hover hover:shadow-btn-primary-hover cursor-pointer ${transition} `}>
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
  )
}

export default NavbarButtons
