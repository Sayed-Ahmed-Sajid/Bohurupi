import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-extrabold text-sea-dark">Bohurupi</p>
          <p className="mt-2 text-sm text-slate-600">Hotels and tour packages across Bangladesh.</p>
        </div>
        <div>
          <p className="font-bold">Explore</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            <li><Link to="/destinations" className="hover:text-sea">Destinations</Link></li>
            <li><Link to="/packages" className="hover:text-sea">Packages</Link></li>
            <li><Link to="/hotels" className="hover:text-sea">Hotels</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold">Company</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            <li><Link to="/about" className="hover:text-sea">About us</Link></li>
            <li><Link to="/contact" className="hover:text-sea">Contact</Link></li>
            <li><Link to="/wishlist" className="hover:text-sea">My wishlist</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold">Contact</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            <li>Chattogram, Bangladesh</li>
            <li>hello@Bohurupi.example</li>
            <li>+880 1XXX-XXXXXX</li>
          </ul>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-slate-500">&copy; {new Date().getFullYear()} Bohurupi. Student project.</p>
    </footer>
  )
}
