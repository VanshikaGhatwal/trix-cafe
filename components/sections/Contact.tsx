'use client'
import { Instagram, Facebook, Twitter } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'

export default function Contact() {
  return (
    <section id="contact" className="bg-ivory py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left info */}
          <div className="lg:col-span-4">
            <Reveal>
              <span className="section-label mb-8 block">Find Us</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-editorial font-light text-espresso leading-[1.1] mb-10"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                Come visit Trix in Delhi
              </h2>
            </Reveal>

            <div className="space-y-8">
              <Reveal delay={0.15}>
                <div>
                  <p className="font-body text-[0.625rem] tracking-[0.2em] uppercase text-espresso/35 mb-3">Address</p>
                  <p className="font-body text-espresso/70 font-light leading-relaxed">
                    12 Lodhi Colony Market<br />
                    New Delhi, Delhi 110003<br />
                    India
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div>
                  <p className="font-body text-[0.625rem] tracking-[0.2em] uppercase text-espresso/35 mb-3">Contact</p>
                  <p className="font-body font-light">
                    <a href="tel:+911141234567" className="text-espresso/70 hover:text-espresso transition-colors block">+91 11 4123 4567</a>
                    <a href="mailto:hello@trixcafe.in" className="text-espresso/70 hover:text-espresso transition-colors block mt-1">hello@trixcafe.in</a>
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div>
                  <p className="font-body text-[0.625rem] tracking-[0.2em] uppercase text-espresso/35 mb-3">Hours</p>
                  <div className="space-y-1.5 font-body font-light text-sm">
                    <div className="flex justify-between text-espresso/70">
                      <span>Mon – Fri</span><span>8:00 AM – 10:30 PM</span>
                    </div>
                    <div className="flex justify-between text-espresso/70">
                      <span>Saturday</span><span>9:00 AM – 11:00 PM</span>
                    </div>
                    <div className="flex justify-between text-espresso/70">
                      <span>Sunday</span><span>9:00 AM – 10:00 PM</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div>
                  <p className="font-body text-[0.625rem] tracking-[0.2em] uppercase text-espresso/35 mb-4">Follow</p>
                  <div className="flex gap-4">
                    {[
                      { Icon: Instagram, label: 'Instagram' },
                      { Icon: Facebook, label: 'Facebook' },
                      { Icon: Twitter, label: 'Twitter' },
                    ].map(({ Icon, label }) => (
                      <a
                        key={label}
                        href="#"
                        aria-label={label}
                        className="w-9 h-9 border border-espresso/18 flex items-center justify-center text-espresso/40 hover:border-espresso/50 hover:text-espresso transition-all duration-300"
                      >
                        <Icon size={14} />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right — map */}
          <Reveal delay={0.2} className="lg:col-span-8">
            <div className="overflow-hidden" style={{ height: '480px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6895!2d77.2195!3d28.5878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2c4b9a5b0e5%3A0x1e6d4a6e2e6f1c5!2sLodhi%20Colony%20Market%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(20%) sepia(10%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Trix Café — Lodhi Colony, New Delhi"
              />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
