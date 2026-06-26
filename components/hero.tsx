import { Phone, Star, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      {/* Subtle radial glow behind mascot */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 75% 55%, oklch(0.45 0.18 237 / 0.45) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">

          {/* Left — Text content */}
          <div className="flex-1 lg:pr-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <CheckCircle size={16} className="text-sun" />
              <span className="text-white/90 text-sm font-semibold">
                Licensed &amp; Insured &nbsp;•&nbsp; Commercial &amp; Residential
              </span>
            </div>

            {/* Business name */}
            <p className="text-sky text-lg font-bold tracking-widest uppercase mb-2">
              DAN The Window Man
            </p>

            {/* Headline */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight text-balance mb-5"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              We&apos;ll Make Your
              <br />
              <span className="text-sun">Glass Shine.</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/75 leading-relaxed mb-9 max-w-lg">
              Professional windows, gutters, roofs, and pressure washing —
              done right the first time. Dan&apos;s got your back (and your
              windows).
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-xl"
              >
                <a href="#contact">Get a Free Quote</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-foreground font-bold text-lg px-8 py-6 rounded-full backdrop-blur-sm"
              >
                <a href="tel:9713380002" className="flex items-center gap-2">
                  <Phone size={20} />
                  971-338-0002
                </a>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={18} className="text-sun fill-sun" />
                ))}
                <span className="text-white/75 text-sm ml-2">5-Star Service</span>
              </div>
              <div className="h-5 w-px bg-white/30 hidden sm:block" />
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-sky" />
                <span className="text-white/75 text-sm">Oregon Licensed</span>
              </div>
              <div className="h-5 w-px bg-white/30 hidden sm:block" />
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-sky" />
                <span className="text-white/75 text-sm">Fully Insured</span>
              </div>
            </div>
          </div>

          {/* Right — Dan mascot */}
          <div className="flex-shrink-0 flex items-center justify-center lg:w-[480px]">
            <Image
              src="/images/dan-logo.svg"
              alt="Dan the Window Man mascot — friendly serviceman giving a thumbs up"
              width={480}
              height={637}
              priority
              className="w-72 sm:w-96 lg:w-full max-w-md object-contain drop-shadow-2xl"
            />
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L1440 60L1440 20C1200 60 900 0 720 20C540 40 240 0 0 20L0 60Z"
            fill="oklch(0.98 0.005 220)"
          />
        </svg>
      </div>
    </section>
  )
}
