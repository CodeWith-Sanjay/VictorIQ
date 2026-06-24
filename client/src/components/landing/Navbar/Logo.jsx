import {motion} from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

import victorIQ_Icon from '../../../assets/logos/victoriq-icon.png';

const Logo = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const handleLogoClick = () => {
        if(location.pathname === '/') {
            window.scrollTo({top: 0, behavior: 'smooth'})
        } else {
            navigate('/').then(() => {
                window.scrollTo({top: 0, behavior: 'smooth'});
            });
        }
    }
  return (
    <motion.div
    onClick={handleLogoClick}
      className='flex justify-center items-center gap-2 font-heading font-extrabold cursor-pointer hover:scale-102 transition-all duration-250 ease-in-out'>
        <img className='h-12 w-12' src={victorIQ_Icon} alt='victor_iq'/>
        <h1 className='text-3xl font-bold text-brand-accent'>Victor<span className='text-brand-gold'>IQ</span></h1>
    </motion.div>
  )
}

export default Logo
