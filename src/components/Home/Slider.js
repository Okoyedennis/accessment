import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../image/img1.jpg";
import img2 from "../../image/img2.jpg";
import img3 from "../../image/img3.jpg";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const settings = {
    indicators: false,
    button: false,
  };
  return (
    <div className="carousel">
      <Carousel
        className="home__image"
        interval={4000}
        activeIndex={index}
        onSelect={handleSelect}
        {...settings}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
