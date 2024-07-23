import React from 'react'
import './home.css'

const Home = () => {
    return (
        <section className='home'>
            <div className="secContainer container">

                <div className="homeText">

                    <h1 className="title">
                        Selamat datang di SMKN 24 JAKARTA
                    </h1>
                    <p className="subTitle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente enim corporis dolores, corrupti, dignissimos delectus repellendus maiores temporibus commodi itaque expedita beatae veritatis quas voluptatum eveniet saepe porro, ipsa deleniti.
                    </p>

                    <button className="btn">
                        <a href="#">Explore Now</a>
                    </button>
                </div>

                <div className="homeCard grid">
                    <h3>Isi sendiri gess</h3>
                    <br /><br /><br /><br /><br />
                </div>
            </div>
        </section>
    )
}

export default Home