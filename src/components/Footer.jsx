// src/components/Footer.jsx
function Footer() {
    return (
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto flex flex-col items-center">
          <p className="text-lg mb-2">
            Contact us: <a href="mailto:arghyadipmondal274@gmail.com" className="underline">arghyadipmondal274@gmail.com</a>
          </p>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} GelTechInnovators. All trademarks are property of their respective owners.
          </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  