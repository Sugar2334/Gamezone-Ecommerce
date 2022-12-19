import React from 'react';
import { Carousel } from "react-bootstrap"

export default function ControlCarousel () {
  return (
    <div>
      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.fullh4rd.com.ar/adminrgb/img/banner/130.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.fullh4rd.com.ar/adminrgb/img/banner/126.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.fullh4rd.com.ar/adminrgb/img/banner/135.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}