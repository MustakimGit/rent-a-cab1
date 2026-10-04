import { business } from '../data/site'
import QuoteForm from '../components/QuoteForm'

export default function Contact() {
  return (
    <>
      <section className="phead">
        <div className="wrap">
          <h1>Contact</h1>
          <p>WhatsApp is fastest. A call works too — someone picks up.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="prose">
            <h2>Reach us</h2>
            <p>
              <strong>Phone & WhatsApp</strong><br />
              <a href={`tel:${business.phoneDial}`}>{business.phone}</a>
            </p>
            <p>
              <strong>Email</strong><br />
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </p>
            <p>
              <strong>Office</strong><br />
              {business.address.map((l) => <span key={l} style={{ display: 'block' }}>{l}</span>)}
            </p>
            <p style={{ color: '#4d5f65', fontSize: '.92rem' }}>{business.hours}</p>

            <h2>Before you write in</h2>
            <ul>
              <li>Tell us the dates and which car, and the reply comes with a price attached</li>
              <li>Flying in? Send the flight number and we track the landing</li>
              <li>Need a driver, child seat or interstate permit? Say so upfront</li>
            </ul>
          </div>

          <QuoteForm variant="card" />
        </div>
      </section>
    </>
  )
}
