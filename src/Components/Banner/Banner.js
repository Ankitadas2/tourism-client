import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/imgg1.jpg'
import img4 from '../../images/img4.jpg'
import img3 from '../../images/img3.jfif'

const Banner = () => {
    return (
        <>
           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 px-4 py-3 mb-5 pb-5  "
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="mb-5 pb-4">Express your new journey</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 px-4  py-2 mb-5 pb-5 "
      src={img4}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="mb-5 pb-4">Vacation trip for you</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block justify-content-center w-100 px-4  mb-5 pb-5"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="mb-5 pb-4">New trip with more exprerience</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
        </>
    );
};

export default Banner;