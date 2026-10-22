import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="px-4 py-24 text-center">
      <p className="font-display text-7xl font-extrabold text-sea">404</p>
      <h1 className="mt-2 text-2xl font-extrabold">This page does not exist</h1>
      <Link to="/" className="mt-6 inline-block rounded-lg bg-sea px-5 py-2.5 font-semibold text-white hover:bg-sea-dark">Go to home</Link>
    </section>
  )
}
