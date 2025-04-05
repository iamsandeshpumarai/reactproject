import React, { useState, useEffect } from 'react';
import './Testamonial.css';

const testimonials = [
  {
    id: 1,
    name: "Alicia Pri",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    comment: "I absolutely love these shoes! They are both stylish and comfortable."
  },
  {
    id: 2,
    name: "John Smith",
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
    comment: "The best quality I've experienced. These shoes have exceeded my expectations."
  },
  {
    id: 3,
    name: "Alice Brown",
    image:
      "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=600",
    comment: "Perfect for any occasion. I get compliments every time I wear them."
  },
  {
    id: 4,
    name: "Bob Johnson",
    image:
      "https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=600",
    comment: "Remarkably comfortable with a great fit. I wear them every day."
  },
  {
    id: 5,
    name: "Emma Wilson",
    image:
      "https://images.pexels.com/photos/2122276/pexels-photo-2122276.jpeg?auto=compress&cs=tinysrgb&w=600",
    comment: "The design is fantastic and the quality is top-notch."
  },
  {
    id: 6,
    name: "Michael Lee",
    image:
      "https://images.pexels.com/photos/7595188/pexels-photo-7595188.jpeg?auto=compress&cs=tinysrgb&w=600",
    comment: "Great customer service and an even better product. Highly recommended!"
  }
];

const Testimonial = () => {
  // 0 for the first slide (testimonials 1-3), 1 for the second slide (testimonials 4-6)
  const [activeSlide, setActiveSlide] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto-slide logic: every 3 seconds, fade out then change slide and fade in
  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger fade out
      setFade(false);
      // After fade-out duration, update slide and fade in
      setTimeout(() => {
        setActiveSlide(prev => (prev + 1) % 2);
        setFade(true);
      }, 500); // 500ms fade out duration
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Calculate the testimonials to display based on the active slide
  const testimonialsToShow = testimonials.slice(activeSlide * 3, activeSlide * 3 + 3);

  const handleDotClick = (index) => {
    // Manually change slide with fade transition
    setFade(false);
    setTimeout(() => {
      setActiveSlide(index);
      setFade(true);
    }, 500);
  };

  return (
    <div className="carousel-container">
      <div className={`testimonials-wrapper ${fade ? "fade-in" : "fade-out"}`}>
        {testimonialsToShow.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-face"
            />
            <div className="testimonial-content">
              <p className="testimonial-comment">{testimonial.comment}</p>
              <p className="testimonial-name">- {testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="dots-container">
        <span
          className={`dot ${activeSlide === 0 ? "active" : ""}`}
          onClick={() => handleDotClick(0)}
        ></span>
        <span
          className={`dot ${activeSlide === 1 ? "active" : ""}`}
          onClick={() => handleDotClick(1)}
        ></span>
      </div>
    </div>
  );
};

export default Testimonial;
