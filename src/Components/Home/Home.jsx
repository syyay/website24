import React from 'react'
import './home.css'
import { Outlet } from 'react-router-dom';
import Prestasi from '../Prestasi/Prestasi';


const Home = () => {
    return (
        <section className='home24'>
            <div className="secContainerHome container">

                <div className="homeText24">

                    <h1 className="titleHome24">
                        Selamat datang di SMKN 24 JAKARTA
                    </h1>
                    <p className="subTitleHome">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente enim corporis dolores, corrupti, dignissimos delectus repellendus maiores temporibus commodi itaque expedita beatae veritatis quas voluptatum eveniet saepe porro, ipsa deleniti.
                    </p>

                    <button className="btnHome24">
                        <a href="#">Explore Now</a>
                    </button>
                </div>

                <div className="homeCard24 grid">
                    <h3>Isi sendiri gess</h3>
                    <br /><br /><br /><br /><br />
                </div>
                <Prestasi />
            </div>
        </section>
    )
}

export default Home