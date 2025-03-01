import HeroVideo from "./components/HeroVideo";
import AboutUs from "./components/AboutUs";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import CasosExito from "./components/CasosExito";
import Contacto from "./components/Contacto";
import MarqueeBanner from "./components/MarqueeBanner";

export default function Home() {
  return (
    <>
      <HeroVideo />
      <MarqueeBanner />
      <AboutUs />
      <HowItWorks />
      <Benefits />
      <CasosExito />
      <Contacto />
    </>
  );
}
