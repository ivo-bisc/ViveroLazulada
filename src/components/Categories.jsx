import './Categories.css'

const especies = [

/*
  {
    name: 'Oleo Texano Aurea',
    description: '',
    image: `${import.meta.env.BASE_URL}OleoTexano.jpeg`,
    count: 'Color y Robustez',
    emoji: '🍃'
  },
  */
  {
    name: 'Melaleuca',
    description: 'Arbusto de crecimiento rápido, ideal para cercos vivos densos.',
    image: `${import.meta.env.BASE_URL}Melaleuca.jpg`,
    count: '70cm~',
    emoji: '🌳'
  },
  {
    name: 'Oleo Texano',
    description: 'Arbusto de bajo mantenimiento, y alta resistencia al clima.',
    image: `${import.meta.env.BASE_URL}OleoVerde.jpg`,
    count: '70cm~',
    emoji: '🌵'
  },
  {
    name: 'Laurel de Flor Blanca',
    description: 'Arbusto de flores blancas, ideal para espacios con sombra parcial.',
    image: `${import.meta.env.BASE_URL}LaurelDeFlor.jpg`,
    count: '70cm~',
    emoji: '🌸'
  },
  {
    name: 'Buxus',
    description: 'Arbusto de crecimiento medio, ideal para cercos vivos formales y decorativos.',
    image: `${import.meta.env.BASE_URL}buxus.jpeg`,
    count: '50cm~',
    emoji: '�'
  },
   {
    name: 'Paspalum',
    description: 'Arbusto de crecimiento MUY rápido, ideal para cercos vivos densos y resistentes.',
    image: `${import.meta.env.BASE_URL}paspalum.jpeg`,
    count: '1.70m~',
    emoji: '�'
  },
   {
    name: 'Dodonea',
    description: 'Arbvusto levemente rojizo en verano, y bordo intenso en otoño, ideal para cercos vivos con un toque de color.',
    image: `${import.meta.env.BASE_URL}dodonea.jpeg`,
    count: '60cm~',
    emoji: '�'
  },
   {
    name: 'Limpiatubo',
    description: 'Arbusto de crecimiento rápido, con una hermosa floracion roja. Ideal para cercos vivos densos y coloridos.',
    image: `${import.meta.env.BASE_URL}limpiatubo.jpeg`,
    count: '70cm~',
    emoji: '�'
  },
   {
    name: 'Leylandii',
    description: 'Arbusto de crecimiento medio, resistente al clima y muy facil de mantener.',
    image: `${import.meta.env.BASE_URL}leylandi.jpeg`,
    count: '50cm~',
    emoji: '�'
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
