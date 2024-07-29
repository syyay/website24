import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const Parallaximg = ({ imgsrc, height }) => {
    return (
        <ParallaxBanner
            layers={[{ image: imgsrc, amount: 0.6 }]}
            style={{ height: height }}
        >
            <div style={{ height: height }}>
                Parallax Content
            </div>
        </ParallaxBanner>
    );
}

export default Parallaximg;
