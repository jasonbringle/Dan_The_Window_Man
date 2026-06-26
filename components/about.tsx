import { CheckCircle } from "lucide-react"

const highlights = [
  "Over a decade of hands-on experience",
  "Commercial and residential expertise",
  "Oregon licensed and fully insured",
  "Friendly, professional, dependable",
  "Fair pricing with no hidden fees",
  "We treat your property like our own",
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Logo & fun element */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Circular glow */}
            <div className="absolute w-80 h-80 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
            
            <div className="relative z-10 flex flex-col items-center gap-8">
              <img
                src="/images/dan-logo.svg"
                alt="DAN The Window Man Logo"
                className="w-56 h-auto drop-shadow-xl"
              />

              {/* Fun quote card */}
              <div className="bg-white border border-border rounded-2xl shadow-lg p-6 max-w-xs text-center">
                <p className="text-2xl mb-3">🪟</p>
                <p className="text-foreground font-bold text-lg leading-snug mb-2">
                  &ldquo;I see dead bugs... on your windows.&rdquo;
                </p>
                <p className="text-muted-foreground text-sm italic">— Dan, probably</p>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <span className="inline-block bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              About Dan
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground text-balance mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              A Pro You Can <span className="text-primary">Trust.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Dan Jones has been in the home services business for years, building a reputation as the go-to guy for windows, gutters, roofs, and pressure washing across Oregon.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              He shows up on time, does the job right, and leaves your place looking better than it did before. Commercial or residential — if it needs cleaning or servicing, Dan&apos;s on it.
            </p>

            {/* Highlights */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-full transition-colors"
              >
                Work With Dan
              </a>
              <a
                href="tel:9713380002"
                className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-4 rounded-full transition-colors"
              >
                971-338-0002
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
