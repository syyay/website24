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
        <section className='prestasi24 section container'>
            <div className="secContainerPres">

                <div className="secHeaderPres flexPrestasi24">
                    <div className="textDivPres">
                        <h2 className="secTitlePres">
                            Prestasi Peserta Didik
                        </h2>
                        <p className='prestasi24p'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laboriosam
                        </p>
                    </div>

                    <div className="iconsDivPres flexPrestasi24">
                        <BsArrowLeftShort className="iconPres leftIconPres"/>
                        <BsArrowRightShort className="iconPres"/>
                    </div>
                </div>

                <div className="mainContentPres grid">
                    {
                        Data.map(({id, imgSrc, presTitle, presDesc, date})=>{
                            return(
                                <div className="singlePrestasi">
                                    <div className="presImage24">
                                        <img src={imgSrc} alt="Image title" className='prestasi24img' />

                                        <div className="overlayInfoPres">
                                            <h3 className='prestasih3'>{presTitle}</h3>
                                            <p className='prestasi24p'>
                                                {presDesc}
                                            </p>

                                            <BsArrowRightShort className="iconPres"/>
                                        </div>

                                    </div>

                                    <div className="presFooter">
                                        <div className="numberPres">
                                            0{id}
                                        </div>

                                        <div className="presText flexPrestasi24">
                                            <h6 className='perstasi24h6'>
                                                {date}
                                            </h6>
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