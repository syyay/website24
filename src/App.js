import React from 'react'
import './app.css'
import Home from './Components/Home/Home'
import Prestasi from './Components/Prestasi/Prestasi'
import Offer from './Components/Offers/Offer'
import About from './Components/About/About'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
    return (
        <>
        <Navbar/>
        <Home/>
        <Prestasi/>
        {/* <Offer/>
        <About/>
        <Blog/> */}
        <Footer/>
        </>
    )
}

export default App