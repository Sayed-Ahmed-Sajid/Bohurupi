import { Link } from 'react-router-dom'
import Scene from './Scene'
import { imageFor } from '../data/images'

export default function DestinationCard({ destination }) {
  const { name, region, tagline, scene } = destination
  return (
    <Link
      to={`/packages?destination=${encodeURIComponent(name)}`}
      className="group relative block h-64 overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200"
    >
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
        <Scene variant={scene} image={imageFor(name)} alt={name} />
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5 pt-16 text-white">
        <p className="text-xs font-semibold text-white/80">{region}</p>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm text-white/90">{tagline}</p>
      </div>
    </Link>
  )
}