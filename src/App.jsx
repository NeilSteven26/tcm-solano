import About from "./components/About";
import Contact from "./components/Contact";
import CoreValues from "./components/CoreValues";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import MCBrand from "./components/MCBrand";
import Visionmission from "./components/Visionmission";
import HondaMotors from "./components/MotorsHonda";
import YamahaMotors from "./components/MotorsYamaha";
import SuzukiMotors from "./components/MotorsSuzuki";
import KawasakiMotors from "./components/MotorsKawasaki";
import Carousel from "./components/Carousel";
import Spareparts from "./components/Spareparts";
import Services from "./components/Services";


const App = () => {
  return (
    <>
      <Carousel />
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-gradient-to-r from-blue-500 to-red-500 "></div>
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Visionmission />
          <CoreValues />
          <MCBrand />
          <HondaMotors />
          <YamahaMotors />
          <SuzukiMotors />
          <KawasakiMotors />
          <Spareparts/>
          <Services/>
          <Contact />
        </div>
      </div>
    </>

  );
};

export default App;
