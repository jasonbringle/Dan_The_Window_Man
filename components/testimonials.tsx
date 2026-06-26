import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    location: "Portland, OR",
    rating: 5,
    text: "Dan cleaned all the windows in our house and I honestly could not believe the difference. It looked like we got new windows! He was on time, professional, and the price was super fair.",
  },
  {
    name: "Mark T.",
    location: "Beaverton, OR",
    rating: 5,
    text: "Had Dan pressure wash our driveway and back patio. Years of Oregon grime gone in a couple hours. He's the real deal — comes prepared, does the job right, leaves no mess.",
  },
  {
    name: "Linda R.",
    location: "Hillsboro, OR",
    rating: 5,
    text: "We hired Dan for gutter cleaning on our commercial property. He handled it efficiently, showed us what he found, and gave us straightforward advice. Highly recommend for business owners.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Reviews
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground text-balance" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Don&apos;t Just Take <span className="text-primary">Our Word</span> For It
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote size={32} className="text-primary/20 absolute top-6 right-6" aria-hidden="true" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-sun fill-sun" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm mb-6">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-foreground font-bold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
