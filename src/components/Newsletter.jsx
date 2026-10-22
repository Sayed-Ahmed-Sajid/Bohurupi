import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | error | done

  const handleSubmit = (e) => {
    e.preventDefault()
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    setStatus(valid ? 'done' : 'error')
    if (valid) setEmail('')
  }

  return (
    <section className="bg-ink px-4 py-14 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-extrabold">Get trip deals in your inbox</h2>
          <p className="mt-1 text-sm text-white/70">One email a month with new packages and discounts.</p>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-md" noValidate>
          <div className="flex gap-2">
            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); setStatus('idle') }}
              placeholder="Your email address" aria-label="Email address"
              className="w-full rounded-lg px-3 py-2.5 text-sm text-ink" />
            <button className="rounded-lg bg-sun px-5 py-2.5 text-sm font-bold text-ink hover:bg-sun-dark">Subscribe</button>
          </div>
          {status === 'error' && <p className="mt-2 text-sm text-red-300" role="alert">Enter a valid email address.</p>}
          {status === 'done' && <p className="mt-2 text-sm text-emerald-300">Subscribed. Check your inbox for a welcome email.</p>}
        </form>
      </div>
    </section>
  )
}
