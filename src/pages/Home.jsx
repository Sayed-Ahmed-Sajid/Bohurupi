import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import DestinationCard from '../components/DestinationCard'
import PackageCard from '../components/PackageCard'
import HowItWorks from '../components/HowItWorks'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import CtaBanner from '../components/CtaBanner'
import Newsletter from '../components/Newsletter'
import { destinations } from '../data/destinations'
import { packages } from '../data/packages'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-extrabold sm:text-3xl">Popular destinations</h2>
            <Link to="/destinations" className="text-sm font-semibold text-sea hover:underline">See all</Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d) => <DestinationCard key={d.id} destination={d} />)}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-extrabold sm:text-3xl">Featured packages</h2>
            <Link to="/packages" className="text-sm font-semibold text-sea hover:underline">See all</Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packages.slice(0, 3).map((p) => <PackageCard key={p.id} pkg={p} />)}
          </div>
        </div>
      </section>

      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <Faq />
      <CtaBanner />
      <Newsletter />
    </>
  )
}
