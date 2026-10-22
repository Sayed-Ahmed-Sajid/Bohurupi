import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PackageCard from '../components/PackageCard'
import { packages } from '../data/packages'

export default function Packages() {
  const [params] = useSearchParams()
  const [destination, setDestination] = useState(params.get('destination') || 'All')
  const [sort, setSort] = useState('default')

  const places = ['All', ...new Set(packages.map((p) => p.destination))]

  let list = packages.filter((p) => destination === 'All' || p.destination === destination)
  if (sort === 'low') list = [...list].sort((a, b) => a.price - b.price)
  if (sort === 'high') list = [...list].sort((a, b) => b.price - a.price)
  if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating)

  const select = 'rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm focus:border-sea focus:outline-none focus:ring-2 focus:ring-sea/30'

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Tour packages</h1>
        <div className="mt-6 flex flex-wrap gap-3">
          <select value={destination} onChange={(e) => setDestination(e.target.value)} className={select} aria-label="Filter by destination">
            {places.map((p) => <option key={p}>{p}</option>)}
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className={select} aria-label="Sort packages">
            <option value="default">Sort: Featured</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
            <option value="rating">Top rated</option>
          </select>
        </div>
        <p className="mt-4 text-sm text-slate-600">{list.length} package(s) found</p>
        {list.length === 0 ? (
          <p className="mt-8 text-slate-600">No packages for this destination yet. Choose another one.</p>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => <PackageCard key={p.id} pkg={p} />)}
          </div>
        )}
      </div>
    </section>
  )
}
