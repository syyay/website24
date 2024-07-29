import React from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import rpl from "././image_sapras/rpl.jpg";
import upw from "././image_sapras/upw.jpg";
import tbg from "././image_sapras/tbg.jpg";
import tbs from "././image_sapras/tbs.jpg";
import '././sapras.css';

const ParallaxSection = ({ image, height, children }) => (
    <ParallaxBanner
        className="parallaxBanner"
        layers={[{ image: image, speed: -15 }]}
        style={{ height: height }}
    >
        {children}
    </ParallaxBanner>
);

const Sapras = () => {
    return (
        <ParallaxProvider>
            <section className='eskul'>
                <div className="secContainer container">
                    <div className="eskulText">
                        <h1 className="title">Ruang Praktik SMKN 24 JAKARTA</h1>
                        <p className="subTitle">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente enim corporis dolores, corrupti, dignissimos delectus repellendus maiores temporibus commodi itaque expedita beatae veritatis quas voluptatum eveniet saepe porro, ipsa deleniti.
                        </p>
                    </div>
                    <div className="line">
                        <p></p>
                    </div>
                </div>
            </section>

            <ParallaxSection image={rpl} height="500px">
                <div className="overlay">
                    <p>LABORATORIUM KOMPUTER</p>
                </div>
            </ParallaxSection>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry...
            </p>
            <ParallaxSection image={tbs} height="500px">
                <div className="overlay">
                    <p>LABORATORIUM PRODUKSI</p>
                </div>
            </ParallaxSection>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry...
            </p>
            <ParallaxSection image={upw} height="500px">
                <div className="overlay">
                    <p>LABORATORIUM BUS</p>
                </div>
            </ParallaxSection>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry...
            </p>
            <ParallaxSection image={tbg} height="500px">
                <div className="overlay">
                    <p>DAPUR BOGA</p>
                </div>
            </ParallaxSection>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry...
            </p>
        </ParallaxProvider>
    );
}

export default Sapras;
