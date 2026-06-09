'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot  = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let rx = 0, ry = 0

    const move = (e: MouseEvent) => {
      const x = e.clientX, y = e.clientY
      if (dot.current) {
        dot.current.style.transform = `translate(${x - 4}px,${y - 4}px)`
      }
      if (ring.current) {
        rx += (x - rx - 18) * 0.12
        ry += (y - ry - 18) * 0.12
        ring.current.style.transform = `translate(${rx}px,${ry}px)`
      }
    }

    const raf = () => {
      if (ring.current) {
        const style = getComputedStyle(ring.current)
        const m = new DOMMatrix(style.transform)
        ring.current.style.transform = `translate(${m.m41}px,${m.m42}px)`
      }
      requestAnimationFrame(raf)
    }

    window.addEventListener('mousemove', move)
    const id = requestAnimationFrame(raf)
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(id) }
  }, [])

  return (
    <>
      <div ref={dot} className="fixed top-0 left-0 w-2 h-2 rounded-full bg-espresso z-[9999] pointer-events-none mix-blend-multiply" style={{ willChange: 'transform' }} />
      <div ref={ring} className="fixed top-0 left-0 w-9 h-9 rounded-full border border-espresso/40 z-[9998] pointer-events-none" style={{ willChange: 'transform' }} />
    </>
  )
}
