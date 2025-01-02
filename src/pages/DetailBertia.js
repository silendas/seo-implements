import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

function DetailBerita() {
  const { slug } = useParams(); // Ambil slug dari URL
  const navigate = useNavigate();
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

  const newsItem = news.find((item) => item.slug === slug); // Cocokkan dengan slug

  if (!newsItem) {
    return (
      <div className="text-center py-24">
        <h2 className="text-3xl font-bold">Berita tidak ditemukan</h2>
        <button
          onClick={() => navigate("/berita")}
          className="mt-4 text-blue-600 hover:underline"
        >
          Kembali ke Berita
        </button>
      </div>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto max-w-3xl">
        <Breadcrumbs />
        <img
          src={newsItem.image}
          alt={newsItem.title}
          className="w-full h-auto object-cover rounded-lg mb-6"
        />
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          {newsItem.title}
        </h2>
        <p className="text-gray-600 text-lg">{newsItem.description}</p>
        <button
          onClick={() => navigate("/berita")}
          className="mt-6 text-blue-600 hover:underline"
        >
          Kembali ke Berita
        </button>
      </div>
    </section>
  );
}

export default DetailBerita;
