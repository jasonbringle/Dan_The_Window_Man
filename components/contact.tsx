"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground text-balance mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Let&apos;s Make Something <span className="text-primary">Shine</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Ready for a quote? Got a question? Just want to say hi? Dan&apos;s a real person — reach out and he&apos;ll get back to you fast.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Info</h3>
              <div className="space-y-5">
                <a
                  href="tel:9713380002"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Phone</p>
                    <p className="text-foreground font-bold">971-338-0002</p>
                  </div>
                </a>

                <a
                  href="mailto:DanJonesEnterprises@Yahoo.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Email</p>
                    <p className="text-foreground font-bold text-sm">DanJonesEnterprises@Yahoo.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Area</p>
                    <p className="text-foreground font-bold">Oregon</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fun badge */}
            <div className="bg-navy rounded-2xl p-6 text-white">
              <p className="text-sun font-black text-3xl mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>FREE</p>
              <p className="text-white font-bold text-lg mb-2">Quote Every Time</p>
              <p className="text-white/60 text-sm leading-relaxed">
                No pressure (unless it&apos;s the kind we use on your driveway). Get a free, honest estimate with zero obligation.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-card border border-border rounded-2xl p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-2xl font-black text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Message Sent!
                </h3>
                <p className="text-muted-foreground max-w-sm">
                  Thanks for reaching out! Dan will be in touch shortly. In the meantime, feel free to call at{" "}
                  <a href="tel:9713380002" className="text-primary font-bold">971-338-0002</a>.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => { setSubmitted(false); setForm({ name:"",phone:"",email:"",service:"",message:"" }) }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-foreground mb-2">Request a Free Quote</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">Full Name</label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone Number</label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="(503) 555-0100"
                      value={form.phone}
                      onChange={handleChange}
                      type="tel"
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address</label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    required
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="service" className="text-sm font-semibold text-foreground">Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a service...</option>
                    <option value="windows">Window Cleaning</option>
                    <option value="gutters">Gutter Cleaning</option>
                    <option value="roof">Roof Services</option>
                    <option value="pressure">Pressure Washing</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-semibold text-foreground">Tell Us More</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Describe your project, property size, or any special requirements..."
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-base rounded-xl flex items-center gap-2"
                >
                  <Send size={18} />
                  Send My Quote Request
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We respond within 24 hours — usually much faster.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
