import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom'; // Pastikan hanya Link diimpor
import './prestasinav.css';

const Prestasinav = () => {
  const [active, setActive] = useState(null);
  const langs = [
    { 
      name: "Lomba Keterampilan Siswa", 
      logo: "laptop-outline", 
      jurusan: "RPL", 
      color: "rgba(0, 0, 255, 0.3)", 
      borderColor: "rgba(0, 0, 255, 0.5)",
      description: "Juara 1 LKS IT Software Solution for Bussiness Provinsi DKI Jakarta atas nama Ahmad Zakky X PPL 2"
    },
    { 
      name: "Lomba Keterampilan Siswa", 
      logo: "laptop-outline", 
      jurusan: "RPL", 
      color: "rgba(0, 0, 255, 0.3)", 
      borderColor: "rgba(0, 0, 255, 0.5)",
      description: "Juara 2 LKS IT Software Solution for Bussiness Provinsi DKI Jakarta atas nama Alghifari Ramadhan XI PPL 2"
    },
    { 
      name: "Lomba Keterampilan Siswa", 
      logo: "laptop-outline", 
      jurusan: "RPL", 
      color: "rgba(0, 0, 255, 0.3)", 
      borderColor: "rgba(0, 0, 255, 0.5)",
      description: "Juara 3 LKS Website Provinsi DKI Jakarta atas nama Radithya Satya XI PPL 1"
    },
    { 
      name: "Lomba Keterampilan Siswa", 
      logo: "laptop-outline", 
      jurusan: "RPL", 
      color: "rgba(0, 0, 255, 0.3)", 
      borderColor: "rgba(0, 0, 255, 0.5)",
      description: "Juara 1 LKS Cyber Security Provinsi DKI Jakarta atas nama Bagus Satrio dan Revario Sayyidina XI PPL 1"
    },
    { 
      name: "Lomba Keterampilan Siswa", 
      logo: "laptop-outline", 
      jurusan: "RPL", 
      color: "rgba(0, 0, 255, 0.3)", 
      borderColor: "rgba(0, 0, 255, 0.5)",
      description: "Juara Harapan 1 LKS Website Wilayah Jakarta Timur II atas nama Isa Bayu XI PPL 2"
    },
    { 
      name: "Lomba Keterampilan Siswa", 
      logo: "bed-outline", 
      jurusan: "PH", 
      color: "rgba(255, 20, 147, 0.3)", 
      borderColor: "rgba(255, 20, 147, 0.5)",
      description: "Juara 1 Front Office Wilayah Jakarta Timur II atas nama Dipsy Lala XI PH 3"
    },
    { 
      name: "Lomba Keterampilan Siswa", 
      logo: "fast-food-outline", 
      jurusan: "KL", 
      color: "rgba(255, 255, 0, 0.3)", 
      borderColor: "rgba(255, 255, 0, 0.5)",
      description: "Juara 1 Pastry Wilayah Jakarta Timur II atas nama Tinky Winky XI KUL 2"
    }
  ];

  return (
    <div className='h-screen bg-[#00052a] flex items-center text-white justify-center'>
      <div className="max-w-5xl">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={(cur) => setActive(cur.realIndex)}
          loop={true}
          centeredSlides={true}
          speed={700}
          autoplay={{ delay: 2000 }}
          modules={[Autoplay]}
        >
          {langs.map((lang, i) => (
            <SwiperSlide key={i}>
              <div className='h-96 flex'>
                <div
                  className={`card ${active === i ? 'card-active' : ''}`}
                  style={{
                    background: `linear-gradient(to top, rgba(255, 255, 255, 0.2), ${lang.color})`,
                    borderBottomColor: lang.borderColor
                  }}
                >
                  <div className='logo' style={{ backgroundColor: lang.borderColor }}>
                    <ion-icon name={lang.logo}></ion-icon>
                  </div>
                  <h5 className='text-xl mt-2 font-semibold'>{lang.name}</h5>
                  <p className='para'>{lang.description}</p>
                  <Link to="/selengkapnya">
                    <button 
                      className='baca-selengkapnya' 
                      style={{ backgroundColor: lang.borderColor }}
                    >
                      Baca Selengkapnya
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Prestasinav;
