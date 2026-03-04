import './Hero.css'

const Hero = () => {
  return (
    <section
      id="inicio"
      className="hero"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(26, 58, 42, 0.85) 0%, rgba(45, 90, 61, 0.75) 50%, rgba(58, 122, 82, 0.65) 100%), url('${import.meta.env.BASE_URL}OleoTexano.jpeg')`
      }}
    >
      <div className="hero__overlay"></div>
      <div className="hero__content container">

        <h1 className="hero__title">
          Todo lo que buscas<br />
          <span className="hero__title-accent">para tu cerco vivo</span>
        </h1>
        <p className="hero__description">
          Mas de 15 especies para tu cerco vivo, con asesoría personalizada y entrega a domicilio.
        </p>
        <div className="hero__actions">
          <a href="#categorias" className="hero__btn hero__btn--primary">
            Explorar Especies
          </a>
          <a href="http://wa.me/541162934239" className="hero__btn hero__btn--secondary">
            Contáctanos
          </a>
        </div>
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">+10.000</span>
            <span className="hero__stat-label">Unidades en Stock</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">+30</span>
            <span className="hero__stat-label">Años de trayectoria</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">+500</span>
            <span className="hero__stat-label">Clientes</span>
          </div>
        </div>
      </div>
      <div className="hero__scroll-indicator">
        <span>Descubre más</span>
        <div className="hero__scroll-arrow">↓</div>
      </div>
    </section>
  )
}

export default Hero
