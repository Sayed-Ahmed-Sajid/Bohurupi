import { useEffect, useState } from 'react'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  // useEffect: auto-rotate every 6 seconds unless the user is hovering
  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000)
    return () => clearInterval(timer)
  }, [paused])

  const t = testimonials[index]

  return (
    <section className="px-4 py-16" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-extrabold sm:text-3xl">What travelers say</h2>
        <figure className="mt-8 min-h-[10rem]" aria-live="polite">
          <blockquote className="text-xl leading-relaxed text-slate-800">&ldquo;{t.text}&rdquo;</blockquote>
          <figcaption className="mt-5">
            <p className="font-bold">{t.name}, {t.place}</p>
            <p className="text-sm text-slate-500">Booked: {t.trip}</p>
          </figcaption>
        </figure>
        <div className="mt-4 flex justify-center gap-2">
          {testimonials.map((item, i) => (
            <button key={item.id} aria-label={`Show review ${i + 1}`} onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${i === index ? 'w-8 bg-sea' : 'w-2.5 bg-slate-300'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
