import { business, services, locations } from '../data/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <span className="brand__name" style={{ color: 'var(--sand)' }}>
              {business.name}
            </span>
            <p style={{ marginTop: '.9rem', fontSize: '.92rem' }}>
              {business.address.map((line) => (
                <span key={line} style={{ display: 'block' }}>{line}</span>
              ))}
            </p>
            <ul>
              <li><a href={`tel:${business.phoneDial}`}>{business.phone}</a></li>
              <li><a href={`mailto:${business.email}`}>{business.email}</a></li>
              <li>{business.hours}</li>
            </ul>
          </div>

          <div>
            <h4>What we do</h4>
            <ul>
              {services.slice(0, 5).map((s) => (
                <li key={s.id}><a href="#services">{s.title}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Where we deliver</h4>
            <ul>
              {locations.map((l) => (
                <li key={l.name}>{l.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__base">
          <span>© {new Date().getFullYear()} {business.name}. All rights reserved.</span>
          <span>{business.gstNote}</span>
        </div>
      </div>
    </footer>
  )
}
