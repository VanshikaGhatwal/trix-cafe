'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const col1 = ['Menu', 'Gallery', 'Experience', 'Reservations']
const col2 = ['About Trix', 'Contact Us', 'Private Dining', 'Press']

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subbed, setSubbed] = useState(false)

  return (
    <footer className="bg-charcoal text-ivory">

      {/* Main */}
      <div className="max-w-7xl mx-auto px-8 lg:px-12 pt-20 pb-14">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-ivory/8">

          {/* Brand */}
          <div className="lg:col-span-4">
            <p className="font-editorial text-[3.5rem] font-light tracking-[0.15em] uppercase text-ivory leading-none mb-5">
              Trix
            </p>
            <p className="font-body font-light text-ivory/40 text-sm leading-relaxed max-w-xs mb-8">
              A contemporary café and dining space in the heart of New Delhi — where coffee, food, and human connection come together beautifully.
            </p>
            <p className="font-body text-[0.625rem] tracking-[0.2em] uppercase text-ivory/25">
              12 Lodhi Colony Market · New Delhi
            </p>
          </div>

          {/* Nav links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <p className="font-body text-[0.625rem] tracking-[0.2em] uppercase text-ivory/30 mb-6">Explore</p>
            <ul className="space-y-3">
              {col1.map(l => (
                <li key={l}>
                  <a href="#" className="font-body text-sm text-ivory/55 hover:text-ivory transition-colors duration-300 font-light">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="font-body text-[0.625rem] tracking-[0.2em] uppercase text-ivory/30 mb-6">Company</p>
            <ul className="space-y-3">
              {col2.map(l => (
                <li key={l}>
                  <a href="#" className="font-body text-sm text-ivory/55 hover:text-ivory transition-colors duration-300 font-light">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 lg:col-start-10">
            <p className="font-body text-[0.625rem] tracking-[0.2em] uppercase text-ivory/30 mb-6">Stay with us</p>
            <p className="font-body text-sm text-ivory/45 font-light mb-5 leading-relaxed">
              Seasonal menus, events and quiet notes from the kitchen.
            </p>
            {!subbed ? (
              <form
                onSubmit={e => { e.preventDefault(); if (email) setSubbed(true) }}
                className="flex flex-col gap-3"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="font-body text-sm bg-transparent border-b border-ivory/20 pb-2.5 text-ivory placeholder-ivory/25 outline-none focus:border-ivory/50 transition-colors"
                />
                <motion.button
                  type="submit"
                  whileHover={{ gap: '0.75rem' }}
                  className="font-body text-xs tracking-[0.15em] uppercase text-gold flex items-center gap-2 transition-all duration-300 hover:text-ivory"
                >
                  Subscribe <ArrowUpRight size={13} />
                </motion.button>
              </form>
            ) : (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-body text-sm text-gold font-light"
              >
                You're on the list. Welcome.
              </motion.p>
            )}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[0.6875rem] text-ivory/25 font-light">
            © 2024 Trix Café & Dining. All rights reserved.
          </p>
          <p className="font-body text-[0.6875rem] text-ivory/20 font-light">
            Crafted with intention · New Delhi, India
          </p>
        </div>
      </div>
    </footer>
  )
}
