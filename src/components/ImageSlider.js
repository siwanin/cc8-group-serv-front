import React, { useState } from "react";
import { SilderData } from "./SliderData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  console.log(current);

  const prevSlide = () => {
    setCurrent(current === 0 ? 0 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <section className="slider">
        <FontAwesomeIcon
          icon={faChevronCircleLeft}
          size="2x"
          className="left-arrow"
          onClick={prevSlide}
        />
        <FontAwesomeIcon
          icon={faChevronCircleRight}
          size="2x"
          className="right-arrow"
          onClick={nextSlide}
        />
        {SilderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="travel img" className="image" />
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ImageSlider;
