import { Link } from 'react-router-dom'
import { services, business } from '../data/site'

export default function Services() {
  return (
    <>
      <section className="phead">
        <div className="wrap">
          <h1>Services</h1>
          <p style={{ maxWidth: '54ch' }}>
            Self drive is most of what we do. These are the arrangements people ask for
            around it.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="services">
            {services.map((s) => (
              <div className="svc" key={s.id} id={s.id}>
                <h3>{s.title}</h3>
                <p className="svc__sum">{s.summary}</p>
                <p>{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="strip">
        <div className="wrap strip__inner">
          <div>
            <h2>Not sure which one you need?</h2>
            <p>Describe the trip and we will tell you what it costs.</p>
          </div>
          <div style={{ display: 'flex', gap: '.7rem', flexWrap: 'wrap' }}>
            <a className="btn btn--ink" href="#book">Get a price</a>
            <a className="btn btn--ghost" href={`tel:${business.phoneDial}`}>{business.phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
