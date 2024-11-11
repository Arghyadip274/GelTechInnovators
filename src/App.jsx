// src/App.jsx
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ImageSliderComparison from './components/ImageSliderComparison';
import ModelsShowcase from './components/ModelsShowcase';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ImageSliderComparison image1="/fuel_injector.jpg" image2="/Gel_injector.jpg" />
      <ModelsShowcase />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default App;
