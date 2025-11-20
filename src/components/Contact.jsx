import React from 'react'
import { CalendarDays, Mail, Phone } from 'lucide-react'

export default function Contact(){
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-white to-[#F8FAFC]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_400px_at_10%_10%,rgba(37,99,235,0.06),transparent),radial-gradient(500px_300px_at_90%_30%,rgba(124,58,237,0.06),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B]">Let’s Automate Your Business</h2>
          <p className="mt-3 text-[#1E293B]/70 max-w-2xl mx-auto">Tell us about your goals—we respond within 24 hours.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-8">
          <form className="lg:col-span-2 rounded-3xl bg-white p-6 border border-[#2563EB]/20 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-[#1E293B]">Name</label>
                <input required className="mt-2 w-full rounded-xl border border-[#2563EB]/30 px-4 py-3 outline-none focus:ring-2 focus:ring-[#2563EB]" placeholder="Your full name" />
              </div>
              <div>
                <label className="text-sm font-medium text-[#1E293B]">Email</label>
                <input required type="email" className="mt-2 w-full rounded-xl border border-[#2563EB]/30 px-4 py-3 outline-none focus:ring-2 focus:ring-[#2563EB]" placeholder="you@company.com" />
              </div>
              <div>
                <label className="text-sm font-medium text-[#1E293B]">Phone</label>
                <input className="mt-2 w-full rounded-xl border border-[#2563EB]/30 px-4 py-3 outline-none focus:ring-2 focus:ring-[#2563EB]" placeholder="(+1) 555-123-4567" />
              </div>
              <div>
                <label className="text-sm font-medium text-[#1E293B]">Business Type</label>
                <input className="mt-2 w-full rounded-xl border border-[#2563EB]/30 px-4 py-3 outline-none focus:ring-2 focus:ring-[#2563EB]" placeholder="e.g., Real Estate, Clinic, Hotel" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-[#1E293B]">Message</label>
                <textarea rows="5" className="mt-2 w-full rounded-xl border border-[#2563EB]/30 px-4 py-3 outline-none focus:ring-2 focus:ring-[#2563EB]" placeholder="Tell us about your goals and current workflows"></textarea>
              </div>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-[#2563EB] px-6 py-3 text-white font-semibold shadow hover:opacity-90">Book Free Consultation</button>
              <a href="#" className="inline-flex items-center justify-center rounded-xl border border-[#2563EB]/30 bg-white px-6 py-3 text-[#2563EB] font-semibold">Schedule a Call</a>
            </div>
          </form>

          <div className="rounded-3xl bg-white p-6 border border-[#2563EB]/20 shadow-sm h-max">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#F8FAFC]">
              <Phone className="text-[#2563EB]" size={20} />
              <div>
                <div className="text-sm text-[#1E293B]/70">Phone</div>
                <div className="font-semibold text-[#1E293B]">(+1) 888-555-0199</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#F8FAFC] mt-3">
              <Mail className="text-[#2563EB]" size={20} />
              <div>
                <div className="text-sm text-[#1E293B]/70">Email</div>
                <div className="font-semibold text-[#1E293B]">hello@agentflow.ai</div>
              </div>
            </div>
            <a href="#" className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-4 py-3 text-white font-semibold">
              <CalendarDays size={18} /> Schedule a Call
            </a>
            <div className="mt-4 text-xs text-[#1E293B]/60">Secure form • Encrypted • We respond within 24 hours</div>
          </div>
        </div>
      </div>

      <a href="#contact" className="fixed bottom-4 left-1/2 -translate-x-1/2 sm:hidden inline-flex items-center justify-center rounded-full bg-[#2563EB] px-6 py-3 text-white font-semibold shadow-lg">
        Automate My Business
      </a>
    </section>
  )
}
