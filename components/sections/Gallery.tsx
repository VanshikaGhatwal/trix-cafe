'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { galleryImages } from '@/data'
import Reveal from '@/components/ui/Reveal'

// Height map for visual rhythm
const heights: Record<string, string> = {
  tall:   '380px',
  wide:   '240px',
  square: '300px',
}

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null)
  const activeImg = galleryImages.find(g => g.id === active)

  // 3-column masonry split
  const cols = [
    galleryImages.filter((_, i) => i % 3 === 0),
    galleryImages.filter((_, i) => i % 3 === 1),
    galleryImages.filter((_, i) => i % 3 === 2),
  ]

  return (
    <section id="gallery" className="bg-ivory py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        {/* Header — asymmetric */}
        <div className="grid lg:grid-cols-12 mb-16 gap-6">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="section-label mb-6 block">Visual Journal</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-editorial font-light text-espresso leading-[1.08]"
                style={{ fontSize: 'clamp(2.6rem, 5vw, 4.4rem)' }}
              >
                Life at Trix
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <Reveal delay={0.2}>
              <p className="font-body text-espresso/50 font-light text-[1rem] leading-relaxed">
                Quiet mornings, golden afternoons, unhurried evenings — every moment captured as it was meant to be.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Masonry — desktop 3 col */}
        <div className="hidden lg:grid grid-cols-3 gap-3">
          {cols.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-3">
              {col.map((img, i) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.08 + i * 0.1, duration: 0.7 }}
                  onClick={() => setActive(img.id)}
                  className="img-zoom relative overflow-hidden group cursor-pointer"
                  style={{ height: heights[img.aspect] }}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/25 transition-all duration-500 flex items-end p-5">
                    <span className="font-body text-xs tracking-[0.15em] uppercase text-ivory opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                      {img.alt}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile 2-col */}
        <div className="lg:hidden grid grid-cols-2 gap-2">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              onClick={() => setActive(img.id)}
              className="img-zoom relative overflow-hidden aspect-square"
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && activeImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 bg-charcoal/96 flex items-center justify-center p-6"
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 border border-ivory/20 flex items-center justify-center text-ivory hover:border-ivory/60 transition-colors"
              onClick={() => setActive(null)}
            >
              <X size={16} />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              src={activeImg.src}
              alt={activeImg.alt}
              onClick={e => e.stopPropagation()}
              className="max-w-full max-h-[88vh] object-contain"
            />
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 font-body text-xs tracking-[0.2em] uppercase text-ivory/40">
              {activeImg.alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
