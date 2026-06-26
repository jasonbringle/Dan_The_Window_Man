import { Phone, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <img
              src="/images/dan-logo.svg"
              alt="DAN The Window Man Logo"
              className="h-20 w-auto mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Professional home &amp; building services — windows, gutters, roofs, and pressure washing. Licensed &amp; insured. Serving Oregon.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sun font-bold uppercase tracking-widest text-xs mb-5">Our Services</h4>
            <ul className="space-y-3">
              {["Window Cleaning", "Gutter Cleaning", "Roof Services", "Pressure Washing"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/60 hover:text-white text-sm transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sun font-bold uppercase tracking-widest text-xs mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:9713380002"
                  className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors"
                >
                  <Phone size={16} className="text-sky shrink-0" />
                  971-338-0002
                </a>
              </li>
              <li>
                <a
                  href="mailto:DanJonesEnterprises@Yahoo.com"
                  className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors break-all"
                >
                  <Mail size={16} className="text-sky shrink-0" />
                  DanJonesEnterprises@Yahoo.com
                </a>
              </li>
            </ul>

            <div className="mt-6 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-xs font-semibold text-white/80">
              ✓ Licensed &amp; Insured
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            &copy; {currentYear} DAN The Window Man — Dan Jones Enterprises. All rights reserved.
          </p>
          <p className="text-white/40 text-xs italic text-center sm:text-right">
            &ldquo;We&apos;ll Make Your Glass Shine&rdquo; ✦
          </p>
        </div>
      </div>
    </footer>
  )
}
