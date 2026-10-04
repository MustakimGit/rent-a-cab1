import { useState } from 'react'
import { business } from '../data/site'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#fleet', label: 'Fleet' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="wrap">
        <div className="header__bar">
          <a href="#home" className="brand" onClick={() => setOpen(false)}>
            <span className="brand__mark" aria-hidden="true">R</span>
            <span>
              <span className="brand__name">Royal Rent a Cab</span>
              <span className="brand__sub">GOA · SELF DRIVE</span>
            </span>
          </a>

          <nav className="nav" aria-label="Main">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="header__cta">
            <a className="header__phone" href={`tel:${business.phoneDial}`}>
              {business.phone}
            </a>
            <a className="btn btn--brass" href="#book">Book a car</a>
            <button
              className="burger"
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {open && (
          <nav className="nav nav--open" aria-label="Mobile">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href={`tel:${business.phoneDial}`} onClick={() => setOpen(false)}>
              Call {business.phone}
            </a>
            <a href="#book" onClick={() => setOpen(false)}>Book a car</a>
          </nav>
        )}
      </div>
    </header>
  )
}
