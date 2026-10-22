import { Link } from 'react-router-dom'
import Scene from './Scene'
import Stars from './Stars'
import { imageFor } from '../data/images'

export default function HotelCard({ hotel }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="h-40"><Scene variant={hotel.scene} image={imageFor(hotel.city)} alt={hotel.name} /></div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold leading-snug">{hotel.name}</h3>
          <Stars rating={hotel.rating} />
        </div>
        <p className="mt-1 text-sm text-slate-600">{hotel.city}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {hotel.amenities.map((a) => <li key={a} className="rounded-full bg-sea-light px-3 py-1 text-xs font-semibold text-sea-dark">{a}</li>)}
        </ul>
        <div className="mt-auto flex items-end justify-between pt-5">
          <p><span className="text-xl font-extrabold text-sea-dark">BDT {hotel.pricePerNight.toLocaleString()}</span><span className="text-xs text-slate-500"> / night</span></p>
          <Link to="/contact" className="rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-sea-dark">Enquire</Link>
        </div>
      </div>
    </article>
  )
}