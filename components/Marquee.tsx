'use client'
import { motion } from 'framer-motion'

const items = [
  'Specialty Coffee',
  '·',
  'Seasonal Food',
  '·',
  'Live Culture',
  '·',
  'New Delhi',
  '·',
  'Since 2018',
  '·',
  'Thoughtfully Crafted',
  '·',
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className="bg-espresso py-5 overflow-hidden select-none">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
          className="flex items-center gap-8 pr-8"
        >
          {doubled.map((item, i) => (
            <span
              key={i}
              className="font-body text-[0.625rem] tracking-[0.22em] uppercase text-ivory/50 font-light"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
