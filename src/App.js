import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fancy Gradient Navigation */}
      <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-3xl font-extrabold tracking-tight">
            Travel<span className="text-yellow-400">Adventure</span>
          </h1>
          <div className="space-x-8">
            <a href="#home" className="text-white hover:text-yellow-400 transition-colors font-medium">Home</a>
            <a href="#about" className="text-white hover:text-yellow-400 transition-colors font-medium">About</a>
            <a href="#contact" className="text-white hover:text-yellow-400 transition-colors font-medium">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Overlay */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1682687220742-aba13b6e50ba')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative text-center text-white space-y-8">
          <h1 className="text-6xl font-bold leading-tight">
            Discover Amazing <span className="text-yellow-400">Places</span>
          </h1>
          <p className="text-2xl text-gray-200 max-w-2xl mx-auto">
            Embark on unforgettable journeys and create lasting memories
          </p>
          <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg 
            hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-xl">
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Popular Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {['Bali', 'Paris', 'Tokyo'].map((city) => (
              <div key={city} className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src={`https://source.unsplash.com/600x400/?${city}`}
                    alt={city}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{city}</h3>
                      <p className="text-gray-200">Discover the magic</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-100">
        <div className="container mx-auto max-w-xl px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Get in Touch</h2>
          <form className="space-y-6 bg-white p-8 rounded-2xl shadow-xl">
            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                placeholder="Tell us about your dream vacation..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-lg 
                font-bold text-lg hover:opacity-90 transform hover:-translate-y-1 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto text-center">
          <p className="text-lg">© 2023 TravelAdventure. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;