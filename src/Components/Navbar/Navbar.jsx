import React, {useState} from 'react'
import './navbar.css'
import { FaSchool } from "react-icons/fa6";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
    //code to toggle/show navbar 
    const [active, setActive] = useState('navBar')
    const showNav =()=>{
        setActive('navBar activeNavbar')
    }

    //code to remove navbar
    const removeNav =()=>{
        setActive('navBar')
    }

    //code to add background color to the header 
    const [transparent, setTransparent] = useState('header')
    const addBg = ()=>{
        if(window.scrollY >=10){
            setTransparent('header activeHeader')
        }
        else{
            setTransparent('header')
        }
    }
    window.addEventListener('scroll', addBg)

    return (
        <section className='navBarSection'>
            <div className={transparent}> 

                <div className="logoDiv">
                    <a href="#" className='logo'>
                        <h1 className='flex'><FaSchool className="icon"/>
                            SMKN 24 JAKARTA
                        </h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className='navLists flex'>

                        <li className="navItem">
                            <a href="/home" className="navLink">Home</a>
                        </li>

                        <li className="navItem dropdown">
                            <a href="/profil" className="navLink dropbtn">Profil</a>
                            <div className="dropdown-content">
                                <a href="/profile">Visi Misi</a>
                            </div>
                        </li>

                        <li className="navItem dropdown">
                            <a href="/ekskul" className="navLink dropbtn">Kesiswaan</a>
                            <div className="dropdown-content">
                                <a href="/prestasinav">Prestasi Peserta Didik</a>
                                <a href="/ekskul">Ekstrakurikuler</a>
                                <a href="#daftar-siswa">Daftar Siswa</a>
                            </div>
                        </li>

                        <li className="navItem dropdown">
                            <a href="/sapras" className="navLink dropbtn">Sarpras</a>
                            <div className="dropdown-content">
                                <a href="#fasilitas">Fasilitas</a>
                                <a href="/sapras">Ruang Praktik</a>
                            </div>
                        </li>

                        <li className="navItem dropdown">
                            <a href="#" className="navLink dropbtn">Hubin</a>
                            <div className="dropdown-content">
                                <a href="#kemitraan">Kemitraan</a>
                                <a href="#penelusuran-tamatan">Penelusuran Tamatan</a>
                                <a href="#lulus-ptn">Lulus PTN</a>
                            </div>
                        </li>

                        <li className="navItem dropdown">
                            <a href="#" className="navLink dropbtn">Kurikulum</a>
                            <div className="dropdown-content">
                                <a href="#kejuruan">Kejuruan</a>
                                <a href="#daftar-guru">Daftar Guru</a>
                            </div>
                        </li>

                        <li className="navItem dropdown">
                            <a href="#" className="navLink dropbtn">Info</a>
                            <div className="dropdown-content">
                                <a href="#kegiatan">Kegiatan</a>
                                <a href="#doegram">Doegram</a>
                            </div>
                        </li>

                        <div className="headerBtns flex">
                            <button className='btn contactBtn'>
                                <a href="#">Contact</a>
                            </button>
                            <button className='btn'>
                                <a href="#">Sign Up</a>
                            </button>
                        </div>

                    </ul>

                    <div onClick={removeNav} 
                    className="closeNavbar">
                        <AiFillCloseCircle className="icon"/>
                    </div>
                </div>

                <div onClick={showNav} 
                className="toggleNavbar">
                    <TbGridDots className="icon"/>
                </div>
            </div>
        </section>
    )
}

export default Navbar