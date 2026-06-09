"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacit = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[680px] overflow-hidden flex items-end"
    >
      {/* Parallax image */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 scale-105">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=90"
          alt="Trix café interior"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Layered overlays — warm editorial */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/20 to-transparent" />

      {/* Content — bottom-anchored editorial layout */}
      <motion.div
        style={{ y: textY, opacity: opacit }}
        className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-12 pb-16 lg:pb-24"
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="section-label text-ivory/70 mb-8"
            style={
              { "--before-bg": "rgba(247,243,237,0.5)" } as React.CSSProperties
            }
          >
            <span
              style={{
                color: "rgba(247,243,237,0.6)",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "2rem",
                  height: "1px",
                  background: "rgba(247,243,237,0.5)",
                }}
              />
              New Delhi · Est. 2018
            </span>
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-editorial text-ivory font-light leading-[1.08] text-balance mb-8"
            style={{
              fontSize: "clamp(3.2rem, 7.5vw, 6.8rem)",
              letterSpacing: "-0.01em",
            }}
          >
            A cup of
            <br />
            <em className="font-light italic" style={{ color: "#D9CEBC" }}>
              Coffee
            </em>{" "}
            Maybe?
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="font-body text-ivory/60 font-light mb-10 max-w-lg leading-relaxed"
            style={{ fontSize: "1.0625rem" }}
          >
            A curated space for specialty coffee, thoughtfully crafted food, and
            the kind of time that stretches beautifully.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1 }}
            className="flex flex-wrap gap-5"
          >
            <motion.a
              href="#reserve"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="font-body text-xs tracking-[0.18em] uppercase px-8 py-4 bg-ivory text-espresso font-medium transition-all duration-300 hover:bg-cream"
            >
              Reserve a Table
            </motion.a>
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="font-body text-xs tracking-[0.18em] uppercase px-8 py-4 border border-ivory/40 text-ivory hover:border-ivory/80 transition-all duration-300"
            >
              Explore Menu
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 right-10 flex flex-col items-center gap-3"
      >
        <span className="font-body text-[0.6rem] tracking-[0.25em] uppercase text-ivory/40 rotate-90 origin-center translate-x-6">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-transparent to-ivory/50"
        />
      </motion.div>
    </section>
  );
}
