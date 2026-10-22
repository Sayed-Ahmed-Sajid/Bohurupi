const steps = [
  { title: 'Choose a place', text: 'Search by destination or browse our featured packages.' },
  { title: 'Pick your package', text: 'Check what is included, set the guest count and see the total price.' },
  { title: 'Confirm and travel', text: 'Send the booking form. We confirm and share your trip details.' },
]

export default function HowItWorks() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-extrabold sm:text-3xl">How booking works</h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sea font-bold text-white">{i + 1}</span>
              <div>
                <h3 className="font-bold">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
