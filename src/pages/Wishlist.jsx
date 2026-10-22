import { Link } from 'react-router-dom'
import PackageCard from '../components/PackageCard'
import { packages } from '../data/packages'
import { useWishlist } from '../context/WishlistContext'

export default function Wishlist() {
  const { ids } = useWishlist()
  const saved = packages.filter((p) => ids.includes(p.id))

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-extrabold sm:text-4xl">My wishlist</h1>
        {saved.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 p-10 text-center">
            <p className="text-slate-600">You have not saved any packages yet. Tap the heart on a package to save it here.</p>
            <Link to="/packages" className="mt-4 inline-block rounded-lg bg-sea px-5 py-2.5 font-semibold text-white hover:bg-sea-dark">Browse packages</Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {saved.map((p) => <PackageCard key={p.id} pkg={p} />)}
          </div>
        )}
      </div>
    </section>
  )
}
