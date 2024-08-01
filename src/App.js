import React from 'react'
import './App.css'
import Home from './Components/Main/Home/Home'
import Prestasi from './Components/Main/Prestasi/Prestasi'
import Offer from './Components/Main/Offers/Offer'
import About from './Components/Main/About/About'
import Blog from './Components/Main/Blog/Blog'
import Footer from './Components/Main/Footer/Footer'
import Navbar from './Components/Main/Navbar/Navbar'
import { BrowserRouter,Routes,Route, Outlet } from 'react-router-dom'
import Login from './Components/DashboardAdmin/Login/Login'
import DaftarSiswa from './Components/DashboardAdmin/DaftarSiswa/DaftarSiswa.jsx'
import Walas from './Components/DashboardAdmin/Walas/Walas.jsx'
import Kelas from './Components/DashboardAdmin/Kelas/Kelas.jsx'


const App = () => {

    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route element={<WithNavbar/>}>
                    <Route path='/' element={<Home/>}/>
                </Route>
                <Route path='/login' element={<Login/>}/>
                <Route path='/dashboard' element={<Dashboard/>}>
                    <Route path='daftarsiswa' element={<DaftarSiswa/>}/>
                    <Route path='walas' element={<Walas/>}/>
                    <Route path='kelas' element={<Kelas/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        </>
        // <>
        // <Navbar/>
        // <Home/>
        // <Prestasi/>
        // {/* <Offer/>
        // <About/>
        // <Blog/> */}
        // <Footer/>
        // </>
    )
}

function WithNavbar(){
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Prestasi/>
            <Footer/>
        </>
    );
}

function Dashboard(){
    return (
        <>
            <Outlet/>
        </>
    )
}


export default App