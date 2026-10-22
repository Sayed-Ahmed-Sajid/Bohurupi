import Scene from '../components/Scene'

export default function About() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-extrabold sm:text-4xl">About Bohurupi</h1>
          <p className="mt-4 text-slate-700">
            Bohurupi means "one who takes many forms". Bangladesh is just like that: sea in Cox's Bazar, hills in Bandarban
            and Sajek, lakes in Rangamati and tea gardens in Sylhet and Sreemangal. We help travelers find hotels and tour
            packages for all these faces of the country in one place.
          </p>
          <p className="mt-4 text-slate-700">
            We started in Chattogram, close to the sea and the hills, and want every trip to be easy to plan and fair in price.
          </p>
          <p className="mt-4 text-slate-700">This website is a student project built with React, Tailwind CSS and React Router.</p>
        </div>
        <div className="h-72 overflow-hidden rounded-3xl">
          <Scene variant="beach" image="/images/about.png" alt="About Bohurupi" />
        </div>
      </div>
    </section>
  )
}