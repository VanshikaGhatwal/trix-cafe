'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Reveal from '@/components/ui/Reveal'

export default function Intro() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.0])

  return (
    <section ref={ref} className="bg-ivory py-28 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        {/* Editorial two-col */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-0 items-center">

          {/* Left — large image */}
          <div className="lg:col-span-5 lg:col-start-1">
            <Reveal>
              <div className="img-zoom relative rounded-none overflow-hidden aspect-[3/4]">
                <motion.img
                  style={{ scale: imgScale }}
                  src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=900&q=85"
                  alt="Trix morning ritual"
                  className="w-full h-full object-cover"
                />
                {/* Overlay label */}
                <div className="absolute bottom-6 left-6">
                  <span className="font-body text-[0.625rem] tracking-[0.25em] uppercase text-ivory/80 bg-espresso/60 backdrop-blur-sm px-4 py-2">
                    New Delhi · Since 2018
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — story */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
            <Reveal delay={0.1}>
              <span className="section-label mb-10 block">Our Philosophy</span>
            </Reveal>

            <Reveal delay={0.2}>
              <h2
                className="font-editorial font-light text-espresso leading-[1.1] mb-8 text-balance"
                style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)' }}
              >
                A space built for<br />
                <em className="italic">slowing down</em>
              </h2>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="font-body font-light text-espresso/65 text-[1.0625rem] leading-[1.85] mb-6">
                Trix is not just a café. It is a considered world — one where every object has a reason, every flavour is intentional, and every visit leaves you feeling more yourself than when you arrived.
              </p>
            </Reveal>

            <Reveal delay={0.38}>
              <p className="font-body font-light text-espresso/65 text-[1.0625rem] leading-[1.85] mb-12">
                We work with small-batch roasters, local farmers and seasonal produce to ensure that what arrives at your table carries meaning. Come hungry. Leave inspired.
              </p>
            </Reveal>

            {/* Stat row */}
            <Reveal delay={0.45}>
              <div className="flex gap-10 pt-8 border-t border-espresso/12">
                {[
                  { n: '6+', label: 'Years crafting' },
                  { n: '12', label: 'Single-origins' },
                  { n: '40+', label: 'Seasonal dishes' },
                ].map(s => (
                  <div key={s.label}>
                    <p className="font-editorial text-4xl font-light text-espresso mb-1">{s.n}</p>
                    <p className="font-body text-[0.7rem] tracking-[0.15em] uppercase text-espresso/45">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}
