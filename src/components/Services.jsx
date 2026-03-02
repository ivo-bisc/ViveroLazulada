import './Services.css'

const services = [
  {
    icon: '🌱',
    title: 'Asesoría Personalizada',
    description: 'Asesoramiento personalizado para ayudarte a elegir las plantas perfectas según tu espacio, estilo de vida y preferencias de cuidado.',
  },
  {
    icon: '📦',
    title: 'Entrega a domicilio',
    description: 'Entregas en todo CABA y GBA, posibilidad de envio en el dia segun disponibilidad.',
  },
  {
    icon: '🪴',
    title: 'Colocación de Plantas',
    description: 'Servicio de entrega y colocacion del cerco vivo.',
  },
]

const Services = () => {
  return (
    <section id="servicios" className="services">
      <div className="container">
        <div className="services__header">
          <span className="services__label">Lo que Ofrecemos</span>
          <h2 className="section-title">Nuestros servicios</h2>
          <p className="section-subtitle">
            
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
              <a href="http://wa.me/541162934239" className="service-card__link">
                Consultanos <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
