import { Link } from 'react-router-dom'
import Scene from './Scene'
import SearchBar from './SearchBar'
import { imageFor } from '../data/images'

export default function Hero() {
  return (
    <section className="bg-sea-light px-4 pt-10 sm:pt-14">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="inline-block rounded-full bg-white px-3 py-1 text-sm font-semibold text-sea-dark">


            Bohurupi: many faces of Bangladesh
          </p>

          
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            Book your next trip in minutes
          </h1>
          <p className="mt-4 max-w-lg text-base text-slate-700 sm:text-lg">
            Compare packages for Cox's Bazar, Sajek, Bandarban, Sylhet and more. Every price is clear and every trip has a local guide.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/packages" className="rounded-lg bg-sea px-6 py-3 font-bold text-white hover:bg-sea-dark">Browse packages</Link>
            <Link to="/hotels" className="rounded-lg bg-white px-6 py-3 font-bold text-ink ring-1 ring-slate-300 hover:bg-slate-50">Find a hotel</Link>
          </div>
        </div>

        <div className="relative">
          <div className="h-64 overflow-hidden rounded-3xl shadow-lg sm:h-80 lg:h-96">
            <Scene variant="hills" image={imageFor('Sajek Valley')} alt="Sajek Valley" />
          </div>
          <div className="absolute -bottom-4 left-4 rounded-xl bg-white px-4 py-3 shadow-lg">
            <p className="text-xs text-slate-500">Top rated this season</p>
            <p className="font-bold">Bandarban Adventure</p>
            <p className="text-sm text-sea-dark">Rating 4.9 / 5</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-5xl translate-y-8">
        <SearchBar />
      </div>
    </section>
  )
}