import { useState } from 'react'
import HotelCard from '../components/HotelCard'
import { hotels } from '../data/hotels'

export default function Hotels() {
  const [city, setCity] = useState('All')
  const [maxPrice, setMaxPrice] = useState(7000)
  const cities = ['All', ...new Set(hotels.map((h) => h.city))]

  const list = hotels.filter((h) => (city === 'All' || h.city === city) && h.pricePerNight <= maxPrice)

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Hotels</h1>
        <div className="mt-6 flex flex-wrap items-end gap-5">
          <label className="text-sm font-semibold">
            City
            <select value={city} onChange={(e) => setCity(e.target.value)}
              className="mt-1 block rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm">
              {cities.map((c) => <option key={c}>{c}</option>)}
            </select>
          </label>
          <label className="text-sm font-semibold">
            Max price per night: BDT {maxPrice.toLocaleString()}
            <input type="range" min="2000" max="7000" step="500" value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))} className="mt-2 block w-64 accent-[#0E7C86]" />
          </label>
        </div>
        <p className="mt-4 text-sm text-slate-600">{list.length} hotel(s) found</p>
        {list.length === 0 ? (
          <p className="mt-8 text-slate-600">No hotels match these filters. Raise the price limit or choose another city.</p>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((h) => <HotelCard key={h.id} hotel={h} />)}
          </div>
        )}
      </div>
    </section>
  )
}
