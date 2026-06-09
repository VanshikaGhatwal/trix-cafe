'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '@/data'
import Reveal from '@/components/ui/Reveal'

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState(1)

  const go = useCallback((d: 1 | -1) => {
    setDir(d)
    setIdx(i => (i + d + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const t = setInterval(() => go(1), 6000)
    return () => clearInterval(t)
  }, [go])

  const t = testimonials[idx]

  return (
    <section className="bg-cream py-28 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left label */}
          <div className="lg:col-span-3">
            <Reveal>
              <span className="section-label mb-6 block">Voices</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-editorial font-light text-espresso leading-[1.1]"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                What our guests carry with them
              </h2>
            </Reveal>

            {/* Nav dots */}
            <div className="flex gap-2 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i) }}
                  className="transition-all duration-400"
                >
                  <span
                    className="block h-px transition-all duration-400"
                    style={{
                      width: i === idx ? '2rem' : '0.75rem',
                      background: i === idx ? '#2C1A0E' : 'rgba(44,26,14,0.25)',
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right — testimonial */}
          <div className="lg:col-span-8 lg:col-start-5">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={idx}
                custom={dir}
                initial={{ opacity: 0, x: dir > 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir > 0 ? -60 : 60 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Big quote mark */}
                <div
                  className="font-editorial text-espresso/8 leading-none select-none mb-4"
                  style={{ fontSize: '10rem', lineHeight: 0.8 }}
                  aria-hidden
                >
                  "
                </div>

                <blockquote
                  className="font-editorial font-light text-espresso leading-[1.55] mb-10 text-balance"
                  style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.1rem)' }}
                >
                  {t.text}
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-body text-espresso font-medium text-sm">{t.name}</p>
                    <p className="font-body text-espresso/45 text-xs tracking-[0.12em] uppercase mt-0.5">{t.role}</p>
                  </div>
                  {/* Stars */}
                  <div className="ml-auto flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 star fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
