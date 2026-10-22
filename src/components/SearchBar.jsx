import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { destinations } from '../data/destinations'

export default function SearchBar() {
  const navigate = useNavigate()
  const selectRef = useRef(null) // useRef: focus the field when it is empty
  const [place, setPlace] = useState('')
  const [date, setDate] = useState('')
  const [guests, setGuests] = useState(2)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!place) {
      setError('Choose a destination to continue.')
      selectRef.current?.focus()
      return
    }
    navigate(`/packages?destination=${encodeURIComponent(place)}`)
  }

  const field = 'mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-ink focus:border-sea focus:outline-none focus:ring-2 focus:ring-sea/30'

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-200 sm:p-5" aria-label="Search trips">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_0.7fr_auto] lg:items-end">
        <label className="text-xs font-semibold text-slate-600">
          Where to?
          <select ref={selectRef} value={place} onChange={(e) => { setPlace(e.target.value); setError('') }} className={field}>
            <option value="">Choose a destination</option>
            {destinations.map((d) => <option key={d.id} value={d.name}>{d.name}</option>)}
          </select>
        </label>
        <label className="text-xs font-semibold text-slate-600">
          Travel date
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={field} />
        </label>
        <label className="text-xs font-semibold text-slate-600">
          Guests
          <input type="number" min="1" max="20" value={guests} onChange={(e) => setGuests(e.target.value)} className={field} />
        </label>
        <button type="submit" className="rounded-lg bg-sea px-6 py-2.5 text-sm font-bold text-white hover:bg-sea-dark sm:col-span-2 lg:col-span-1">
          Find trips
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-red-600" role="alert">{error}</p>}
    </form>
  )
}
