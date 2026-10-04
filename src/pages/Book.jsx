import { useSearchParams } from 'react-router-dom'
import QuoteForm from '../components/QuoteForm'
import { business, fleet, faqs } from '../data/site'

export default function Book() {
  const [params] = useSearchParams()
  const requested = params.get('car')
  const valid = fleet.some((c) => c.id === requested) ? requested : undefined

  return (
    <>
      <section className="phead">
        <div className="wrap">
          <h1>Book a car</h1>
          <p style={{ maxWidth: '52ch' }}>
            Fill this in and it becomes a complete WhatsApp enquiry — car, dates, delivery point
            and price. We confirm within the hour.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <QuoteForm variant="card" initialCar={valid} />

          <div className="prose">
            <h2>What happens next</h2>
            <p>
              Your message lands on WhatsApp with everything we need. We check the car is free
              for those dates and reply with a confirmation and the delivery time. Nothing is
              charged until the car is in front of you.
            </p>
            <h2>Bring with you</h2>
            <ul>
              <li>Your driving licence, original</li>
              <li>One government photo ID</li>
              <li>₹3,000 refundable deposit, UPI or cash</li>
            </ul>
            <h2>Rather just talk?</h2>
            <p>
              Call <a href={`tel:${business.phoneDial}`}>{business.phone}</a>. Same person, same
              prices.
            </p>

            <h2>Quick answers</h2>
            <div className="faq">
              {faqs.slice(0, 4).map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
