'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['Menu', 'Gallery', 'Experience', 'Reserve', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'bg-ivory/90 backdrop-blur-lg border-b border-espresso/8' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-8 lg:px-12 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-editorial text-2xl font-light tracking-[0.18em] text-espresso uppercase">
            Trix
          </a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-10">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="nav-link text-espresso/70 hover:text-espresso">
                {l}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#reserve"
            className="hidden lg:inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-body border-b border-gold text-espresso pb-0.5 hover:text-gold transition-colors duration-300"
          >
            Book a Table
          </a>

          {/* Burger */}
          <button onClick={() => setOpen(!open)} className="lg:hidden flex flex-col gap-1.5 p-1" aria-label="Menu">
            <span className={`block w-6 h-px bg-espresso transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-4 h-px bg-espresso transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-espresso transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-ivory flex flex-col items-center justify-center gap-10"
          >
            {links.map((l, i) => (
              <motion.a
                key={l}
                href={`#${l.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setOpen(false)}
                className="font-editorial text-5xl font-light text-espresso tracking-wide"
              >
                {l}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
