import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Fleet from './pages/Fleet'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Book from './pages/Book'
import { business } from './data/site'

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <div id="home"><Home /></div>
          <div id="fleet"><Fleet /></div>
        <div id="services"><Services /></div>
        <div id="about"><About /></div>
        <div id="contact"><Contact /></div>
        <div id="book"><Book /></div>
      </main>
      <Footer />
      <a
        className="wa-fab"
        href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent('Hi, I want to rent a car in Goa.')}`}
        target="_blank"
        rel="noreferrer"
      >
        ◉ <span>WhatsApp us</span>
      </a>
    </>
  )
}
