import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../../stylesheets/ControlledCarousel.scss";

function ControlledCarousel({ products }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="carousel-img" src={products.image} alt="First slide" />
        <Carousel.Caption>
          <h3>{products.name}</h3>
          <p>{products.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-img" src={products.image} alt="Second slide" />
        <Carousel.Caption>
          <h3>{products.name}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-img" src={products.image} alt="Third slide" />

        <Carousel.Caption>
          <h3>{products.name}</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
