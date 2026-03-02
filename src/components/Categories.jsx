import './Categories.css'

const especies = [
  {
    name: 'Oleo Texano Aurea',
    description: '',
    image: '/OleoTexano.jpeg',
    count: 'Color y Robustez',
    emoji: '🍃'
  },
  {
    name: 'Melaleuca',
    description: 'Arbusto de crecimiento rápido, ideal para cercos vivos densos.',
    image: '/Melaleuca.jpg',
    count: 'Crecimiento rápido',
    emoji: '🌳'
  },
  {
    name: 'Oleo Texano Verde',
    description: 'Plantas de bajo mantenimiento con formas únicas y fascinantes.',
    image: '/OleoVerde.jpg',
    count: 'Velocidad y resistencia',
    emoji: '🌵'
  },
  {
    name: 'Laurel de Flor Blanca',
    description: 'Llena tu espacio de color, fragancia y vida natural.',
    image: '/LaurelDeFlor.jpg',
    count: 'Flor Blanca',
    emoji: '🌸'
  },
]

const Categories = () => {
  return (
    <section id="categorias" className="categories">
      <div className="container">
        <div className="categories__header">
          <span className="categories__label">Destacados</span>
          <h2 className="section-title">Plantas de Exterior</h2>
          <p className="section-subtitle">
            Arbustos perennes, hojas verdes todo el año, ideales para cercos vivos. Resisten el sol directo y las condiciones climáticas cambiantes, aportando privacidad y belleza natural a tu espacio exterior.
          </p>
        </div>

        <div className="categories__grid">
          {especies.map((cat, index) => (
            <div key={index} className="category-card">
              <div className="category-card__image">
                <img src={cat.image} alt={cat.name} />
              </div>
              <div className="category-card__content">
                <h3 className="category-card__title">{cat.name}</h3>
                <p className="category-card__description">{cat.description}</p>
                <div className="category-card__footer">
                  <span className="category-card__count">{cat.count}</span>
                  <span className="category-card__arrow">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
