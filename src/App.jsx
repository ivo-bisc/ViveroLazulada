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
    </div>
  )
}

export default App
