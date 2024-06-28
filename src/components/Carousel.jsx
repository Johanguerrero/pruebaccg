import React, { useState, useEffect } from 'react'; 
import './Carousel.css';
import registroBoletin from '../images/registroBoletin.jpg';
import registroBoletin2 from '../images/registroBoletin2.jpg';
import registroBoletin3 from '../images/registroBoletin3.jpg';

// Array de imágenes
const images = [
  registroBoletin,
  registroBoletin2,
  registroBoletin3
];

const Carousel = () => {
  // Estado para llevar el índice de la imagen actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect para cambiar la imagen cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Función para cambiar imágenes
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
