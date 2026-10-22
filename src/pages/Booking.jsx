import { useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { packages } from '../data/packages'

export default function Booking() {
  const [params] = useSearchParams()
  const [form, setForm] = useState({
    packageId: params.get('package') || String(packages[0].id),
    guests: Number(params.get('guests')) || 2,
    date: '',
    name: '',
    phone: '',
    email: '',
  })
  const [errors, setErrors] = useState({})
  const [confirmed, setConfirmed] = useState(null)

  const pkg = packages.find((p) => p.id === Number(form.packageId)) || packages[0]
  const total = pkg.price * form.guests

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: name === 'guests' ? Math.max(1, Number(value) || 1) : value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = {}
    const today = new Date().toISOString().split('T')[0]
    if (!form.date || form.date < today) errs.date = 'Choose a travel date from today onwards.'
    if (!form.name.trim()) errs.name = 'Enter your full name.'
    if (!/^(\+?88)?01[3-9]\d{8}$/.test(form.phone.replace(/[\s-]/g, ''))) errs.phone = 'Enter a valid Bangladeshi mobile number.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address.'
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      setConfirmed({ ref: `BH-${Date.now().toString().slice(-6)}`, ...form, title: pkg.title, total })
    }
  }

  if (confirmed) {
    return (
      <section className="px-4 py-16">
        <div className="mx-auto max-w-lg rounded-2xl border border-slate-200 p-8 text-center shadow-sm">
          <h1 className="text-3xl font-extrabold text-sea-dark">Booking request received</h1>
          <p className="mt-2 text-slate-600">Reference <strong>{confirmed.ref}</strong>. We will contact {confirmed.name} on {confirmed.phone} to confirm.</p>
          <dl className="mt-6 space-y-2 rounded-xl bg-sea-light p-5 text-left text-sm">
            <div className="flex justify-between"><dt>Package</dt><dd className="font-semibold">{confirmed.title}</dd></div>
            <div className="flex justify-between"><dt>Travel date</dt><dd className="font-semibold">{confirmed.date}</dd></div>
            <div className="flex justify-between"><dt>Guests</dt><dd className="font-semibold">{confirmed.guests}</dd></div>
            <div className="flex justify-between border-t border-sea/20 pt-2"><dt>Total</dt><dd className="font-bold">BDT {confirmed.total.toLocaleString()}</dd></div>
          </dl>
          <Link to="/" className="mt-6 inline-block rounded-lg bg-sea px-6 py-2.5 font-bold text-white hover:bg-sea-dark">Back to home</Link>
        </div>
      </section>
    )
  }

  const input = 'mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-sea focus:outline-none focus:ring-2 focus:ring-sea/30'
  const err = (k) => errors[k] && <span className="text-xs font-normal text-red-600">{errors[k]}</span>

  return (
    <section className="px-4 py-12">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.4fr_1fr]">
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <h1 className="text-3xl font-extrabold sm:text-4xl">Book your trip</h1>
          <label className="block text-sm font-semibold">Package
            <select name="packageId" value={form.packageId} onChange={handleChange} className={input}>
              {packages.map((p) => <option key={p.id} value={p.id}>{p.title}</option>)}
            </select>
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-semibold">Travel date
              <input type="date" name="date" value={form.date} onChange={handleChange} className={input} />{err('date')}
            </label>
            <label className="block text-sm font-semibold">Guests
              <input type="number" min="1" max="20" name="guests" value={form.guests} onChange={handleChange} className={input} />
            </label>
          </div>
          <label className="block text-sm font-semibold">Full name
            <input name="name" value={form.name} onChange={handleChange} className={input} />{err('name')}
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-semibold">Mobile number
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="01XXXXXXXXX" className={input} />{err('phone')}
            </label>
            <label className="block text-sm font-semibold">Email
              <input type="email" name="email" value={form.email} onChange={handleChange} className={input} />{err('email')}
            </label>
          </div>
          <button className="rounded-lg bg-sun px-8 py-3 font-bold text-ink hover:bg-sun-dark">Send booking request</button>
        </form>

        <aside className="h-fit rounded-2xl bg-sea-light p-6 lg:sticky lg:top-24">
          <h2 className="text-lg font-bold">Summary</h2>
          <p className="mt-3 font-semibold">{pkg.title}</p>
          <p className="text-sm text-slate-600">{pkg.destination}, {pkg.days} days</p>
          <p className="mt-4 flex justify-between text-sm"><span>BDT {pkg.price.toLocaleString()} x {form.guests}</span><span>BDT {total.toLocaleString()}</span></p>
          <p className="mt-3 flex justify-between border-t border-sea/20 pt-3 font-bold"><span>Total</span><span>BDT {total.toLocaleString()}</span></p>
        </aside>
      </div>
    </section>
  )
}
