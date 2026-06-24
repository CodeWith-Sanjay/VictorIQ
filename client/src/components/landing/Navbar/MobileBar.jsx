import { useContext } from 'react';
import {Menu, X} from 'lucide-react';
import {motion} from 'framer-motion';

import MobileOptions from '../Navbar/MobileOptions.jsx';
import { NavContext } from './NavContext.jsx';

const MobileBar = () => {

  const {isOpen, handleMobileNav} = useContext(NavContext);

  return (
    <div className='flex-col justify-center items-center w-full'>
    <div className={`flex w-full lg:hidden items-center justify-end`}>

        <button 
        onClick={handleMobileNav}
        className=''>
            {isOpen ?
            <X className='w-10 h-8 text-btn-danger/70 hover:text-btn-danger' /> :
            <Menu className='w-10 h-8 text-btn-primary/80 hover:text-btn-primary'/>}
        </button>

        

    </div>
    {isOpen && 
    <motion.div
    className='w-full bg-transparent flex justify-center items-center'
    initial={{y: '-90%', opacity: 0}}
    animate={{y: 0, opacity: 1}}
    transition={{duration: 0.5, ease: 'easeInOut', }}>
      <MobileOptions />
    </motion.div>
    }
    </div>

  )
}

export default MobileBar
