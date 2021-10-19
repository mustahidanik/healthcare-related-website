import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from "../../../images/banner/banner1.jpg"
import slide2 from "../../../images/banner/banner2.jpg"
import slide3 from "../../../images/banner/banner3.jpg"

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;