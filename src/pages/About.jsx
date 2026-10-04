import { Link } from 'react-router-dom'
import { business, locations } from '../data/site'

export default function About() {
  return (
    <>
      <section className="phead">
        <div className="wrap">
          <h1>About us</h1>
          <p style={{ maxWidth: '52ch' }}>
            A small Vasco-based rental run by people who answer their own phone.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="prose">
            <h2>We started with two cars</h2>
            <p>
              {business.name} began with a pair of hatchbacks and a simple complaint: renting a
              car in Goa meant a long taxi to an office, a rate that grew at the counter, and a
              deposit nobody could tell you when you would see again.
            </p>
            <p>
              So we do it the other way round. The car comes to you at the airport or the station,
              the rate you were quoted is the rate you pay, and the deposit goes back the day the
              keys do. The fleet has grown to six cars; the way we hand them over has not changed.
            </p>

            <h2>Why people rent from us twice</h2>
            <ul>
              <li>Cars cleaned and serviced between every rental, not every season</li>
              <li>Existing scratches photographed with you, so they are never argued about later</li>
              <li>No waiting charges when your flight lands late</li>
              <li>One person handles your booking start to finish</li>
              <li>Prices quoted in full, including delivery, before you commit</li>
            </ul>
          </div>

          <div className="card-plain">
            <h3>Find us</h3>
            <p style={{ marginTop: '.8rem' }}>
              {business.address.map((l) => (
                <span key={l} style={{ display: 'block' }}>{l}</span>
              ))}
            </p>
            <p style={{ fontSize: '.9rem', color: '#4d5f65' }}>{business.hours}</p>
            <h3 style={{ marginTop: '1.6rem' }}>We deliver to</h3>
            <ul style={{ paddingLeft: '1.1rem', fontSize: '.92rem', color: '#4d5f65' }}>
              {locations.map((l) => <li key={l.name}>{l.name}</li>)}
            </ul>
            <a className="btn btn--ink btn--block" href="#book" style={{ marginTop: '1.2rem' }}>
              Book a car
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
