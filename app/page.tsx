import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import About from '@/sections/About';
import Contact from '@/sections/Contact';
import FutureProjects from '@/sections/FutureProjects';
import GetInvolved from '@/sections/GetInvolved';
import Hero from '@/sections/Hero';
import Impact from '@/sections/Impact';
import OurWork from '@/sections/OurWork';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <OurWork />
      <GetInvolved />
      <Impact />
      <FutureProjects />
      <Contact />
      <Footer />
    </>
  );
}
