import { useState } from 'react'
import DestinationCard from '../components/DestinationCard'
import { destinations } from '../data/destinations'

export default function Destinations() {
  const [query, setQuery] = useState('')
  const filtered = destinations.filter((d) =>
    `${d.name} ${d.region}`.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Destinations</h1>
        <p className="mt-2 text-slate-600">Pick a place to see its tour packages.</p>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by place or region"
          aria-label="Search destinations"
          className="mt-6 w-full max-w-md rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-sea focus:outline-none focus:ring-2 focus:ring-sea/30"
        />
        {filtered.length === 0 ? (
          <p className="mt-8 text-slate-600">No destinations match "{query}". Try a different name.</p>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((d) => <DestinationCard key={d.id} destination={d} />)}
          </div>
        )}
      </div>
    </section>
  )
}
