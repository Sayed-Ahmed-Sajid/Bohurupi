import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useWishlist } from '../context/WishlistContext'

const links = [
  { to: '/', label: 'Home' },
  { to: '/destinations', label: 'Destinations' },
  { to: '/packages', label: 'Packages' },
  { to: '/hotels', label: 'Hotels' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false) // useState: mobile menu toggle
  const { ids } = useWishlist()

  const linkClass = ({ isActive }) =>
    `block rounded-md px-3 py-2 text-sm font-semibold transition ${
      isActive ? 'bg-sea-light text-sea-dark' : 'text-ink/80 hover:text-sea'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3" aria-label="Main">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-extrabold text-sea-dark" onClick={() => setOpen(false)}>
          <img src="/images/logo.jpg" alt="" className="h-9 w-9 object-contain" />
          Bohurupi
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.to}><NavLink to={l.to} end={l.to === '/'} className={linkClass}>{l.label}</NavLink></li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link to="/wishlist" className="relative rounded-full p-2 hover:bg-sea-light" aria-label={`Wishlist, ${ids.length} saved`}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
              <path d="M12 21s-7-4.6-9.3-9A5.4 5.4 0 0 1 12 6.2 5.4 5.4 0 0 1 21.3 12C19 16.4 12 21 12 21Z" />
            </svg>
            {ids.length > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-[11px] font-bold text-white">{ids.length}</span>
            )}
          </Link>
          <Link to="/booking" className="hidden rounded-lg bg-sun px-4 py-2 text-sm font-bold text-ink hover:bg-sun-dark sm:block">
            Book a trip
          </Link>
          <button className="rounded-md p-2 lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="space-y-1 border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
          {links.map((l) => (
            <li key={l.to}><NavLink to={l.to} end={l.to === '/'} className={linkClass} onClick={() => setOpen(false)}>{l.label}</NavLink></li>
          ))}
          <li><Link to="/booking" onClick={() => setOpen(false)} className="mt-2 block rounded-lg bg-sun px-4 py-2.5 text-center text-sm font-bold">Book a trip</Link></li>
        </ul>
      )}
    </header>
  )
}