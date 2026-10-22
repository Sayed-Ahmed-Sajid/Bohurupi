import { Link } from 'react-router-dom'
import Scene from './Scene'
import Stars from './Stars'
import WishlistButton from './WishlistButton'
import { imageFor } from '../data/images'

export default function PackageCard({ pkg }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative h-44">
        <Scene variant={pkg.scene} image={imageFor(pkg.destination)} alt={pkg.title} />
        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-sea-dark">{pkg.tag}</span>
        <WishlistButton id={pkg.id} className="absolute right-3 top-3" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-snug">{pkg.title}</h3>
        <p className="mt-1 flex items-center gap-2 text-sm text-slate-600">
          {pkg.destination} <span aria-hidden="true">&middot;</span> {pkg.days} days <span aria-hidden="true">&middot;</span> <Stars rating={pkg.rating} />
        </p>
        <div className="mt-auto flex items-end justify-between pt-5">
          <p>
            <span className="block text-xs text-slate-500">From, per person</span>
            <span className="text-xl font-extrabold text-sea-dark">BDT {pkg.price.toLocaleString()}</span>
          </p>
          <Link to={`/packages/${pkg.id}`} className="rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-sea-dark">View details</Link>
        </div>
      </div>
    </article>
  )
}