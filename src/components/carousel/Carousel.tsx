import React, { useState } from "react";
import "./carousel.css";

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  function next() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prev() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <section>
      <h1> Component #1: Carousel </h1>
      <div className="carousel-container">
        <div className="slider">
          {images.map(
            (image, index) =>
              current === index && (
                <div key={image} className="slide">
                  <div className="slide-content">
                    <div className="left-arrow" onClick={prev}>
                      {"<"}
                    </div>
                    <div className="right-arrow" onClick={next}>
                     {">"}
                    </div>
                    <img src={image} alt="images" />
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
}

export default Carousel;
