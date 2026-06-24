import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { navItems } from "../../../data/navNavigation";

const MobileOptions = () => {
  return (
    <motion.div
    className="flex-col justify-center items-center lg:hidden bg-transparent w-auto w-full sm:w-auto sm:min-w-sm">
      {navItems.map((item) => {
        return (
          <NavLink
            className="flex items-center justify-center my-3 text-text-body hover:text-text-link"
            key={item.id}
            to={item.path}
          >
            {item.label}
          </NavLink>
        );
      })}
    </motion.div>
  );
};

export default MobileOptions;
