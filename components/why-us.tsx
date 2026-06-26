import { ShieldCheck, Clock, Award, ThumbsUp, Handshake, MapPin } from "lucide-react"

const reasons = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Licensed & Insured",
    desc: "Fully licensed and insured so you can relax knowing your property is in safe, professional hands.",
  },
  {
    icon: <Award size={28} />,
    title: "Expert Quality",
    desc: "Dan brings years of experience and a sharp eye for detail to every job — no shortcuts, ever.",
  },
  {
    icon: <Clock size={28} />,
    title: "On Time, Every Time",
    desc: "We respect your schedule. When we say we'll be there, we'll be there — tools ready, attitude positive.",
  },
  {
    icon: <Handshake size={28} />,
    title: "Commercial & Residential",
    desc: "Whether it's your home or your building, we bring the same high standards to every project.",
  },
  {
    icon: <ThumbsUp size={28} />,
    title: "Satisfaction Guaranteed",
    desc: "If you're not happy, we'll make it right. Simple as that. Your satisfaction is our bottom line.",
  },
  {
    icon: <MapPin size={28} />,
    title: "Locally Based",
    desc: "We're right here in Oregon — a real local business that cares about its community and neighbors.",
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-navy relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky/10 rounded-full translate-y-1/2 -translate-x-1/2" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-sky/20 text-sky text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Why Dan?
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white text-balance mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            The Window Man <span className="text-sun">Difference</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            We don&apos;t just show up and spray some water around. We take pride in our work and it shows.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group flex gap-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="shrink-0 w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center text-sky group-hover:bg-primary/30 transition-colors">
                {r.icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">{r.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Fun stat bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "500+", label: "Happy Customers" },
            { number: "100%", label: "Licensed & Insured" },
            { number: "4", label: "Services Offered" },
            { number: "5★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-black text-sun mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{stat.number}</div>
              <div className="text-white/60 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
