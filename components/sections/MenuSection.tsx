'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { menuItems, menuCategories, type MenuCategory } from '@/data'
import Reveal from '@/components/ui/Reveal'

function Card({ item, i }: { item: typeof menuItems[number]; i: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col bg-ivory border border-espresso/8 hover:border-espresso/20 transition-all duration-500"
    >
      {/* Image */}
      <div className="img-zoom relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/15 transition-all duration-700" />
        {/* Tag */}
        <div className="absolute top-4 left-4">
          <span className="menu-tag text-ivory border-ivory/60 bg-espresso/50 backdrop-blur-sm">
            {item.tag}
          </span>
        </div>
        {item.popular && (
          <div className="absolute top-4 right-4">
            <span className="menu-tag text-gold border-gold/60 bg-espresso/60 backdrop-blur-sm">
              Popular
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-editorial text-espresso font-light text-xl leading-tight">
            {item.name}
          </h3>
          <span className="font-editorial text-gold text-xl font-light whitespace-nowrap mt-0.5">
            ₹{item.price}
          </span>
        </div>
        <p className="font-body text-espresso/55 text-sm leading-relaxed font-light flex-1">
          {item.desc}
        </p>
      </div>
    </motion.article>
  )
}

export default function MenuSection() {
  const [active, setActive] = useState<MenuCategory>('All')
  const filtered = active === 'All' ? menuItems : menuItems.filter(i => i.category === active)

  return (
    <section id="menu" className="bg-mist py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <Reveal>
              <span className="section-label mb-6 block">What We Serve</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-editorial font-light text-espresso leading-[1.1]"
                style={{ fontSize: 'clamp(2.6rem, 5vw, 4.4rem)' }}
              >
                The Trix Menu
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="font-body text-espresso/55 font-light text-[1rem] leading-relaxed max-w-sm">
              Each item is a considered choice — sourced with integrity, prepared with skill, presented with care.
            </p>
          </Reveal>
        </div>

        {/* Category filter */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-12">
            {menuCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="relative font-body text-xs tracking-[0.14em] uppercase px-5 py-2.5 transition-all duration-300"
                style={{
                  color: active === cat ? '#F7F3ED' : 'rgba(44,26,14,0.5)',
                  background: active === cat ? '#2C1A0E' : 'transparent',
                  border: '1px solid',
                  borderColor: active === cat ? '#2C1A0E' : 'rgba(44,26,14,0.18)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-espresso/8"
          >
            {filtered.map((item, i) => (
              <div key={item.id} className="bg-mist">
                <Card item={item} i={i} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Footer note */}
        <Reveal delay={0.2}>
          <p className="font-body text-espresso/35 text-xs tracking-[0.12em] text-center mt-12 uppercase">
            Menu changes seasonally · Please ask about allergens · Prices inclusive of all taxes
          </p>
        </Reveal>
      </div>
    </section>
  )
}
