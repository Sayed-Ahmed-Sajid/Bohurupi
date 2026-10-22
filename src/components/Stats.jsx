import { destinations } from '../data/destinations'
import { packages } from '../data/packages'
import { hotels } from '../data/hotels'

export default function Stats() {
  const avg = (packages.reduce((s, p) => s + p.rating, 0) / packages.length).toFixed(1)
  const items = [
    { value: destinations.length, label: 'Destinations' },
    { value: packages.length, label: 'Tour packages' },
    { value: hotels.length, label: 'Partner hotels' },
    { value: avg, label: 'Average rating' },
  ]
  return (
    <section className="px-4 pb-6 pt-20">
      <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-6 text-center md:grid-cols-4">
        {items.map((i) => (
          <div key={i.label}>
            <dd className="font-display text-3xl font-extrabold text-sea-dark sm:text-4xl">{i.value}</dd>
            <dt className="mt-1 text-sm text-slate-600">{i.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  )
}
