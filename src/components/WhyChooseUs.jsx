const reasons = [
  { title: 'Clear prices', text: 'Every package lists what is included, so there are no surprise charges.', icon: 'M12 3v18M7 8c0-2 2-3 5-3s5 1 5 3-2 3-5 3-5 1-5 3 2 3 5 3 5-1 5-3' },
  { title: 'Local guides', text: 'Guides who live in the hills and on the coasts you visit.', icon: 'M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z' },
  { title: 'Easy booking', text: 'Pick a package, choose your date and confirm in a few steps.', icon: 'M5 12l4 4L19 7' },
  { title: 'Help any time', text: 'Call or message our team before and during your trip.', icon: 'M4 5h16v11H9l-5 4V5Z' },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-sea-light px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-extrabold sm:text-3xl">Why travel with Bohurupi</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl bg-white p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sea text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={r.icon} /></svg>
              </span>
              <h3 className="mt-4 font-bold text-ink">{r.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
