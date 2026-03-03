import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <a href="#" className="footer__logo">
                  <img src={`${import.meta.env.BASE_URL}Logo V.png`} alt="Vivero Lazulada" className="navbar__logo-img" />
                <span>Vivero Lazulada</span>
              </a>
              <p className="footer__brand-text">
                Vivero Lazulada es un vivero mayorista con más de 20 años de experiencia, especializado en cerco vivo. Ofrecemos precios mayoristas aún en pocas cantidades.
              </p>
              
            </div>

            <div className="footer__col">
              <h4>Enlaces</h4>
              <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#categorias">Plantas</a></li>
                <li><a href="#servicios">Servicios</a></li>
              </ul>
            </div>

            <div className="footer__col">
              <h4>Redes Sociales</h4>
             <div className="footer__social">
                <a href="https://www.instagram.com/viverolazulada" className="navbar__whatsapp-link" target="_blank" rel="noopener noreferrer">
                 <img src={`${import.meta.env.BASE_URL}ig.png`} alt="Instagram" className="navbar__logo-img" />
                </a>
                <a href="http://wa.me/541162934239" className="navbar__whatsapp-link" target="_blank" rel="noopener noreferrer">
                 <img src={`${import.meta.env.BASE_URL}WPP.png`} alt="WhatsApp" className="navbar__logo-img" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© 2026 Vivero Lazulada. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
