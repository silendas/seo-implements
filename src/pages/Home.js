import React, { useState, useEffect } from "react";

function App() {
  const heroImages = [
    "/assets/pic_1.jpg",
    "/assets/pic_2.jpg",
    "/assets/pic_3.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div className="relative h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                className="w-full h-full object-cover"
                alt={`Slide ${index}`}
                loading="lazy"
              />
            </div>
          ))}
          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-8 bg-black/50">
            <h1 className="text-6xl font-bold leading-tight">
              Discover Amazing <span className="text-yellow-400">Soccer Skills</span>
            </h1>
            <p className="text-2xl text-gray-200 max-w-2xl mx-auto">
              Join Youth Tiger Soccer School and enhance your game
            </p>
          </div>
          {/* Carousel Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-yellow-400" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <img
            src="/assets/about.jpg"
            alt="About Us"
            loading="lazy"
            className="rounded-xl shadow-lg w-full lg:w-1/2"
          />
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
              Tentang Kami
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Youth Tiger Soccer School berdedikasi untuk mengembangkan bakat sepak bola
              dan memberikan pemain muda alat dan keterampilan yang mereka butuhkan untuk
              unggul di dalam dan luar lapangan. Misi kami adalah menginspirasi dan
              memberdayakan generasi muda melalui indahnya permainan sepak bola, dengan
              menanamkan nilai kerja sama tim, disiplin, dan sportivitas.
            </p>
          </div>
        </div>
      </section>

      {/* Training Schedule Section */}
      <section id="schedule" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800">
            Jadwal Latihan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Senin - Kamis</h3>
              <ul className="space-y-2">
                <li className="flex justify-between text-gray-800">
                  <span>Latihan Dasar</span>
                  <span>16:00 - 18:00</span>
                </li>
                <li className="flex justify-between text-gray-800">
                  <span>Permainan Tim</span>
                  <span>18:00 - 20:00</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Minggu</h3>
              <ul className="space-y-2">
                <li className="flex justify-between text-gray-800">
                  <span>Turnamen Mini</span>
                  <span>10:00 - 14:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-100 relative">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12 px-4">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl lg:w-1/2">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Hubungi Kami</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-gray-700 font-medium">Nama</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-white"
                  placeholder="Nama Anda"
                />
              </div>
              <div className="space-y-2">
                <label className="text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-white"
                  placeholder="email@contoh.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-gray-700 font-medium">Pesan</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-white"
                  placeholder="Tulis pesan Anda..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 transform hover:-translate-y-1 transition-all duration-300"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="rounded-2xl shadow-xl overflow-hidden lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8494843689373!2d106.75821187480601!3d-6.54068379345214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c30068d16a6b%3A0x62dc60370020f5bc!2sYouth%20Tiger%20Soccer%20School!5e0!3m2!1sid!2sid!4v1736323352049!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen=""
              loading="lazy"
              title="map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
