import { useState } from 'react'
import './Featured.css'

const plants = [
  {
    name: 'Monstera Deliciosa',
    botanical: 'Monstera deliciosa',
    price: '$45.000',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80',
    tag: 'Popular',
    care: 'Media luz',
  },
  {
    name: 'Ficus Lyrata',
    botanical: 'Ficus lyrata',
    price: '$65.000',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&q=80',
    tag: 'Nuevo',
    care: 'Luz indirecta',
  },
  {
    name: 'Strelitzia',
    botanical: 'Strelitzia nicolai',
    price: '$85.000',
    image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=400&q=80',
    tag: 'Exclusivo',
    care: 'Mucha luz',
  },
  {
    name: 'Calathea Orbifolia',
    botanical: 'Goeppertia orbifolia',
    price: '$38.000',
    image: 'https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?w=400&q=80',
    tag: 'Popular',
    care: 'Sombra parcial',
  },
  {
    name: 'Pothos Dorado',
    botanical: 'Epipremnum aureum',
    price: '$22.000',
    image: 'https://images.unsplash.com/photo-1572688484438-313a56e6dc34?w=400&q=80',
    tag: 'Fácil cuidado',
    care: 'Baja luz',
  },
  {
    name: 'Sansevieria',
    botanical: 'Dracaena trifasciata',
    price: '$28.000',
    image: 'https://images.unsplash.com/photo-1593482892540-ba4762c3efd3?w=400&q=80',
    tag: 'Fácil cuidado',
    care: 'Cualquier luz',
  },
]

const Featured = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="featured">
      <div className="container">
        <div className="featured__header">
          <span className="featured__label">Destacadas</span>
          <h2 className="section-title">Nuestras plantas favoritas</h2>
          <p className="section-subtitle">
            Selección especial de nuestras plantas más queridas y recomendadas
          </p>
        </div>

        <div className="featured__grid">
          {plants.map((plant, index) => (
            <div
              key={index}
              className="plant-card"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="plant-card__image-wrapper">
                <img src={plant.image} alt={plant.name} className="plant-card__image" />
                <span className="plant-card__tag">{plant.tag}</span>
                <div className={`plant-card__quick-view ${hoveredIndex === index ? 'plant-card__quick-view--visible' : ''}`}>
                  <span>Ver detalles</span>
                </div>
              </div>
              <div className="plant-card__info">
                <h3 className="plant-card__name">{plant.name}</h3>
                <p className="plant-card__botanical">{plant.botanical}</p>
                <div className="plant-card__meta">
                  <span className="plant-card__care">☀️ {plant.care}</span>
                  <span className="plant-card__price">{plant.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured
