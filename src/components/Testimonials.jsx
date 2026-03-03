import { useState, useEffect } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Terralagos',
    role: 'Canning',
    image: `${import.meta.env.BASE_URL}Plantacion1.jpeg`,
    rating: 5,
    avatar: '🏡',
  },
  {
    name: 'Fincas de San Vicente',
    role: 'San Vicente',
    image: `${import.meta.env.BASE_URL}Plantacion2.jpeg`,
    rating: 5,
    avatar: '🏡',
  },
  {
    name: 'Santa Emilia, Pilar del Este',
    role: 'Pilar',
    image: `${import.meta.env.BASE_URL}Plantacion3.jpeg`,
    rating: 5,
    avatar: '🏡',
  },
]

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonios" className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <span className="testimonials__label">Testimonios</span>
          <h2 className="section-title">Trabajos Realizados</h2>
          <p className="section-subtitle">
            Trabajos realizados, clientes satisfechos.
          </p>
        </div>

        <div className="testimonials__wrapper">
          <div className="testimonial-card testimonial-card--active">
            <div className="testimonial-card__stars">
              {'★'.repeat(testimonials[activeIndex].rating)}
            </div>
            <img
              className="testimonial-card__image"
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
            />
            <div className="testimonial-card__author">
              <span className="testimonial-card__avatar">
                {testimonials[activeIndex].avatar}
              </span>
              <div>
                <h4 className="testimonial-card__name">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="testimonial-card__role">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
          </div>

          <div className="testimonials__dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonials__dot ${index === activeIndex ? 'testimonials__dot--active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
