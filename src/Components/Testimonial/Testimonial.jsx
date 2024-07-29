import React, { useRef } from 'react';
import './testimonial.css';

const Testimonial = () => {
    const testimonialRef = useRef(null);

    const scrollLeft = () => {
        testimonialRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    };

    const scrollRight = () => {
        testimonialRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    };

    return (
        <div className="testimonial-container">
            <div className="testimonial-secHeader">
                <h2 className="testimonial-secTitle">Testimonial</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laboriosam</p>
            </div>
            <div className="testimonials-wrapper">
                <button className="arrow-button arrow-left" onClick={scrollLeft}>&lt;</button>
                <div className="testimonials" ref={testimonialRef}>
                    <div className="testimonial-card">
                        <div className="testimonial-image">
                            <img src="../../Assets/school.jpg" alt="Testimonial" />
                        </div>
                        <h3>Elsy Febryani</h3>
                        <h4>XI RPL 2</h4>
                        <div className="testimonial-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse in, dignissimos accusamus nisi ab natus molestias quae praesentium, officiis facilis veniam, veritatis explicabo hic minus modi mollitia reprehenderit placeat culpa.</p>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-image">
                            <img src="path/to/image" alt="Testimonial" />
                        </div>
                        <h3>Elsy Febryani</h3>
                        <h4>XI RPL 2</h4>
                        <div className="testimonial-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse in, dignissimos accusamus nisi ab natus molestias quae praesentium, officiis facilis veniam, veritatis explicabo hic minus modi mollitia reprehenderit placeat culpa.</p>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-image">
                            <img src="path/to/image" alt="Testimonial" />
                        </div>
                        <h3>Elsy Febryani</h3>
                        <h4>XI RPL 2</h4>
                        <div className="testimonial-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse in, dignissimos accusamus nisi ab natus molestias quae praesentium, officiis facilis veniam, veritatis explicabo hic minus modi mollitia reprehenderit placeat culpa.</p>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-image">
                            <img src="path/to/image" alt="Testimonial" />
                        </div>
                        <h3>Elsy Febryani</h3>
                        <h4>XI RPL 2</h4>
                        <div className="testimonial-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse in, dignissimos accusamus nisi ab natus molestias quae praesentium, officiis facilis veniam, veritatis explicabo hic minus modi mollitia reprehenderit placeat culpa.</p>
                        </div>
                    </div>
                </div>
                <button className="arrow-button arrow-right" onClick={scrollRight}>&gt;</button>
            </div>
        </div>
    );
}

export default Testimonial;