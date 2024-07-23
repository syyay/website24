import React from 'react'
import './footer.css'
import { FaSchool } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="secContainer container grid">
                <div className="logoDiv">

                    <div className="footerLogo">
                        <a href="#" className="logo flex">
                            <h1 className='flex'><FaSchool className="icon"/>
                            Dot</h1>
                        </a>
                    </div>

                    <div className="socials flex">
                    <AiFillInstagram className='icon'/>
                    <BsTwitter className='icon'/>
                    <BsYoutube className='icon'/>
                </div>

                </div>

                <div className="footerLinks">
                    <span className="linkTitle">
                        Information
                    </span>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Jurusan</a>
                    </li>
                    <li>
                        <a href="#">Prestasi</a>
                    </li>
                </div>

                <div className="footerLinks">
                    <span className="linkTitle">
                        Contact Us
                    </span>
                    <span className='phone'>+62 2184-7348-2738</span>
                    <span className='email'>example@gmail.com</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
