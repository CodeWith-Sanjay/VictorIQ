import { motion, useScroll, useTransform } from "framer-motion";
import VictorIQ_Hero_Image from '../../../assets/victoriq_hero_visual_concept.png';

const HeroBackground = () => {

  const {scrollY} = useScroll();

  const imageY = useTransform(
    scrollY,
    [0, 600],
    [0, -400]
  );


  return (
    <motion.div className="w-full">

      <motion.img style={{y: imageY}} src={VictorIQ_Hero_Image} className="min-h-screen bg-cover w-full "/>

    </motion.div>
  );
};

export default HeroBackground;
