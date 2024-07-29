import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Prestasi from './Components/Prestasi/Prestasi';
import Offer from './Components/Testimonial/Testimonial';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Ekskul from './Components/ekskul/Eskul';
import Navbar from './Components/Navbar/Navbar';
import Sapras from './Components/Sapras/Sapras';
import Profil from './Components/Profile/Profile';
import Prestasinav from './Components/Prestasinav/Prestasinav';
import Article from './Components/Prestasinav/Article'; // Pastikan Artikel diimpor

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<Prestasi />} />
                    <Route path="/ekskul" element={<Ekskul />} />
                    <Route path="/sapras" element={<Sapras />} />
                    <Route path="/profile" element={<Profil />} />
                    <Route path="/prestasinav" element={<Prestasinav />} />
                    <Route path="/selengkapnya" element={<Article />} />
                    <Route path="/" element={<Blog />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
