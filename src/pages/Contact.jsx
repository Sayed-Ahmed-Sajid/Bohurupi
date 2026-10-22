import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setSent(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = {}
    if (!form.name.trim()) errs.name = 'Enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address.'
    if (form.message.trim().length < 10) errs.message = 'Write at least 10 characters.'
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    }
  }

  const input = 'mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-sea focus:outline-none focus:ring-2 focus:ring-sea/30'

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-xl">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Contact us</h1>
        <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
          <label className="block text-sm font-semibold">Name
            <input name="name" value={form.name} onChange={handleChange} className={input} />
            {errors.name && <span className="text-xs font-normal text-red-600">{errors.name}</span>}
          </label>
          <label className="block text-sm font-semibold">Email
            <input name="email" type="email" value={form.email} onChange={handleChange} className={input} />
            {errors.email && <span className="text-xs font-normal text-red-600">{errors.email}</span>}
          </label>
          <label className="block text-sm font-semibold">Message
            <textarea name="message" rows="5" value={form.message} onChange={handleChange} className={input} />
            {errors.message && <span className="text-xs font-normal text-red-600">{errors.message}</span>}
          </label>
          <button className="rounded-lg bg-sea px-6 py-2.5 font-bold text-white hover:bg-sea-dark">Send message</button>
          {sent && <p className="text-sm text-emerald-700" role="status">Message sent. We will reply within one working day.</p>}
        </form>
      </div>
    </section>
  )
}
