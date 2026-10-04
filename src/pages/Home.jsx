import { useEffect } from 'react'
import QuoteForm from '../components/QuoteForm'
import CarCard from '../components/CarCard'
import CarArt from '../components/CarArt'
import { business, fleet, services, locations, reviews, faqs } from '../data/site'

const steps = [
  { t: 'Tell us the dates', d: 'Send the car, dates and where you are landing. A price comes back the same hour.' },
  { t: 'We bring it to you', d: 'Airport kerb, station gate or hotel lobby. You do not travel to a rental office.' },
  { t: 'Sign and check together', d: 'Ten minutes of paperwork and a walk around the car, marking anything already there.' },
  { t: 'Drop it anywhere', d: 'Return it where you like in Goa. Deposit is refunded the same day.' },
]

export default function Home() {
  useEffect(() => {
    const targets = document.querySelectorAll('.home-motion [data-reveal]')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.14, rootMargin: '0px 0px -32px 0px' })

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="home-motion">
      <section className="hero">
        <div className="wrap hero__grid">
          <div className="hero__copy" data-reveal>
            <h1>
              Goa is better<br />when you're driving
            </h1>
            <p className="hero__lede">
              Clean, insured self-drive cars delivered to Dabolim, Mopa, Madgaon or your hotel
              door. One rate per day, fuel on you, nothing hidden in the last five minutes.
            </p>

            <div style={{ display: 'flex', gap: '.7rem', flexWrap: 'wrap', marginTop: '1.8rem' }}>
              <a className="btn btn--brass" href="#fleet">See the fleet</a>
              <a className="btn btn--ghost-light" href={`tel:${business.phoneDial}`}>
                Call {business.phone}
              </a>
            </div>

            <div className="hero__scene" aria-hidden="true">
              <div className="hero__road" />
              <div className="hero__car">
                <CarArt body="sedan" />
              </div>
            </div>

            <div className="hero__meta">
              <div><b>₹1,200</b><span>from, per day</span></div>
              <div><b>6</b><span>delivery points</span></div>
              <div><b>250 km</b><span>included daily</span></div>
              <div><b>24/7</b><span>WhatsApp support</span></div>
            </div>
          </div>

          <div className="hero__booking" data-reveal>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* fleet preview */}
      <section className="section">
        <div className="wrap">
          <div className="head head__line">
            <div data-reveal>
              <h2>The fleet</h2>
              <p>Every car is under five years old, serviced between rentals, and comes with working seat belts front and back.</p>
            </div>
            <a className="btn btn--ghost" href="#fleet">All cars</a>
          </div>

          <div className="fleet" data-reveal>
            {fleet.slice(0, 3).map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="section section--dark">
        <div className="wrap">
          <div className="head" data-reveal>
            <h2>How a rental actually goes</h2>
            <p>Four steps, no counter queue, no deposit held on a credit card for three weeks.</p>
          </div>
          <div className="steps" data-reveal>
            {steps.map((s) => (
              <div className="step" key={s.t}>
                <h3 style={{ color: 'var(--sand)' }}>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* services */}
      <section className="section">
        <div className="wrap">
          <div className="head head__line">
            <div data-reveal>
              <h2>More than a car for the week</h2>
              <p>The things people in Goa actually ask us for.</p>
            </div>
            <a className="btn btn--ghost" href="#services">All services</a>
          </div>
        </div>
        <div className="wrap">
          <div className="services" data-reveal>
            {services.map((s) => (
              <div className="svc" key={s.id}>
                <h3>{s.title}</h3>
                <p className="svc__sum">{s.summary}</p>
                <p>{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* locations */}
      <section className="section section--sand">
        <div className="wrap">
          <div className="head" data-reveal>
            <h2>Where we bring the car</h2>
            <p>Delivery and collection are free at every point below. Anywhere else in Goa, ask and we will quote it.</p>
          </div>
          <div className="locs" data-reveal>
            {locations.map((l) => (
              <div className="loc" key={l.name}>
                <h3>{l.name}</h3>
                <p>{l.detail}</p>
                <span>{l.notice}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* reviews */}
      <section className="section">
        <div className="wrap">
          <div className="head" data-reveal>
            <h2>What renters said</h2>
            <p>Collected from Google reviews left by people who drove our cars.</p>
          </div>
          <div className="reviews" data-reveal>
            {reviews.map((r) => (
              <blockquote className="review" key={r.name}>
                <div className="stars" aria-label="5 out of 5">★★★★★</div>
                <p>{r.text}</p>
                <footer>
                  <b>{r.name}</b>
                  <span>{r.days}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="section section--tight">
        <div className="wrap">
          <div className="head" data-reveal>
            <h2>Questions before you book</h2>
          </div>
          <div className="faq" data-reveal>
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="strip">
        <div className="wrap strip__inner" data-reveal>
          <div>
            <h2>Landing soon? Reserve the car now.</h2>
            <p>Tell us the flight number and it will be waiting outside arrivals.</p>
          </div>
          <div style={{ display: 'flex', gap: '.7rem', flexWrap: 'wrap' }}>
            <a className="btn btn--ink" href="#book">Book a car</a>
            <a className="btn btn--ghost" href={`tel:${business.phoneDial}`}>{business.phone}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
