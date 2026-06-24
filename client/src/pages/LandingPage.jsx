import Navbar from "../components/landing/Navbar/Navbar";
import Hero from "../components/landing/Hero/Hero";
import Features from "../components/landing/Features/Features";
import HowItWorks from "../components/landing/HowItWorks/HowItWorks";
import Pricing from "../components/landing/Pricing/Pricing";
import Footer from "../components/landing/Footer/Footer.jsx";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Footer />      
    </div>
  )
}

export default LandingPage
