import React, { useState, useEffect } from 'react';
import './Carousel.css';
import registroBoletin from '../images/registroBoletin.jpg';
import registroBoletin2 from '../images/registroBoletin2.jpg';
import registroBoletin3 from '../images/registroBoletin3.jpg';

const images = [
  registroBoletin,
  registroBoletin2,
  registroBoletin3
];


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
}

export default Carousel;
