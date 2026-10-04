import { Link } from 'react-router-dom'
import CarArt from './CarArt'

export default function CarCard({ car }) {
  return (
    <article className="car">
      <div className="car__visual">
        {car.image ? (
          <img src={car.image} alt={car.name} loading="lazy" />
        ) : (
          <CarArt body={car.body} label={car.name} />
        )}
        <p className="car__rate">
          ₹{car.rate.toLocaleString('en-IN')} <small>/ day</small>
        </p>
      </div>

      <div className="car__body">
        <h3>{car.name}</h3>
        <p className="car__type">{car.type}</p>
        <p className="car__blurb">{car.blurb}</p>

        <ul className="specs">
          <li><span>Seats</span> {car.seats}</li>
          <li><span>Bags</span> {car.bags}</li>
          <li><span>Fuel</span> {car.fuel}</li>
          <li><span>Gearbox</span> {car.transmission}</li>
        </ul>

        <Link className="btn btn--ink btn--block" to={`/?car=${car.id}#book`}>
          Book this car
        </Link>
      </div>
    </article>
  )
}
