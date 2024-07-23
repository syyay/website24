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
                            <a href="" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Profil</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Kesiswaan</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Sarpras</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Hubin</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Kurikulum</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Info</a>
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