import { Link } from 'react-router-dom'
import Hero from '../components/Hero/Hero.jsx'
import FeaturedProperties from '../components/FeaturedProperties/FeaturedProperties.jsx'
import Categories from '../components/Categories/Categories.jsx'
import Stats from '../components/Stats/Stats.jsx'
import AboutSection from '../components/AboutSection/AboutSection.jsx'
import Testimonials from '../components/Testimonials/Testimonials.jsx'
import './Home.css'

function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <Categories />
      <Stats />
      <AboutSection compact />
      <Testimonials />

      <section className="section home-cta">
        <div className="container home-cta__box">
          <div>
            <h2>Pensando en vender o alquilar tu propiedad?</h2>
            <p>Te tasamos sin cargo y armamos juntos la mejor estrategia de publicación.</p>
          </div>
          <Link to="/contacto" className="btn btn-brass">Quiero una tasación</Link>
        </div>
      </section>
    </>
  )
}

export default Home
