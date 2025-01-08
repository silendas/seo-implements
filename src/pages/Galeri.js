import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";

function Galery() {
  const images = [
    "/assets/pic_1.jpg",
    "/assets/pic_2.jpg",
    "/assets/pic_3.jpg",
    "/assets/about.jpg"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto text-center">
        <Breadcrumbs />
        <h2 className="text-5xl font-extrabold text-gray-800 mb-6">Galeri</h2>
        <p className="text-xl text-gray-600 mb-10">
          Kenangan indah dalam perjalanan sepak bola kami.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={image}
                alt={`Galeri ${index + 1}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Galery;
