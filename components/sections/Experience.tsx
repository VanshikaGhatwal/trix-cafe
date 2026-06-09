'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'

const panels = [
  {
    id: 'e1',
    label: 'Evening Ambience',
    title: 'When the light\nturns golden',
    body: 'As afternoon fades, Trix shifts into something more intimate. Candles replace overhead light. Conversations deepen. The kitchen reaches its most expressive hour.',
    img: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=900&q=85',
  },
  {
    id: 'e2',
    label: 'Specialty Coffee',
    title: 'Coffee as\nceremony',
    body: 'We work with micro-lot roasters across India and East Africa. Every cup is brewed to order, dosed by weight, and served with a small note about its origin.',
    img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=85',
  },
  {
    id: 'e3',
    label: 'Community',
    title: 'The people\nthat make it',
    body: 'Trix is as much about the people as the product. We host readings, talks and small gatherings that bring Delhi\'s creative community together under one roof.',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=85',
  },
]

function Panel({ p, i }: { p: typeof panels[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <div ref={ref} className="grid lg:grid-cols-2 min-h-[520px]">
      {/* Image — alternates sides */}
      <div className={`relative overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
        <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
          <img src={p.img} alt={p.label} className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-charcoal/30" />
      </div>

      {/* Content */}
      <div
        className="flex flex-col justify-center px-10 lg:px-16 py-16 bg-charcoal"
        style={{ background: i === 1 ? '#1C1916' : '#221810' }}
      >
        <Reveal delay={0.1}>
          <span
            className="font-body text-[0.625rem] tracking-[0.25em] uppercase mb-8 flex items-center gap-3"
            style={{ color: '#B8975A' }}
          >
            <span className="w-8 h-px bg-gold block" />
            {p.label}
          </span>
        </Reveal>

        <Reveal delay={0.2}>
          <h3
            className="font-editorial font-light text-ivory leading-[1.12] mb-6 whitespace-pre-line"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)' }}
          >
            {p.title}
          </h3>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="font-body font-light text-ivory/55 text-[1rem] leading-[1.9] max-w-sm">
            {p.body}
          </p>
        </Reveal>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="overflow-hidden">
      {/* Heading bridge */}
      <div className="bg-ivory py-20 lg:py-28 text-center">
        <Reveal>
          <span className="section-label justify-center mb-6" style={{ display: 'flex' }}>The Experience</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="font-editorial font-light text-espresso leading-[1.08] max-w-2xl mx-auto px-6"
            style={{ fontSize: 'clamp(2.6rem, 5vw, 4.4rem)' }}
          >
            More than a meal — <em className="italic">a feeling</em>
          </h2>
        </Reveal>
      </div>

      {/* Panels */}
      {panels.map((p, i) => <Panel key={p.id} p={p} i={i} />)}
    </section>
  )
}
