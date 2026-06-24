import {useState, useEffect, useRef} from 'react';
import { useLocation } from 'react-router-dom';

export function useNavbarVisibility() {
  
  const location = useLocation();

    const [visible, setVisible] = useState(true);
    const [navBg, setNavBg] = useState(false);

    const lastScrollY = useRef(0);
    useEffect(() => {

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if(currentScrollY > 400 && location.pathname === '/') {
          setNavBg(true);
        } else {
          setNavBg(false);
        }
    
        if(currentScrollY > lastScrollY.current && currentScrollY > 30) {
              setVisible(false)
            } else {
              setVisible(true);
            }

            lastScrollY.current = currentScrollY;
          }

          window.addEventListener('scroll', handleScroll, {passive: true});
          return () => {
            window.removeEventListener('scroll', handleScroll);
          }
    }, []);

    return {visible, navBg};
}