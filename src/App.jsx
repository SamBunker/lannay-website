import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BioBeach from './components/BioBeach';
import About from './components/About';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import SandFloor from './components/SandFloor';
import Footer from './components/Footer';
import DepthMeter from './components/DepthMeter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <BioBeach />
        <About />
        <Stats />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <SandFloor />
      <Footer />
      <DepthMeter />
    </div>
  );
}

export default App;
