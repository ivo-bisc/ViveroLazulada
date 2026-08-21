import './Categories.css'
import products from '../data/products.json'

const Categories = () => {
  return (
    <section id="categorias" className="categories">
      <div className="container">
        <div className="categories__header">
          <h2 className="section-title">Plantas de Exterior</h2>
          <p className="section-subtitle">
            Arbustos perennes, hojas verdes todo el año, ideales para cercos vivos. Resisten el sol directo y las condiciones climáticas cambiantes, aportando privacidad y belleza natural a tu espacio exterior.
          </p>
        </div>

        <div className="categories__grid">
          {products.map((product) => (
            <div key={product.name} className="category-card">
              <div className="category-card__image">
                <img src={`${import.meta.env.BASE_URL}${product.image}`} alt={product.name} />
              </div>
              <div className="category-card__content">
                <h3 className="category-card__title">{product.name}</h3>
                <p className="category-card__description">{product.description}</p>
                <div className="category-card__footer">
                  {product.ctaHref ? (
                    <a className="category-card__count" href={product.ctaHref} target="_blank" rel="noreferrer">
                      {product.count}
                    </a>
                  ) : (
                    <span className="category-card__count">{product.count}</span>
                  )}
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
