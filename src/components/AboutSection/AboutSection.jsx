import { Link } from 'react-router-dom'
import './AboutSection.css'

function AboutSection({ compact = false }) {
  return (
    <section className="section about">
      <div className="container about__grid">
        <div className="about__media">
          <img src="https://picsum.photos/seed/horizonte-equipo/800/900" alt="Equipo de Lozano y Asociados" />
        </div>

        <div className="about__content">
          <p className="kicker">Quiénes somos</p>
          <h2>Una inmobiliaria que combina experiencia y trato cercano.</h2>
          <p className="about__text">
            En Lozano y Asociados creemos que detrás de cada operación hay una historia: una familia que busca su primer hogar, alguien que vende la casa donde crió a sus hijos, un inversor que confía en nosotros su próximo paso. Por eso encaramos cada consulta con el mismo compromiso, sea cual sea el tamaño de la operación. <br />
            Nuestro equipo está formado por profesionales especializados en el mercado inmobiliario, lo que nos permite darte respuestas claras y soluciones prácticas, pensadas para tu situación particular y no para un caso genérico. <br />
            Estamos matriculados en el Colegio Único de Corredores Inmobiliarios de la Ciudad de Buenos Aires (CUCICBA) y somos socios de la Cámara Inmobiliaria Argentina, además de estar adheridos al servicio de Argenprop. No son solo membresías: son el respaldo de que cada operación que hacemos con vos cumple con los estándares y la normativa del sector, sin sorpresas ni letra chica. <br />
            Trabajamos codo a codo tanto con quienes quieren vender o alquilar como con quienes están buscando su próximo hogar o una buena inversión, acompañando cada paso con honestidad y disposición para explicar todo las veces que haga falta.
          </p>

          {!compact && (
            <ul className="about__list">
              <li>Tasaciones profesionales, sin cargo y sin compromiso.</li>
              <li>Equipo matriculado ante el CUCICBA, para que operes con total tranquilidad.</li>
              <li>Acompañamiento personalizado en cada etapa, desde la primera consulta hasta el día de la firma.</li>
              <li>Presencia en Argenprop y otros portales, para que tu propiedad llegue a más gente.</li>
            </ul>
          )}

        </div>
      </div>
    </section>
  )
}

export default AboutSection
