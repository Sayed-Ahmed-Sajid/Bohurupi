import { useState } from 'react'
import { faqs } from '../data/faqs'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-extrabold sm:text-3xl">Questions before you book</h2>
        <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((f, i) => {
            const open = openIndex === i
            return (
              <div key={f.q}>
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                >
                  {f.q}
                  <span className="text-xl text-sea" aria-hidden="true">{open ? '\u2212' : '+'}</span>
                </button>
                {open && <p className="px-5 pb-5 text-sm text-slate-600">{f.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
