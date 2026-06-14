"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const times = [
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
];

export default function Reserve() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    guests: "2",
    note: "",
  });
  const [done, setDone] = useState(false);

  const set =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const whatsapp = () => {
    const msg = encodeURIComponent(
      `Hello Trix! I'd like to reserve a table.\n\nName: ${form.name}\nDate: ${form.date}\nTime: ${form.time}\nGuests: ${form.guests}${form.note ? `\nNote: ${form.note}` : ""}`,
    );
    window.open(`https://wa.me/919319016625?text=${msg}`, "_blank");
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    const msg = encodeURIComponent(
      `Reservation Request

Name: ${form.name}
Date: ${form.date}
Time: ${form.time}
Guests: ${form.guests}
${form.note ? `Special Request: ${form.note}` : ""}`,
    );

    window.open(`https://wa.me/919319016625?text=${msg}`, "_blank");
  };

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
                style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)" }}
              >
                Reserve your table at Trix
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-body font-light text-espresso/60 text-[1rem] leading-[1.85] mb-10">
                We welcome walk-ins but reservations ensure the best experience.
                Tables are held for 15 minutes past the booking time.
              </p>
            </Reveal>

            {/* Hours card */}
            <Reveal delay={0.3}>
              <div className="border border-espresso/12 p-7 space-y-4">
                <p className="font-body text-[0.625rem] tracking-[0.2em] uppercase text-espresso/40 mb-5">
                  Opening Hours
                </p>
                {[
                  { day: "Mon – Fri", hrs: "8:00 AM – 10:30 PM" },
                  { day: "Saturday", hrs: "9:00 AM – 11:00 PM" },
                  { day: "Sunday", hrs: "9:00 AM – 10:00 PM" },
                ].map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center border-b border-espresso/8 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="font-body text-sm text-espresso/60 font-light">
                      {h.day}
                    </span>
                    <span className="font-body text-sm text-espresso font-medium">
                      {h.hrs}
                    </span>
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
                          onChange={set("name")}
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
                            onChange={set("date")}
                            min={new Date().toISOString().split("T")[0]}
                            required
                            className="trix-input"
                          />
                        </div>
                        <div>
                          <label className="font-body text-[0.625rem] tracking-[0.2em] uppercase text-espresso/45 block mb-2">
                            Time
                          </label>
                          <select
                            value={form.time}
                            onChange={set("time")}
                            required
                            className="trix-input"
                          >
                            <option value="">Select</option>
                            {times.map((t) => (
                              <option key={t}>{t}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Guests */}
                      <div>
                        <label className="font-body text-[0.625rem] tracking-[0.2em] uppercase text-espresso/45 block mb-2">
                          Guests
                        </label>
                        <select
                          value={form.guests}
                          onChange={set("guests")}
                          className="trix-input"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                            <option key={n} value={n}>
                              {n} {n === 1 ? "guest" : "guests"}
                            </option>
                          ))}
                          <option value="9+">9+ guests — group booking</option>
                        </select>
                      </div>

                      {/* Note */}
                      <div>
                        <label className="font-body text-[0.625rem] tracking-[0.2em] uppercase text-espresso/45 block mb-2">
                          Special Request{" "}
                          <span className="text-espresso/25">(optional)</span>
                        </label>
                        <textarea
                          placeholder="Dietary needs, occasion, seating preference…"
                          value={form.note}
                          onChange={set("note")}
                          rows={2}
                          className="trix-input resize-none"
                        />
                      </div>

                      {/* CTAs */}
                      <div className="flex justify-center pt-2  uppercase">
                        <motion.button
                          type="submit"
                          whileHover={{ opacity: 0.88 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-[280px] py-4 bg-espresso text-ivory font-body text-xs tracking-[0.15em] uppercase"
                        >
                          Reservation
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
                        See you soon, {form.name.split(" ")[0]}.
                      </h3>
                      <p className="font-body text-espresso/50 font-light text-sm leading-relaxed">
                        Your table for {form.guests} on {form.date} at{" "}
                        {form.time} is being confirmed. We'll be in touch
                        shortly.
                      </p>
                      <button
                        onClick={() => {
                          setDone(false);
                          setForm({
                            name: "",
                            date: "",
                            time: "",
                            guests: "2",
                            note: "",
                          });
                        }}
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
  );
}
