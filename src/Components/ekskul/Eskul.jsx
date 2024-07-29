import React from "react";
import './eskul.css';

// Icons
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { IoLogoInstagram } from "react-icons/io";

//video 
import video from '../../Assets/eskul24.mp4';

// Images
import img from './image_eskul/1.jpg';
import rohis from './image_eskul/rohis1.jpg';
import rokris from './image_eskul/rokris.jpg';
import saman from './image_eskul/saman.jpg';
import silat from './image_eskul/silat.jpg';
import tatra from './image_eskul/tatra.jpg';
import teater from './image_eskul/teater.jpg';
import voli from './image_eskul/voli.jpg';
import basket from './image_eskul/basket.jpeg';
import dance from './image_eskul/dance.jpg';
import paskib from './image_eskul/paskibra.jpg';

// Data
const Data = [
    {
        id: 1,
        imgSrc: rohis,
        destTitle: 'ROHIS',
        grade: 'SMKN 24 JAKARTA',
        fees: 'yayayya',
        description: 'We are Progress SMK Negeri 24 Jakarta. Lets Hijrah to Jannah!'
    },
    {
        id: 2,
        imgSrc: silat,
        destTitle: 'PENCAK SILAT',
        grade: 'SMKN 24 JAKARTA',
        fees: 'silatnusantara24',
        description: 'Mari ikut silat bersama Keyzha Idelia Komara'
    },
    {
        id: 3,
        imgSrc: img,
        destTitle: 'PIK-R',
        grade: 'SMKN 24 JAKARTA',
        fees: 'yayayya',
        description: 'Mari ikut pik-r bersama Fariza Novianti'
    },
    {
        id: 4,
        imgSrc: img,
        destTitle: 'FUTSAL',
        grade: 'SMKN 24 JAKARTA',
        fees: 'yayayya',
        description: 'Mari ikut futsal bersama anak futsal smkn 24 jakarta'
    },
    {
        id: 5,
        imgSrc: basket,
        destTitle: 'BASKET',
        grade: 'SMKN 24 JAKARTA',
        fees: 'yayayya',
        description: 'Mari ikut basket bersama anak basket smkn 24 jakarta'
    },
    {
        id: 6,
        imgSrc: voli,
        destTitle: 'VOLI',
        grade: 'SMKN 24 JAKARTA',
        fees: 'yayayya',
        description: 'Mari ikut voli bersama anak voli smkn 24 jakarta'
    },
    {
        id: 7,
        imgSrc: tatra,
        destTitle: 'TARI TRADISIONAL',
        grade: 'SMKN 24 JAKARTA',
        fees: 'yayayya',
        description: 'Mari ikut tatra bersama anak tari tradisional'
    },
    {
        id: 8,
        imgSrc: saman,
        destTitle: 'TARI SAMAN',
        grade: 'SMKN 24 JAKARTA',
        fees: 'yayayya',
        description: 'Mari ikut saman bersama anak saman'
    },
    {
        id: 9,
        imgSrc: dance,
        destTitle: 'MODERN DANCE',
        grade: 'SMKN 24 JAKARTA',
        fees: 'yayayya',
        description: 'Mari ikut modern dance bersama elsy dan keyzha'
    },
    {
        id: 10,
        imgSrc: teater,
        destTitle: 'TEATER',
        grade: 'SMKN 24 JAKARTA',
        fees: 'yayayya',
        description: 'Mari ikut teater bersama anak teater'
    },
    {
        id: 11,
        imgSrc: img,
        destTitle: 'PMR',
        grade: 'SMKN 24 JAKARTA',
        fees: 'yayayya',
        description: 'Mari ikut pmr bersama Elsy Febryani'
    },
    {
        id: 12,
        imgSrc: rokris,
        destTitle: 'ROKRIS',
        grade: 'SMKN 24 JAKARTA',
        fees: 'yayayya',
        description: 'Mari ikut rokris bersama anak rokris'
    },
    {
        id: 13,
        imgSrc: img,
        destTitle: 'PRAMUKA',
        grade: 'SMKN 24 JAKARTA',
        fees: 'yayayya',
        description: 'Mari ikut pramuka bersama anak pramuka'
    },
    {
        id: 14,
        imgSrc: paskib,
        destTitle: 'PASKIBRA',
        grade: 'SMKN 24 JAKARTA',
        fees: 'yayayya',
        description: 'Mari ikut paskibra bersama anak paskib'
    },
];

const Eskul = () => {
    return (
        <section className="main container section">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">
                    <h1 className="homeTitle">
                        Ekstrakurikuler SMKN 24 JAKARTA 
                    </h1>
                </div>
            </div>

            <div className="secTitle">
                <h3 className="title">
                    Temukan Ekskulmu Disini
                </h3>
            </div>

            <div className="secContent grid">
                {Data.map(({ id, imgSrc, destTitle, grade, fees, description }) => (
                    <div key={id} className="singleDestination">
                        <div className="imageDiv">
                            <img src={imgSrc} alt={destTitle} />
                        </div>
                        <div className="cardInfo">
                            <h4 className="destTitle">{destTitle}</h4>
                            <span className="continent flex">
                                <IoLogoInstagram className="icons" />
                                <span className="name">{fees}</span>
                            </span>
                            <div className="fees flex">
                                <div className="grade">
                                    <span>{grade}<small>*****</small></span>
                                </div>
                                <div className="price">
                                    <h5>{}</h5>
                                </div>
                            </div>
                            <div className="desc">
                                <p>{description}</p>
                            </div>
                            <button className="btn flex">
                                DETAILS <HiOutlineClipboardCheck className="icon" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Eskul;
