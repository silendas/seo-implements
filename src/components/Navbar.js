import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-orange-600 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-extrabold tracking-tight">
          Youth<span className="text-yellow-400">Tiger</span>
        </h1>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-yellow-400 transition-colors font-medium">
            Home
          </Link>
          <Link to="/berita" className="text-white hover:text-yellow-400 transition-colors font-medium">
            Berita
          </Link>
          <Link to="/galeri" className="text-white hover:text-yellow-400 transition-colors font-medium">
            Galeri
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-orange-600 mt-2">
          <Link
            to="/"
            className="block text-white hover:text-yellow-400 transition-colors font-medium border-b border-yellow-400 pb-2"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/berita"
            className="block text-white hover:text-yellow-400 transition-colors font-medium border-b border-yellow-400 pb-2"
            onClick={toggleMenu}
          >
            Berita
          </Link>
          <Link
            to="/galeri"
            className="block text-white hover:text-yellow-400 transition-colors font-medium border-b border-yellow-400 pb-2"
            onClick={toggleMenu}
          >
            Galeri
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
