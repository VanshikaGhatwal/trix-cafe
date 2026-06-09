import Cursor from '@/components/ui/Cursor'
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Marquee from '@/components/Marquee'
import Intro from '@/components/sections/Intro'
import MenuSection from '@/components/sections/MenuSection'
import Gallery from '@/components/sections/Gallery'
import Testimonials from '@/components/sections/Testimonials'
import Experience from '@/components/sections/Experience'
import Reserve from '@/components/sections/Reserve'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Intro />
        <MenuSection />
        <Gallery />
        <Testimonials />
        <Experience />
        <Reserve />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
