import { Link } from 'react-router-dom'
import Scene from './Scene'

export default function CtaBanner() {
  return (
    <section className="px-4 py-16">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-sea-dark">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 opacity-90 md:block"><Scene variant="sunrise" /></div>
        <div className="relative max-w-lg p-8 text-white sm:p-12">
          <h2 className="text-3xl font-extrabold">Ready for your next trip?</h2>
          <p className="mt-3 text-white/85">Pick a package, set your date and send the booking form in two minutes.</p>
          <Link to="/booking" className="mt-6 inline-block rounded-lg bg-sun px-6 py-3 font-bold text-ink hover:bg-sun-dark">Book now</Link>
        </div>
      </div>
    </section>
  )
}
