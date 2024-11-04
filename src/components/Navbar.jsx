// src/components/Navbar.jsx
function Navbar() {
    return (
      <nav className="flex items-center justify-between px-8 py-4 bg-black text-white">
        <div className="text-2xl font-bold">GelTechInnovators</div>
        <ul className="flex space-x-8">
          <button className="px-4 py-2 rounded-lg transition duration-500 hover:bg-gray-600">Home</button>
          <button className="px-4 py-2 rounded-lg transition duration-500 hover:bg-gray-600">Models</button>
          <button className="px-4 py-2 rounded-lg transition duration-500 hover:bg-gray-600">Gallery</button>
          <button className="px-4 py-2 rounded-lg transition duration-500 hover:bg-gray-600">Contact</button>
        </ul>
      </nav>
    );
}

export default Navbar;