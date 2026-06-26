import { Droplets, Wind, Home, Zap } from "lucide-react"

const services = [
  {
    icon: <Droplets size={32} />,
    title: "Window Cleaning",
    tagline: "Crystal-clear results, every pane.",
    description:
      "Inside and out — we clean every window until it sparkles. Say goodbye to streaks, smudges, and mystery handprints.",
    image: "/images/windows.png",
    fun: "Your neighbors will think you replaced your windows. You didn't. We just cleaned them.",
  },
  {
    icon: <Wind size={32} />,
    title: "Gutter Cleaning",
    tagline: "Keep the flow going.",
    description:
      "Clogged gutters cause real damage. We clear out leaves, debris, and whatever else ended up in there (it's always interesting).",
    image: "/images/gutters.png",
    fun: "Gutters don't maintain themselves. Weird, right?",
  },
  {
    icon: <Home size={32} />,
    title: "Roof Services",
    tagline: "Protect what covers you.",
    description:
      "We inspect and treat your roof to extend its life and keep your home protected from Oregon's unpredictable weather.",
    image: "/images/roof.png",
    fun: "Out of sight, out of mind — until it leaks. Let us check it first.",
  },
  {
    icon: <Zap size={32} />,
    title: "Pressure Washing",
    tagline: "Power through the grime.",
    description:
      "Driveways, siding, patios, decks — if it's dirty and it's outside, our pressure washer has something to say about it.",
    image: "/images/pressure-wash.png",
    fun: "There's something deeply satisfying about watching years of grime vanish in seconds.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground text-balance mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Services That <span className="text-primary">Shine</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            From ground level to rooftop, we&apos;ve got every inch of your property covered — professionally, efficiently, and with a smile.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors duration-300" />
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-xl p-2 text-white">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-foreground mb-1">{service.title}</h3>
                <p className="text-primary text-sm font-semibold mb-3">{service.tagline}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>
                {/* Fun fact */}
                <div className="bg-secondary rounded-lg px-4 py-3 mt-auto">
                  <p className="text-xs text-muted-foreground italic">&ldquo;{service.fun}&rdquo;</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
