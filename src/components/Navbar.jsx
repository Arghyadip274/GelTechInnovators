// src/components/Navbar.jsx
function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
    }
  };

  return (
    <nav className="flex items-center justify-start px-4 py-4 bg-black text-white">
      <img src="/istockphoto-1128250636-612x612.jpg" alt="Logo" className="mr-2 w-15 h-14 rounded-full" />
      <div className="text-2xl font-bold">GelTechInnovators</div>
      <ul className="flex space-x-8 ml-auto">
        <button 
          className="px-4 py-2 rounded-lg transition duration-500 hover:bg-gray-600" 
          onClick={() => scrollToSection('home')}
        >
          Home
        </button>
        <button 
          className="px-4 py-2 rounded-lg transition duration-500 hover:bg-gray-600" 
          onClick={() => scrollToSection('product')}
        >
          Product
        </button>
        <button 
          className="px-4 py-2 rounded-lg transition duration-500 hover:bg-gray-600" 
          onClick={() => scrollToSection('gallery')}
        >
          Gallery
        </button>
        <button 
          className="px-4 py-2 rounded-lg transition duration-500 hover:bg-gray-600" 
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;