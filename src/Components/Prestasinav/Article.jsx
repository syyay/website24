import React from 'react';
import { Link } from 'react-router-dom';
import image3 from '../../Components/ekskul/image_eskul/1.jpg';
import image4 from '../../Components/ekskul/image_eskul/1.jpg';
import image5 from '../../Components/ekskul/image_eskul/1.jpg';

const Article = () => {
  const images = [image3, image4, image5];

  return (
    <div className='h-screen bg-[#f0f0f0] flex items-center justify-center'>
      <div className="max-w-7xl bg-white p-8 rounded shadow-md flex">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold mb-4">Lomba Keterampilan Siswa</h1>
          <p className="text-lg mb-4">
            Lomba Keterampilan Siswa (LKS) adalah ajang kompetisi kejuruan bagi siswa-siswa Sekolah Menengah Kejuruan (SMK) di Indonesia. Lomba ini bertujuan untuk mengukur dan meningkatkan kompetensi siswa dalam bidang keahlian masing-masing.
          </p>
          <p className="text-lg mb-4">
            Pada tahun ini, siswa SMK dari berbagai jurusan seperti Rekayasa Perangkat Lunak (RPL), Teknik Komputer dan Jaringan (TKJ), dan lainnya bersaing dalam berbagai kategori lomba, termasuk IT Software Solution for Business. Salah satu siswa yang berprestasi adalah Ahmad Zakky dari kelas X RPL 2 yang berhasil meraih Juara 1 di tingkat provinsi DKI Jakarta.
          </p>
          <p className="text-lg mb-4">
            Prestasi ini menjadi kebanggaan bagi sekolah dan diharapkan dapat memotivasi siswa lainnya untuk terus berusaha dan mengembangkan keahlian mereka.
          </p>
          <Link to="/">
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Kembali</button>
          </Link>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center relative">
          <img src={image3} alt="Foto 1" className="mb-4 rounded shadow-lg transition transform hover:scale-105 duration-300 w-56 h-56 absolute top-0 right-60" />
          <img src={image4} alt="Foto 2" className="mb-4 rounded shadow-lg transition transform hover:scale-105 duration-300 w-56 h-56 absolute bottom-0 right-60" />
          <img src={image5} alt="Foto 3" className="rounded shadow-lg transition transform hover:scale-105 duration-300 w-56 h-56 absolute top-1/4 right-0" />
        </div>
      </div>
    </div>
  );
};

export default Article;