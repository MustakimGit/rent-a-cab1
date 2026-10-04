/**
 * Hand-drawn SVG silhouettes so the site looks finished before you have
 * photos. Add a photo to /public/fleet/ and set `image` in src/data/site.js
 * and the photo is used instead.
 */
const SHAPES = {
  hatchback: 'M18 62 L30 62 C34 44 44 36 62 34 L92 32 L106 20 L138 20 L150 32 L182 36 C196 39 202 48 204 62 L214 62',
  sedan: 'M14 62 L26 62 C30 45 40 37 58 35 L86 31 L102 18 L146 18 L164 33 L196 37 C210 40 216 49 218 62 L228 62',
  suv: 'M14 62 L26 62 C28 42 38 32 56 30 L84 26 L98 12 L156 12 L176 28 L202 32 C216 35 222 44 224 62 L234 62',
  offroad: 'M14 60 L26 60 C28 40 34 30 52 28 L74 26 L74 10 L162 10 L162 26 L192 30 C208 33 214 42 216 60 L228 60',
  van: 'M14 62 L26 62 C26 40 34 28 52 25 L86 20 L100 10 L158 10 L180 26 L204 31 C218 34 224 45 226 62 L236 62',
}

const WHEELS = {
  hatchback: [64, 172],
  sedan: [62, 178],
  suv: [60, 184],
  offroad: [56, 182],
  van: [58, 186],
}

export default function CarArt({ body = 'hatchback', label = '' }) {
  const path = SHAPES[body] || SHAPES.hatchback
  const [w1, w2] = WHEELS[body] || WHEELS.hatchback

  return (
    <svg
      viewBox="0 0 248 86"
      width="100%"
      role="img"
      aria-label={label || 'Car illustration'}
      style={{ maxWidth: 330, filter: 'drop-shadow(0 8px 14px rgba(0,0,0,.35))' }}
    >
      {/* road */}
      <line x1="4" y1="74" x2="244" y2="74" stroke="rgba(237,230,216,.22)" strokeWidth="1.5" />
      {/* body */}
      <path
        d={path}
        fill="none"
        stroke="#ede6d8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* windows */}
      <path
        d={path}
        fill="rgba(203,161,53,.16)"
        stroke="none"
      />
      {/* wheels */}
      {[w1, w2].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="62" r="13" fill="#071418" stroke="#cba135" strokeWidth="2.5" />
          <circle cx={cx} cy="62" r="4" fill="#cba135" />
        </g>
      ))}
    </svg>
  )
}
