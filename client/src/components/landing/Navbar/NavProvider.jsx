import { useState } from "react";
import { NavContext } from "./NavContext";

const NavProvider = ({children}) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleMobileNav = () => {
        setIsOpen(!isOpen);
    }
    return (
    <NavContext.Provider
    value={{isOpen, handleMobileNav}}>
        {children}
    </NavContext.Provider>
    );
}

export default NavProvider