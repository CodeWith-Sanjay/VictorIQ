import { transition } from '../../../utils/animation.js';
import {NavLink} from 'react-router-dom';
import { navItems } from '../../../data/navNavigation.js';

const NavLinks = () => {

    const navbarOptionStyles = 'tracking-wide text-nav-link hover:text-page-bg active:text-nav-link-active cursor-pointer';
    

  return (
    <div className='flex justify-center items-center gap-10 font-body text-md font-light'>
        {navItems.map((item) => {
            return <NavLink key={item.id} to={item.path} className={`${navbarOptionStyles} ${transition}`}>{item.label}</NavLink>
        })}       
    </div>
  )
}

export default NavLinks
