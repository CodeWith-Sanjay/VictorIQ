import {motion} from 'framer-motion';
import { useNavbarVisibility } from '../../../hooks/useNavbarVisibility.js';

import Logo from './Logo.jsx';
import NavLinks from './NavLinks.jsx';
import NavbarButtons from './NavbarButtons.jsx';
import MobileBar from './MobileBar.jsx';

const Navbar = () => {

  const {visible, navBg} = useNavbarVisibility();

  return (
    <motion.nav
    initial={{opacity: 0, y: '-100%'}}
    animate={{opacity: 1, y: visible ? 0 : '-100%'}}
    transition={{duration: 0.3, ease: 'easeInOut'}}
    className={`fixed top-0 left-0 z-50 backdrop-blur-3xl border-text-body/10 text-text-body flex py-5 justify-between items-center w-full px-10 ${navBg ? '' : 'bg-transparent border-0'}`}>

    <motion.div
    className='w-full flex lg:hidden'>
      <MobileBar />
    </motion.div>

      <div className='hidden lg:flex w-full justify-between items-center'>
      <Logo />
      <NavLinks />
      <NavbarButtons />
      </div>

      
    </motion.nav>
  )
}

export default Navbar
