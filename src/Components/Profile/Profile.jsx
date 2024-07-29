import React, { useState, useEffect } from 'react';
import './profile.css';

const Profile = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Delay the animation by 1 second
    const timeoutId = setTimeout(() => {
      setShowAnimation(true);
    }, 1000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="profil-container">
      <div className="profil-container2">
        <div className="profil-header">
          <h1 className="profil-title">VISI & MISI SMKN 24 JAKARTA</h1>
        </div>
        <div class="profil-content">
          <div class="profil-section-wrapper">
            <div class="profil-section">
              <h2 class="profil-section-title">Visi</h2>
              <p class="profil-section-visi">Mewujudkan tamatan yang beriman, bertaqwa, terampil, mandiri dan unggul dalam prestasi serta berwawasan lingkungan</p>
            </div>
            <div class="profil-section-misi">
              <h2 class="profil-section-title">Misi</h2>
              <p class="profil-section-text">Menanamkan keimanan dan ketakwaan kepada Tuhan Yang Maha Esa</p>
              <p class="profil-section-text">Mengembangkan kompetensi keahlian berdasarkan bakat, minat dan potensi peserta didik</p>
              <p class="profil-section-text">Membina kemandirian peserta didik melalui kegiatan pembiasaan, kewirausahaan, dan pengembangan diri yang berencana dan berkesinambungan</p>
              <p class="profil-section-text">Menghasilkan tamatan yang mandiri, dapat mengisi lapangan pekerjaan dunia usaha dan industri serta melanjutkan ke perguruan tinggi</p>
              <p class="profil-section-text">Menciptakan lingkungan yang sehat untuk mendukung optimalisasi kegiatan belajar mengajar</p>
            </div>
          </div>
        </div>

          <div className="profil-header-tujuan">
            <h2 className="profil-footer-title">TUJUAN SMKN 24 JAKARTA</h2>
          </div>
  
          <div className="profil-tujuan">
            <div className="profil-footer-content">
              <h3 className="profil-footer-content-title">Tujuan</h3>
              <p className="profil-footer-content-text">Menerapkan budaya sekolah yang religius melalui kegiatan keagamaan</p>
              <p className="profil-footer-content-text">Menerapkan 5S (Senyum, Sapa, Salam, Sopan, Santun)</p>
              <p className="profil-footer-content-text">Menyelenggarakan pengembangan diri sehingga peserta didik dapat berkembang sesuai bakat, minat dan kompetensi keahlian</p>
              <p className="profil-footer-content-text">Membekali peserta didik dengan kompetensi keahlian sehingga mampu memenuhi kebutuhan dunia usaha dan industri</p>
              <p className="profil-footer-content-text">Membekali peserta didik dengan ilmu pengetahuan dan teknologi sehingga dapat meraih prestasi</p>
              <p className="profil-footer-content-text">Menciptakan situasi dan kondisi yang mendukung optimalisasi kegiatan belajar mengajar</p>
            </div>
          </div>

          <div className="profil-header-sambutan">
            <h2 className="profil-footer-title2">SAMBUTAN KEPALA SEKOLAH SMKN 24 JAKARTA</h2>
          </div>
          <div className="profil-sambutan">
            <div className="profil-footer-content">
            <h3 className="profil-footer-content-title">Sambutan</h3>
              <p className="profil-footer-content-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet quidem cum vel possimus, non blanditiis repellendus fugiat? Corporis dolorem dolor, recusandae provident reiciendis dolorum harum excepturi iusto minima. Quaerat.</p>
              <p className="profil-footer-content-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet quidem cum vel possimus, non blanditiis repellendus fugiat? Corporis dolorem dolor, recusandae provident reiciendis dolorum harum excepturi iusto minima. Quaerat.</p>
            </div>
            <div className="foto">
              <img src="./school.jpg" alt="kepsek" />
              <p className="foto-caption">Kepala Sekolah SMKN 24 Jakarta</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Profile;