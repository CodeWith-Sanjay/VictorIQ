import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

const Hero = () => {

  return (
    <section className="relative p-0 m-0 w-full h-150 md:min-h-screen flex items-center justify-center font-body bg-linear-to-tr from-btn-ghost to-page-alt overflow-hidden">
      <HeroBackground />
      <HeroContent />      
    </section>
  );
};

export default Hero;
