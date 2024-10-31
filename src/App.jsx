// src/App.jsx
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ModelsShowcase from './components/ModelsShowcase';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ModelsShowcase />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default App;
