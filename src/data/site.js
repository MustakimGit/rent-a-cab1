// ─────────────────────────────────────────────────────────────
//  EDIT EVERYTHING ABOUT THE BUSINESS HERE.
//  Phone, address, prices and cars all come from this one file.
// ─────────────────────────────────────────────────────────────

export const business = {
  name: 'Royal Rent a Cab',
  tagline: 'Self drive car rental in Goa',
  phone: '+91 98765 43210',
  phoneDial: '+919876543210',        // used for tel: links
  whatsapp: '919876543210',          // used for wa.me links (no + sign)
  email: 'bookings@royalrentacab.in',
  instagram: 'https://instagram.com/',
  address: ['Shop 18, Karma Empress, Mundvel,', 'Vasco da Gama, Goa 403802'],
  hours: 'Deliveries 6:00 AM – 11:00 PM · Support 24/7',
  gstNote: 'Security deposit ₹3,000, refunded on return.',
}

// body: hatchback | sedan | suv | offroad | van  (drives the illustration)
// image: drop a photo in /public/fleet/ and set e.g. '/fleet/thar.jpg' to use it
export const fleet = [
  {
    id: 'baleno',
    name: 'Maruti Suzuki Baleno',
    type: 'Hatchback',
    body: 'hatchback',
    rate: 1400,
    seats: 5,
    bags: 2,
    fuel: 'Petrol',
    transmission: 'Manual / Automatic',
    image: '/fleet/baleno.jpg',
    blurb: 'Light on fuel and easy through Panjim traffic. The one most couples pick.',
    best: 'Couples, city runs, first-timers in Goa',
  },
  {
    id: 'swift',
    name: 'Maruti Swift',
    type: 'Hatchback',
    body: 'hatchback',
    rate: 1200,
    seats: 5,
    bags: 2,
    fuel: 'Petrol',
    transmission: 'Manual',
    image: '/fleet/swift.jpg',
    blurb: 'The cheapest way to get properly mobile. Parks anywhere in Calangute.',
    best: 'Budget trips, short rentals',
  },
  {
    id: 'dzire',
    name: 'Maruti Dzire',
    type: 'Sedan',
    body: 'sedan',
    rate: 1600,
    seats: 5,
    bags: 3,
    fuel: 'Petrol',
    transmission: 'Manual / Automatic',
    image: '/fleet/dzire.jpg',
    blurb: 'A real boot, so the luggage stays out of the back seat.',
    best: 'Airport transfers, families of four',
  },
  {
    id: 'thar',
    name: 'Mahindra Thar',
    type: 'Off-road SUV',
    body: 'offroad',
    rate: 3000,
    seats: 4,
    bags: 2,
    fuel: 'Diesel',
    transmission: 'Manual / Automatic',
    image: '/fleet/thar.jpg',
    blurb: 'Roof off, Chapora fort road, sunset. Goes where the sedans turn back.',
    best: 'Photos, hill roads, small groups',
  },
  {
    id: 'crysta',
    name: 'Toyota Innova Crysta',
    type: 'SUV',
    body: 'suv',
    rate: 3000,
    seats: 7,
    bags: 4,
    fuel: 'Diesel',
    transmission: 'Manual / Automatic',
    image: '/fleet/crysta.jpg',
    blurb: 'Seven seats that all stay comfortable from Mopa down to Palolem.',
    best: 'Families, long days, North-to-South trips',
  },
  {
    id: 'ertiga',
    name: 'Maruti Ertiga',
    type: 'MPV',
    body: 'van',
    rate: 2200,
    seats: 7,
    bags: 3,
    fuel: 'Petrol / CNG',
    transmission: 'Manual / Automatic',
    image: '/fleet/ertiga.jpg',
    blurb: 'Seven seats without the diesel bill. Good middle ground for groups.',
    best: 'Groups on a budget',
  },
]

export const locations = [
  { name: 'Dabolim Airport (GOI)', detail: 'Verna, Bogmalo and nearby areas', notice: 'Same-day delivery' },
  { name: 'Mopa Airport (GOX)', detail: 'Manohar International, North Goa', notice: 'Advance booking' },
  { name: 'Madgaon Railway Station', detail: 'KTC bus stand, Colva, Benaulim', notice: 'Same-day delivery' },
  { name: 'Vasco da Gama Station', detail: 'Anywhere in Vasco city', notice: 'Same-day delivery' },
  { name: 'Calangute & Candolim', detail: 'Baga, Anjuna, Arpora beaches', notice: 'Advance booking' },
  { name: 'Mapusa & Panjim', detail: 'Porvorim, Miramar, Dona Paula', notice: 'Advance booking' },
]

