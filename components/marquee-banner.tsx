export default function MarqueeBanner() {
  const items = [
    "✦ Windows",
    "✦ Gutters",
    "✦ Roofs",
    "✦ Pressure Washing",
    "✦ Licensed & Insured",
    "✦ Commercial & Residential",
    "✦ Free Quotes",
    "✦ Oregon Proud",
  ]

  return (
    <div className="bg-primary text-white overflow-hidden py-3 relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-sm font-bold tracking-wide mx-6 shrink-0">
            {item}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
