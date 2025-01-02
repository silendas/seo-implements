import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-orange-400 py-12">
      <div className="container mx-auto text-center">
        <p className="text-lg">© 2023 Youth Tiger Soccer School. All rights reserved.</p>
        <div className="mt-4 space-x-6">
          <a href="#" className="hover:text-white transition-colors">Privasi</a>
          <a href="#" className="hover:text-white transition-colors">Ketentuan</a>
          <a href="#" className="hover:text-white transition-colors">Dukungan</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
