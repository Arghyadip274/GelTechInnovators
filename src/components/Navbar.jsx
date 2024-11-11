// src/components/Navbar.jsx
function Navbar() {
  return (
    <nav className="flex items-center justify-start px-4 py-4 bg-black text-white"> {/* Changed justify-between to justify-start and reduced padding */}
      <img src="/istockphoto-1128250636-612x612.jpg" alt="Logo" className="mr-2 w-13 h-14 " /> {/* Added width and height classes */}
      <div className="text-2xl font-bold">GelTechInnovators</div>
      <ul className="flex space-x-8 ml-auto"> {/* Added ml-auto to push the buttons to the right */}
        <button className="px-4 py-2 rounded-lg transition duration-500 hover:bg-gray-600">
          Home
        </button>
        <button className="px-4 py-2 rounded-lg transition duration-500 hover:bg-gray-600">
          Models
        </button>
        <button className="px-4 py-2 rounded-lg transition duration-500 hover:bg-gray-600">
          Gallery
        </button>
        <button className="px-4 py-2 rounded-lg transition duration-500 hover:bg-gray-600">
          Contact
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;