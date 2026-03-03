import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Featured from './components/Featured'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Categories />
      <Services />
      <Testimonials />
      <Footer />
      <a href="https://wa.me/message/5ZCN2WDBG7CVC1" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <img src={`${import.meta.env.BASE_URL}WPP.png`} alt="WhatsApp" />
      </a>
    </div>
  )
}

export default App
