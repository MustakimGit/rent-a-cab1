import { useMemo, useState } from 'react'
import { business, fleet, pickupPoints } from '../data/site'

const rupees = (n) => '₹' + n.toLocaleString('en-IN')

function todayISO(offsetDays = 0) {
  const d = new Date()
  d.setDate(d.getDate() + offsetDays)
  return d.toISOString().slice(0, 10)
}

/**
 * The quote engine. Counts days, multiplies by the daily rate from
 * src/data/site.js, and hands the whole thing to WhatsApp so the
 * business gets a complete enquiry instead of "hi price?".
 */
export default function QuoteForm({ variant = 'panel', initialCar }) {
  const [form, setForm] = useState({
    car: initialCar || fleet[0].id,
    pickup: pickupPoints[0],
    from: todayISO(1),
    to: todayISO(3),
    name: '',
    phone: '',
    notes: '',
  })

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const car = fleet.find((c) => c.id === form.car) || fleet[0]

  const { days, total, error } = useMemo(() => {
    const start = new Date(form.from)
    const end = new Date(form.to)
    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
      return { days: 0, total: 0, error: 'Pick both dates to see a price.' }
    }
    if (end < start) {
      return { days: 0, total: 0, error: 'The return date is before the pickup date.' }
    }
    const d = Math.max(1, Math.round((end - start) / 86400000))
    return { days: d, total: d * car.rate, error: null }
  }, [form.from, form.to, car.rate])

  const message = useMemo(() => {
    const lines = [
      `Hi ${business.name}, I'd like to book a car.`,
      '',
      `Car: ${car.name} (${car.type}) — ${rupees(car.rate)}/day`,
      `Pickup: ${form.pickup}`,
      `Dates: ${form.from} to ${form.to}${days ? ` (${days} ${days === 1 ? 'day' : 'days'})` : ''}`,
      days ? `Estimated total: ${rupees(total)} + fuel` : '',
      form.name ? `Name: ${form.name}` : '',
      form.phone ? `Phone: ${form.phone}` : '',
      form.notes ? `Notes: ${form.notes}` : '',
    ]
    return lines.filter(Boolean).join('\n')
  }, [car, form, days, total])

  const waLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`
  const ready = !error && form.name.trim().length > 1

  return (
    <div className={variant === 'panel' ? 'quote' : 'quote card-plain'}>
      <div className="quote__head">
        <h2>Check a price</h2>
        <span>No card needed</span>
      </div>

      <div className="field">
        <label htmlFor="q-car">Car</label>
        <select id="q-car" value={form.car} onChange={set('car')}>
          {fleet.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name} — {rupees(c.rate)}/day
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="q-pickup">Delivery point</label>
        <select id="q-pickup" value={form.pickup} onChange={set('pickup')}>
          {pickupPoints.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      <div className="field field--row">
        <div>
          <label htmlFor="q-from">Pickup date</label>
          <input id="q-from" type="date" value={form.from} min={todayISO()} onChange={set('from')} />
        </div>
        <div>
          <label htmlFor="q-to">Return date</label>
          <input id="q-to" type="date" value={form.to} min={form.from} onChange={set('to')} />
        </div>
      </div>

      <div className="field field--row">
        <div>
          <label htmlFor="q-name">Your name</label>
          <input id="q-name" value={form.name} onChange={set('name')} placeholder="Full name" />
        </div>
        <div>
          <label htmlFor="q-phone">Phone</label>
          <input id="q-phone" value={form.phone} onChange={set('phone')} placeholder="10-digit number" inputMode="tel" />
        </div>
      </div>

      {variant !== 'panel' && (
        <div className="field">
          <label htmlFor="q-notes">Anything we should know</label>
          <textarea
            id="q-notes"
            value={form.notes}
            onChange={set('notes')}
            placeholder="Flight number, child seat, driver needed, late-night delivery…"
          />
        </div>
      )}

      {error && <p className="quote__err">{error}</p>}

      <div className="quote__total">
        <span>
          <small>{days ? `${days} ${days === 1 ? 'day' : 'days'} · ${car.name}` : 'Estimate'}</small>
          <strong>{days ? rupees(total) : '—'}</strong>
        </span>
        <span style={{ textAlign: 'right', fontSize: '.78rem', color: '#55666b' }}>
          fuel not included<br />
          {rupees(3000)} refundable deposit
        </span>
      </div>

      <div className="quote__actions">
        <a
          className="btn btn--brass"
          href={ready ? waLink : undefined}
          target="_blank"
          rel="noreferrer"
          aria-disabled={!ready}
          onClick={(e) => { if (!ready) e.preventDefault() }}
          style={!ready ? { opacity: 0.45, cursor: 'not-allowed' } : undefined}
        >
          Send booking on WhatsApp
        </a>
        <a className="btn btn--ghost" href={`tel:${business.phoneDial}`}>Call instead</a>
      </div>

      <p className="quote__note">
        {ready
          ? 'Opens WhatsApp with your dates already filled in. Nothing is charged here.'
          : 'Add your name to send the booking.'}
      </p>
    </div>
  )
}
