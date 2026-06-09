'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCheck } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'

const times = [
  '8:00 AM','8:30 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM',
  '12:30 PM','1:00 PM','2:00 PM','3:00 PM','7:00 PM','7:30 PM',
  '8:00 PM','8:30 PM','9:00 PM','9:30 PM','10:00 PM',
]

export default function Reserve() {
  const [form, setForm] = useState({ name: '', date: '', time: '', guests: '2', note: '' })
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const whatsapp = () => {
    const msg = encodeURIComponent(
      `Hello Trix! I'd like to reserve a table.\n\nName: ${form.name}\nDate: ${form.date}\nTime: ${form.time}\nGuests: ${form.guests}${form.note ? `\nNote: ${form.note}` : ''}`
    )
    window.open(`https://wa.me/919999999999?text=${msg}`, '_blank')
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setDone(true) }, 1400)
  }

  return (
    <section id="reserve" className="bg-mist py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Left */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="section-label mb-8 block">Reservations</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-editorial font-light text-espresso leading-[1.1] mb-6"
                style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}
              >
                Reserve your table at Trix
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-body font-light text-espresso/60 text-[1rem] leading-[1.85] mb-10">
                We welcome walk-ins but reservations ensure the best experience. Tables are held for 15 minutes past the booking time.
              </p>
            </Reveal>

            {/* Hours card */}
            <Reveal delay={0.3}>
              <div className="border border-espresso/12 p-7 space-y-4">
                <p className="font-body text-[0.625rem] tracking-[0.2em] uppercase text-espresso/40 mb-5">Opening Hours</p>
                {[
                  { day: 'Mon – Fri', hrs: '8:00 AM – 10:30 PM' },
                  { day: 'Saturday', hrs: '9:00 AM – 11:00 PM' },
                  { day: 'Sunday',   hrs: '9:00 AM – 10:00 PM' },
                ].map(h => (
                  <div key={h.day} className="flex justify-between items-center border-b border-espresso/8 pb-4 last:border-0 last:pb-0">
                    <span className="font-body text-sm text-espresso/60 font-light">{h.day}</span>
                    <span className="font-body text-sm text-espresso font-medium">{h.hrs}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.15}>
              <div className="bg-ivory border border-espresso/10 p-8 lg:p-10">
                <AnimatePresence mode="wait">
                  {!done ? (
                    <motion.form
                      key="form"
                      exit={{ opacity: 0, y: -10 }}
                      onSubmit={submit}
                      className="space-y-8"
                    >
                      {/* Name */}
                      <div>
                        <label className="font-body text-[0.625rem] tracking-[0.2em] uppercase text-espresso/45 block mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="Your name"
                          value={form.name}
                          onChange={set('name')}
                          required
                          className="trix-input"
                        />
                      </div>

                      {/* Date + Time */}
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="font-body text-[0.625rem] tracking-[0.2em] uppercase text-espresso/45 block mb-2">
                            Date
                          </label>
                          <input
                            type="date"
                            value={form.date}
                            onChange={set('date')}
                            min={new Date().toISOString().split('T')[0]}
                            required
                            className="trix-input"
                          />
                        </div>
                        <div>
                          <label className="font-body text-[0.625rem] tracking-[0.2em] uppercase text-espresso/45 block mb-2">
                            Time
                          </label>
                          <select value={form.time} onChange={set('time')} required className="trix-input">
                            <option value="">Select</option>
                            {times.map(t => <option key={t}>{t}</option>)}
                          </select>
                        </div>
                      </div>

                      {/* Guests */}
                      <div>
                        <label className="font-body text-[0.625rem] tracking-[0.2em] uppercase text-espresso/45 block mb-2">
                          Guests
                        </label>
                        <select value={form.guests} onChange={set('guests')} className="trix-input">
                          {[1,2,3,4,5,6,7,8].map(n => (
                            <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
                          ))}
                          <option value="9+">9+ guests — group booking</option>
                        </select>
                      </div>

                      {/* Note */}
                      <div>
                        <label className="font-body text-[0.625rem] tracking-[0.2em] uppercase text-espresso/45 block mb-2">
                          Special Request <span className="text-espresso/25">(optional)</span>
                        </label>
                        <textarea
                          placeholder="Dietary needs, occasion, seating preference…"
                          value={form.note}
                          onChange={set('note')}
                          rows={2}
                          className="trix-input resize-none"
                        />
                      </div>

                      {/* CTAs */}
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <motion.button
                          type="submit"
                          disabled={loading}
                          whileHover={{ opacity: 0.88 }}
                          whileTap={{ scale: 0.98 }}
                          className="font-body text-xs tracking-[0.15em] uppercase py-4 bg-espresso text-ivory font-medium transition-all disabled:opacity-60"
                        >
                          {loading ? (
                            <span className="flex items-center justify-center gap-2">
                              <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                                className="block w-3.5 h-3.5 border border-ivory/30 border-t-ivory rounded-full"
                              />
                              Reserving…
                            </span>
                          ) : 'Confirm'}
                        </motion.button>

                        <motion.button
                          type="button"
                          onClick={whatsapp}
                          whileHover={{ opacity: 0.88 }}
                          whileTap={{ scale: 0.98 }}
                          className="font-body text-xs tracking-[0.15em] uppercase py-4 border border-espresso/25 text-espresso hover:border-espresso/60 transition-all flex items-center justify-center gap-2"
                        >
                          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden>
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          WhatsApp
                        </motion.button>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="done"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="py-12 text-center"
                    >
                      <div className="w-14 h-14 border border-espresso/20 flex items-center justify-center mx-auto mb-6">
                        <CheckCheck size={22} className="text-gold" />
                      </div>
                      <h3 className="font-editorial text-3xl font-light text-espresso mb-3">
                        See you soon, {form.name.split(' ')[0]}.
                      </h3>
                      <p className="font-body text-espresso/50 font-light text-sm leading-relaxed">
                        Your table for {form.guests} on {form.date} at {form.time} is being confirmed. We'll be in touch shortly.
                      </p>
                      <button
                        onClick={() => { setDone(false); setForm({ name:'',date:'',time:'',guests:'2',note:'' }) }}
                        className="mt-8 font-body text-xs tracking-[0.15em] uppercase text-espresso/40 hover:text-espresso transition-colors border-b border-transparent hover:border-espresso/30 pb-0.5"
                      >
                        Make another reservation
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}
