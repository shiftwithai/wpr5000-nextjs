'use client';

import { useState, useRef, useEffect } from 'react';

const testimonials = [
  {
    industry: 'Automotive',
    quote: 'ABB robots helped us increase throughput while maintaining the quality standards required in automotive manufacturing.',
    detail: 'By automating our welding and material handling processes, we reduced cycle times, improved repeatability, and gained the flexibility to adapt quickly to new vehicle models. The integration was smooth, and the system has been running reliably across multiple shifts.',
    name: '— Manufacturing Engineering Manager',
    company: 'Automotive OEM',
  },
  {
    industry: 'Metal Fabrication',
    quote: 'Implementing ABB robotic welding transformed our shop floor.',
    detail: 'We struggled to find skilled welders and maintain consistent quality. With ABB robots, we stabilized production, reduced rework, and increased output without adding labor. The solution scaled easily as demand grew, making automation a clear long-term win for our operation.',
    name: '— Operations Manager',
    company: 'Metal Fabrication Company',
  },
  {
    industry: 'Foundry & Forging',
    quote: 'ABB robots delivered the durability and reliability we need in extreme conditions.',
    detail: 'Operating in a high-heat, abrasive environment requires equipment we can trust. ABB\'s heavy-duty robots have consistently performed in our foundry, improving worker safety while keeping production running with minimal downtime.',
    name: '— Plant Manager',
    company: 'Foundry & Forging Facility',
  },
  {
    industry: 'Food & Beverage',
    quote: 'ABB robots helped us meet growing demand while maintaining strict hygiene standards.',
    detail: 'By automating our packaging and palletizing operations, we improved consistency, reduced manual handling, and supported higher production volumes. The hygienic design and reliable performance made ABB robots a strong fit for our food processing environment.',
    name: '— Engineering Lead',
    company: 'Food & Beverage Manufacturer',
  },
  {
    industry: 'Logistics',
    quote: 'ABB robotic automation significantly improved efficiency in our warehouse operations.',
    detail: 'Automating palletizing and material handling reduced labor strain and increased throughput during peak demand. The system integrates seamlessly with our existing controls and continues to deliver dependable performance day after day.',
    name: '— Director of Operations',
    company: 'Logistics & Distribution Center',
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

  const minSwipeDistance = 50;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-heading-center">What Our Customers Say</h2>
        <p className="section-subheading-center">
          Real results from manufacturers across industries
        </p>

        <div className="testimonials-carousel-wrapper">
          <button 
            className="carousel-nav carousel-nav-prev" 
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div 
            className="testimonials-carousel"
            ref={carouselRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="testimonials-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-slide">
                  <div className="testimonial-card">
                    <div className="testimonial-industry">{testimonial.industry}</div>
                    <blockquote className="testimonial-quote">
                      "{testimonial.quote}"
                    </blockquote>
                    <p className="testimonial-detail">
                      {testimonial.detail}
                    </p>
                    <div className="testimonial-author">
                      <span className="testimonial-name">{testimonial.name}</span>
                      <span className="testimonial-company">{testimonial.company}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="carousel-nav carousel-nav-next" 
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
