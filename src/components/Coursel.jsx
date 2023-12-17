import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles.css'; 
import { FaArrowRight } from "react-icons/fa6";
const ExcitingCrashCoursesCarousel = () => {
  const courses = [
    { id: 1, title: 'Flash Year Sale',price: 'Mobiles Starting From 14,999/-',offer: 'Grab the Bonanza Electronic year Sale'},
    { id: 2, title: 'Gate Smash Course',price:'₹3599/-',offer: 'Crack GATE with our intensive and effective crash course!'},
    { id: 3, title: 'Tspsc Terrific Course',price:'₹1499/-', offer: 'Conquer TSPSC exams with our comprehensive and focused course!' },
    // Add more courses as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
   // Disable swipe for preventing automatic slide change
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % courses.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + courses.length) % courses.length);
  };

  return (
    <div className="exciting-crash-courses-carousel">
      <h2 className="fancy-sentence">Amazing Offers Await You</h2>
      <Slider {...settings}>
        {courses.map((course, index) => (
          <div key={course.id} className="carousel-slide" data-id={course.id}>
            <div className="image-overlay"></div>
            <div className="text-container">
              <h3>{course.title}</h3>
              <p>{course.offer}</p>
              <h4>{course.price}</h4>
              <button className="buy-now-button"><FaArrowRight className='arrow'/>Shop Now</button>
            </div>
          </div>
        ))}
      </Slider>

      <div className="carousel-buttons">
        <button className="arrow-button" onClick={goToPrevSlide} disabled={currentSlide === 0}>
          
        </button>
        <button className="arrow-button" onClick={goToNextSlide} disabled={currentSlide === courses.length - 1}>
       
        </button>
      </div>
    </div>
  );
};

export default ExcitingCrashCoursesCarousel;
