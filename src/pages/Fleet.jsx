import { useState } from 'react'
import CarCard from '../components/CarCard'
import { fleet } from '../data/site'

const groups = ['All cars', 'Hatchback', 'Sedan', 'SUV', 'MPV', 'Off-road SUV']

export default function Fleet() {
  const [filter, setFilter] = useState('All cars')
  const shown = filter === 'All cars' ? fleet : fleet.filter((c) => c.type === filter)

  return (
    <>
      <section className="phead">
        <div className="wrap">
          <h1>The fleet</h1>
          <p style={{ maxWidth: '54ch' }}>
            Six cars, all self drive, all delivered to you. Rates are per 24 hours and include
            250 km a day. Fuel is yours; everything else is ours.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="filters" role="group" aria-label="Filter by car type">
            {groups.map((g) => (
              <button
                key={g}
                className="chip"
                aria-pressed={filter === g}
                onClick={() => setFilter(g)}
              >
                {g}
              </button>
            ))}
          </div>

          {shown.length === 0 ? (
            <p>No cars in that category right now. Try another type or call us — we can often source one.</p>
          ) : (
            <div className="fleet">
              {shown.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section section--sand section--tight">
        <div className="wrap prose">
          <h2>What every rate includes</h2>
          <ul>
            <li>Comprehensive insurance and valid papers in the glovebox</li>
            <li>Free delivery and collection at our six listed points</li>
            <li>250 km per day, then ₹9 per extra kilometre</li>
            <li>Roadside help anywhere in Goa, on WhatsApp or a call</li>
            <li>A condition check done with you before you sign</li>
          </ul>
          <h2>What it does not include</h2>
          <ul>
            <li>Fuel — you return the car at the level you got it</li>
            <li>Tolls, parking and any traffic fines during your rental</li>
            <li>Interstate permits, unless arranged in advance</li>
          </ul>
        </div>
      </section>
    </>
  )
}
