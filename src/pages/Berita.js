import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

function Berita() {
  const news = [
    {
      id: 1,
      slug: "kemenangan-besar",
      title: "Kemenangan Besar",
      description:
        "Tim kami meraih kemenangan gemilang dengan skor 3-0 melawan rival abadi. Pertandingan ini berlangsung dengan intensitas tinggi sejak awal hingga akhir. Gol pertama dicetak pada menit ke-15 oleh striker andalan kami setelah memanfaatkan umpan silang sempurna dari sisi kanan. Gol kedua terjadi melalui tendangan bebas yang luar biasa, sementara gol ketiga tercipta di babak kedua melalui serangan balik cepat. Kemenangan ini memberikan motivasi besar bagi tim untuk menghadapi laga-laga berikutnya.",
      image: "/assets/pic_1.jpg",
    },
    {
      id: 2,
      slug: "pemain-baru-bergabung",
      title: "Pemain Baru Bergabung",
      description:
        "Pemain muda berbakat bergabung dengan tim untuk memperkuat skuad di musim mendatang. Pemain ini dikenal dengan kecepatan, teknik tinggi, dan kemampuan mencetak gol dari berbagai sudut. Dalam wawancara, ia mengungkapkan rasa bangga bisa bergabung dengan klub ini dan berkomitmen memberikan yang terbaik untuk tim. Kehadirannya diharapkan mampu menambah variasi serangan dan memberikan kontribusi besar dalam setiap pertandingan.",
      image: "/assets/about.jpg",
    },
    {
      id: 3,
      slug: "turnamen-mendatang",
      title: "Turnamen Mendatang",
      description:
        "Persiapan intensif sedang dilakukan untuk menghadapi turnamen besar yang akan datang. Tim pelatih telah menyusun strategi dan program latihan khusus untuk meningkatkan performa para pemain. Selain itu, analisis terhadap lawan juga dilakukan agar tim dapat tampil maksimal. Turnamen ini merupakan ajang yang sangat dinanti, karena akan mempertemukan tim-tim terbaik dari berbagai daerah. Dukungan dari para penggemar sangat penting untuk memberikan semangat kepada tim di setiap pertandingan.",
      image: "/assets/pic_3.jpg",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto">
        <Breadcrumbs />
        <h2 className="text-5xl font-extrabold text-gray-800 mb-6 text-center">
          Berita
        </h2>
        <p className="text-xl text-gray-600 mb-10 text-center">
          Informasi terbaru tentang perjalanan tim kami.
        </p>
        <div className="space-y-10">
          {news.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row p-2 items-center bg-gray-100 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-1/3 h-auto object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
                <Link
                  to={`/berita/${item.slug}`}
                  className="text-blue-600 hover:underline mt-4 block"
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Berita;
