import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { packages } from '../data/packages'
import Scene from '../components/Scene'
import Stars from '../components/Stars'
import WishlistButton from '../components/WishlistButton'
import { imageFor } from '../data/images'

export default function PackageDetails() {
  const { id } = useParams() // dynamic route parameter
  const navigate = useNavigate()
  const pkg = packages.find((p) => p.id === Number(id))
  const [guests, setGuests] = useState(2)

  useEffect(() => {
    if (pkg) document.title = `${pkg.title} | Bohurupi`
    return () => { document.title = 'Bohurupi' }
  }, [pkg])

  if (!pkg) {
    return (
      <section className="px-4 py-20 text-center">
        <h1 className="text-2xl font-extrabold">Package not found</h1>
        <button onClick={() => navigate('/packages')} className="mt-4 rounded-lg bg-sea px-5 py-2.5 font-semibold text-white">Back to packages</button>
      </section>
    )
  }

  const total = pkg.price * guests

  return (
    <section className="px-4 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[2fr_1fr]">
        <div>
          <Link to="/packages" className="text-sm font-semibold text-sea hover:underline">&larr; All packages</Link>
          <div className="relative mt-4 h-56 overflow-hidden rounded-2xl sm:h-80">
            <Scene variant={pkg.scene} image={imageFor(pkg.destination)} alt={pkg.title} />
            <WishlistButton id={pkg.id} className="absolute right-4 top-4" />
          </div>
          <h1 className="mt-6 text-3xl font-extrabold sm:text-4xl">{pkg.title}</h1>
          <p className="mt-2 flex flex-wrap items-center gap-2 text-slate-600">
            {pkg.destination} <span aria-hidden="true">&middot;</span> {pkg.days} days <span aria-hidden="true">&middot;</span> <Stars rating={pkg.rating} />
          </p>
          <p className="mt-4 max-w-prose text-slate-700">{pkg.description}</p>
          <h2 className="mt-8 text-xl font-bold">What is included</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {pkg.includes.map((item) => (
              <li key={item} className="rounded-lg bg-sea-light px-4 py-2.5 text-sm font-medium text-sea-dark">{item}</li>
            ))}
          </ul>
        </div>

        <aside className="h-fit rounded-2xl border border-slate-200 p-6 shadow-sm lg:sticky lg:top-24">
          <p className="font-display text-3xl font-extrabold text-sea-dark">BDT {pkg.price.toLocaleString()}</p>
          <p className="text-xs text-slate-500">per person</p>
          <label className="mt-5 block text-sm font-semibold">
            Guests
            <input type="number" min="1" max="20" value={guests}
              onChange={(e) => setGuests(Math.max(1, Number(e.target.value) || 1))}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 focus:border-sea focus:outline-none focus:ring-2 focus:ring-sea/30" />
          </label>
          <p className="mt-5 flex justify-between border-t border-slate-200 pt-4 font-bold"><span>Total</span><span>BDT {total.toLocaleString()}</span></p>
          <button onClick={() => navigate(`/booking?package=${pkg.id}&guests=${guests}`)}
            className="mt-4 w-full rounded-lg bg-sun px-4 py-3 font-bold text-ink hover:bg-sun-dark">Book now</button>
        </aside>
      </div>
    </section>
  )
}