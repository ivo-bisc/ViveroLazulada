import './Contact.css'

const Contact = () => {
  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__info">
            <span className="contact__label">Contáctanos</span>
            <h2 className="section-title">Ven a visitarnos</h2>
            <p className="contact__text">
              Estamos encantados de recibirte en nuestro vivero. Ven a conocer
              nuestra colección y recibe asesoría personalizada de nuestro equipo.
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <span className="contact__detail-icon">📍</span>
                <div>
                  <h4>Ubicación</h4>
                  <p>Av. Las Flores 1234, Colonia Jardines</p>
                </div>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-icon">🕐</span>
                <div>
                  <h4>Horario</h4>
                  <p>Lun - Sáb: 8:00 AM - 6:00 PM</p>
                  <p>Dom: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-icon">📞</span>
                <div>
                  <h4>Teléfono</h4>
                  <p>+52 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>hola@viverolazulada.com</p>
                </div>
              </div>
            </div>

            <div className="contact__social">
              <a href="#" className="contact__social-link" aria-label="Instagram">📷</a>
              <a href="#" className="contact__social-link" aria-label="Facebook">📘</a>
              <a href="#" className="contact__social-link" aria-label="WhatsApp">💬</a>
            </div>
          </div>

          <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
            <h3 className="contact__form-title">Envíanos un mensaje</h3>
            <div className="contact__form-group">
              <input type="text" placeholder="Tu nombre" required />
            </div>
            <div className="contact__form-group">
              <input type="email" placeholder="Tu email" required />
            </div>
            <div className="contact__form-group">
              <select defaultValue="">
                <option value="" disabled>¿En qué te podemos ayudar?</option>
                <option>Compra de plantas</option>
                <option>Diseño de jardines</option>
                <option>Mantenimiento</option>
                <option>Talleres y cursos</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="contact__form-group">
              <textarea placeholder="Tu mensaje" rows="4" required></textarea>
            </div>
            <button type="submit" className="contact__form-btn">
              Enviar mensaje 🌿
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
