import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import MarqueeBanner from "@/components/marquee-banner"
import Services from "@/components/services"
import WhyUs from "@/components/why-us"
import About from "@/components/about"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <Services />
      <WhyUs />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
