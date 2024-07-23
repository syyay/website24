import React from 'react'
import './prestasi.css'

import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

//import the img ==========>
    import img2 from '../../Assets/school.jpg'
    import img3 from '../../Assets/school.jpg'
    import img4 from '../../Assets/school.jpg'
    import img5 from '../../Assets/school.jpg'

const Data = [
    {
        id: 1,
        imgSrc: img2,
        presTitle: 'Prestasi 1',
        presDesc: 'Lorem ipsum',
        date: '04/01/2024',
    },

    {
        id: 2,
        imgSrc: img3,
        presTitle: 'Prestasi 2',
        presDesc: 'Lorem ipsum',
        date: '04/01/2024',
    },

    {
        id: 3,
        imgSrc: img4,
        presTitle: 'Prestasi 3',
        presDesc: 'Lorem ipsum',
        date: '04/01/2024',
    },

    {
        id: 4,
        imgSrc: img5,
        presTitle: 'Prestasi 4',
        presDesc: 'Lorem ipsum',
        date: '04/01/2024',
    },
]

const Prestasi = () => {
    return (
        <section className='prestasi section container'>
            <div className="secContainer">

                <div className="secHeader flex">
                    <div className="textDiv">
                        <h2 className="secTitle">
                            Prestasi Peserta Didik
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laboriosam
                        </p>
                    </div>

                    <div className="iconsDiv flex">
                        <BsArrowLeftShort className="icon leftIcon"/>
                        <BsArrowRightShort className="icon"/>
                    </div>
                </div>

                <div className="mainContent grid">
                    {
                        Data.map(({id, imgSrc, presTitle, presDesc, date})=>{
                            return(
                                <div className="singlePrestasi">
                                    <div className="presImage">
                                        <img src={imgSrc} alt="Image title" />

                                        <div className="overlayInfo">
                                            <h3>{presTitle}</h3>
                                            <p>
                                                {presDesc}
                                            </p>

                                            <BsArrowRightShort className="icon"/>
                                        </div>

                                    </div>

                                    <div className="presFooter">
                                        <div className="number">
                                            0{id}
                                        </div>

                                        <div className="presText flex">
                                            <h6>
                                                {date}
                                            </h6>
                                            <span className='flex'>
                                                <span className="dot">
                                                    <BsDot className="icon"/>
                                                </span>
                                                Dot
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
} 

export default Prestasi