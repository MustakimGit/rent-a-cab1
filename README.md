# Royal Rent a Cab

Single-page React site for a Goa self-drive car rental. Vite + React + React Router,
plain CSS — no Tailwind or UI kit, so nothing can break on a config mismatch.

## Run it

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

Build for hosting:

```bash
npm run build     # output goes to /dist
npm run preview   # check the build locally
```

## Change the business details

Everything is in **`src/data/site.js`** — phone, WhatsApp number, email, address, cars,
prices, services, delivery points, reviews and FAQs. Edit that one file and the whole
site updates.

Two things to change first:

```js
phoneDial: '+919876543210',   // tel: links
whatsapp:  '919876543210',    // wa.me links — no + sign
```

## Add car photos

1. Put the image in `public/fleet/` (e.g. `public/fleet/thar.jpg`)
2. In `src/data/site.js`, set that car's `image: '/fleet/thar.jpg'`

Cars without a photo show a hand-drawn SVG illustration instead, so the site looks
finished either way.

## Change the colours

Top of `src/styles.css`:

```css
--ink: #0b1c21;      /* dark sections, header, footer */
--lagoon: #0f5b57;   /* accents, car panels */
--brass: #cba135;    /* buttons, numbers, highlights */
--sand: #ede6d8;     /* light band, text on dark */
```

## How booking works

There's no backend. The form in `src/components/QuoteForm.jsx` counts the rental days,
multiplies by the car's daily rate, and builds a prefilled WhatsApp message with the
car, dates, delivery point, price and customer details. Tapping the button opens
WhatsApp with all of it already typed.

To wire a real backend later, replace the `wa.me` link with a `fetch()` POST to your
API — the form state (`form`, `days`, `total`) is already all the payload you need.

## Structure

```
src/
  main.jsx            entry
  App.jsx             routes, header/footer shell, WhatsApp button
  styles.css          all styling + design tokens
  data/site.js        ← edit business content here
  components/
    Header.jsx        sticky nav, mobile menu
    Footer.jsx
    QuoteForm.jsx     price calculator + WhatsApp handoff
    CarCard.jsx
    CarArt.jsx        SVG car illustrations
  pages/
    Home.jsx  Fleet.jsx  Services.jsx  About.jsx  Contact.jsx  Book.jsx  NotFound.jsx
```

## Hosting on `www.royalrentacab.co`

1. Push this project to GitHub.
2. Create a project on Vercel or Netlify and import the repository.
3. Set the build command to `npm run build` and the output directory to `dist`.
4. Add `royalrentacab.co` and `www.royalrentacab.co` as custom domains.
5. At your domain registrar, add the DNS records shown by the host. Usually this is an
  `A` record for the root domain and a `CNAME` for `www`.
6. Set `www.royalrentacab.co` as the primary domain and redirect the root domain to it.
7. After deployment, verify `/robots.txt` and `/sitemap.xml`, then add
  `https://www.royalrentacab.co/` to Google Search Console and submit the sitemap.

The production SEO metadata is in `index.html`. Update the phone, email, address, and
business hours in `src/data/site.js` before submitting the site to Google. Replace the
placeholder values in the JSON-LD block in `index.html` if those details differ.
