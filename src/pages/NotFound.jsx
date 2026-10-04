import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: '55vh' }}>
      <div className="wrap prose">
        <h1>That page took a wrong turn</h1>
        <p>The link you followed does not exist. The fleet and the booking form are both a click away.</p>
        <div style={{ display: 'flex', gap: '.7rem', flexWrap: 'wrap', marginTop: '1.4rem' }}>
          <Link className="btn btn--ink" to="/">Back to home</Link>
          <Link className="btn btn--ghost" to="/fleet">See the fleet</Link>
        </div>
      </div>
    </section>
  )
}
