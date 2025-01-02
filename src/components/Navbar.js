import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-orange-600 p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-extrabold tracking-tight">
          Youth<span className="text-yellow-400">Tiger</span>
        </h1>
        <div className="space-x-8">
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
      </div>
    </nav>
  );
}

export default Navbar;
