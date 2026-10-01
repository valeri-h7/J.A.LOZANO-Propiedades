import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MapPin, BedDouble, Bath, Ruler, Car, ArrowLeft, Phone, Mail, Check } from 'lucide-react'
import PropertyCard from '../components/PropertyCard/PropertyCard.jsx'
import { properties } from '../data/properties.js'
import './PropertyDetail.css'

function formatPrice(price, currency) {
  return `${currency} ${price.toLocaleString('es-AR')}`
}

function PropertyDetail() {
  const { id } = useParams()
  const property = properties.find((p) => String(p.id) === id)
  const [activeImage, setActiveImage] = useState(0)

  if (!property) {
    return (
      <section className="section property-detail__not-found">
        <div className="container">
          <p className="kicker">Ups</p>
          <h2>No encontramos esa propiedad</h2>
          <p className="lede">Puede que se haya vendido, alquilado o que el link esté mal escrito.</p>
          <Link to="/propiedades" className="btn btn-primary">Ver todas las propiedades</Link>
        </div>
      </section>
    )
  }

  const related = properties
    .filter((p) => p.id !== property.id && (p.type === property.type || p.neighborhood === property.neighborhood))
    .slice(0, 3)

  const mapQuery = encodeURIComponent(`${property.neighborhood}, ${property.city}`)

  return (
    <section className="property-detail">
      <div className="container">
        <Link to="/propiedades" className="property-detail__back">
          <ArrowLeft size={16} /> Volver al listado
        </Link>

        <div className="property-detail__gallery">
          <div className="property-detail__main-image">
            <img src={property.gallery[activeImage]} alt={property.title} />
            <span className={`property-detail__badge property-detail__badge--${property.operation.toLowerCase()}`}>
              {property.operation}
            </span>
          </div>
          {property.gallery.length > 1 && (
            <div className="property-detail__thumbs">
              {property.gallery.map((img, i) => (
                <button
                  key={img}
                  className={`property-detail__thumb ${i === activeImage ? 'is-active' : ''}`}
                  onClick={() => setActiveImage(i)}
                  aria-label={`Ver foto ${i + 1}`}
                >
                  <img src={img} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="property-detail__grid">
          <div className="property-detail__content">
            <p className="property-detail__location">
              <MapPin size={15} /> {property.neighborhood}, {property.city}
            </p>
            <h1>{property.title}</h1>
            <span className="property-detail__price">{formatPrice(property.price, property.currency)}</span>

            <ul className="property-detail__specs">
              <li><Ruler size={17} /> <div><strong>{property.surface} m²</strong><span>Superficie</span></div></li>
              <li><BedDouble size={17} /> <div><strong>{property.bedrooms}</strong><span>Dormitorios</span></div></li>
              <li><Bath size={17} /> <div><strong>{property.bathrooms}</strong><span>Baños</span></div></li>
              <li><Car size={17} /> <div><strong>{property.parking ? 'Sí' : 'No'}</strong><span>Cochera</span></div></li>
            </ul>

            <h2 className="property-detail__subhead">Descripción</h2>
            <p className="property-detail__description">{property.description}</p>

            {property.amenities?.length > 0 && (
              <>
                <h2 className="property-detail__subhead">Características</h2>
                <ul className="property-detail__amenities">
                  {property.amenities.map((a) => (
                    <li key={a}><Check size={15} /> {a}</li>
                  ))}
                </ul>
              </>
            )}

            <h2 className="property-detail__subhead">Ubicación</h2>
            <iframe
              title={`Mapa de ${property.neighborhood}`}
              className="property-detail__map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            />
          </div>

          <aside className="property-detail__sidebar">
            <div className="property-detail__contact-card">
              <h3>¿Te interesa esta propiedad?</h3>
              <p>Coordinamos una visita o resolvemos tus dudas hoy mismo.</p>
              <Link to="/contacto" className="btn btn-primary property-detail__contact-btn">
                Quiero más información
              </Link>
              <a href="tel:+541150001234" className="property-detail__contact-link">
                <Phone size={16} /> 11 5000-1234
              </a>
              <a href="mailto:hola@horizonteprop.com.ar" className="property-detail__contact-link">
                <Mail size={16} /> hola@horizonteprop.com.ar
              </a>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <div className="property-detail__related">
            <h2>Propiedades similares</h2>
            <div className="property-detail__related-grid">
              {related.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default PropertyDetail