export const services = [
  {
    id: 'self-drive',
    title: 'Self drive rental',
    summary: 'Your keys, your route, no driver in the rear-view mirror.',
    detail:
      'Take the car for a day or a fortnight. We hand it over full of paperwork and clean, note every existing scratch with you before you sign, and refund the deposit the day you return it.',
  },
  {
    id: 'airport',
    title: 'Airport transfers',
    summary: 'Dabolim and Mopa pickups, tracked against your flight number.',
    detail:
      'Send us the flight number and we watch it. Delayed landings do not cost you extra waiting charges, and late-night arrivals are handled on request.',
  },
  {
    id: 'chauffeur',
    title: 'Chauffeur on request',
    summary: 'A driver who knows which road floods in monsoon.',
    detail:
      'Add a local driver to any car in the fleet. Useful for wedding parties, long South Goa days, or anyone who would rather not drive on unfamiliar roads.',
  },
  {
    id: 'casino',
    title: 'Casino & nightlife runs',
    summary: 'Down to the Mandovi jetty and back, whatever the hour.',
    detail:
      'Drop-offs at the offshore casinos, clubs in Anjuna and Baga, and a car waiting when you come out. Round trips can be held for you for the night.',
  },
  {
    id: 'weddings',
    title: 'Weddings & events',
    summary: 'Decorated cars and a convoy that arrives together.',
    detail:
      'Multiple vehicles booked as one group so the family does not get split across Goa. Decoration, ribbons and a lead car can be arranged.',
  },
  {
    id: 'cruise',
    title: 'Boating & sunset cruises',
    summary: 'Private boats on the Mandovi and Sal rivers.',
    detail:
      'Arranged alongside your car booking, with transport to the jetty included. Small private boats rather than the crowded party ferries.',
  },
]

export const reviews = [
  {
    name: 'Pranav R.',
    days: '5-day Baleno rental',
    text: 'Booking was done over WhatsApp and a quick call. Pickup at 5:30 AM, drop at 10 PM, both handled without fuss. Every small scratch was noted before I took the car and the deposit came back in full.',
  },
  {
    name: 'Binu B. P.',
    days: '6-day self drive',
    text: 'Flight was delayed and they still waited at the airport without charging a rupee extra. Car was in good condition, no unnecessary calls through the trip.',
  },
  {
    name: 'Anshuman T.',
    days: '7-day family trip',
    text: 'We were travelling with two infants. Fair price, clean car, zero problems across the week, and the security deposit was refunded without any chasing.',
  },
  {
    name: 'Subramanya S.',
    days: 'Innova Crysta',
    text: 'All seat belts working including the rear ones, delivered and collected on time. Hassle-free from start to finish.',
  },
]

export const faqs = [
  {
    q: 'What documents do I need?',
    a: 'A valid Indian or International driving licence, plus one government photo ID. We keep a photo of both, never the original documents.',
  },
  {
    q: 'What is the minimum age?',
    a: '21 years, with a licence that has been held for at least one year.',
  },
  {
    q: 'Is fuel included in the rate?',
    a: 'No. The car comes with whatever fuel is in it and you return it at the same level, so you only pay for what you actually use.',
  },
  {
    q: 'How does the deposit work?',
    a: 'A ₹3,000 refundable deposit is collected at delivery and returned when the car comes back in the same condition. Existing marks are photographed with you beforehand.',
  },
  {
    q: 'Can I pay in cash?',
    a: 'Yes. UPI, bank transfer or cash at delivery all work. No card is held on file.',
  },
  {
    q: 'Is there a kilometre limit?',
    a: 'Rentals include 250 km per day. Beyond that it is ₹9 per kilometre, told to you upfront rather than added at the end.',
  },
  {
    q: 'Can you take the car outside Goa?',
    a: 'Yes, with permission and the interstate permit arranged in advance. Tell us the route when you book.',
  },
]

export const pickupPoints = locations.map((l) => l.name)
