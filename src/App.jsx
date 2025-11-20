import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
import { Facebook, Twitter, Linkedin, Mail, Phone } from 'lucide-react'

function App() {
  const year = new Date().getFullYear()
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B]">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Testimonials />
        <About />
        <Contact />

        <footer className="relative mt-20 border-t border-[#2563EB]/10 bg-white/70 backdrop-blur">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#2563EB]/10 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] text-white font-bold flex items-center justify-center">A</div>
                  <div className="font-semibold">AgentFlow AI</div>
                </div>
                <p className="mt-3 text-sm text-[#1E293B]/70">AI Calling & Automation Agency</p>
                <div className="mt-4 flex items-center gap-3 text-[#1E293B]/70 text-sm">
                  <Mail size={16} className="text-[#2563EB]" /> hello@agentflow.ai
                </div>
                <div className="mt-2 flex items-center gap-3 text-[#1E293B]/70 text-sm">
                  <Phone size={16} className="text-[#2563EB]" /> (+1) 888-555-0199
                </div>
              </div>

              <div>
                <div className="font-semibold mb-3">Quick Links</div>
                <ul className="space-y-2 text-sm text-[#1E293B]/70">
                  <li><a href="#home" className="hover:text-[#2563EB]">Home</a></li>
                  <li><a href="#services" className="hover:text-[#2563EB]">Services</a></li>
                  <li><a href="#why-us" className="hover:text-[#2563EB]">Why Us</a></li>
                  <li><a href="#testimonials" className="hover:text-[#2563EB]">Testimonials</a></li>
                  <li><a href="#about" className="hover:text-[#2563EB]">About</a></li>
                  <li><a href="#contact" className="hover:text-[#2563EB]">Contact</a></li>
                </ul>
              </div>

              <div>
                <div className="font-semibold mb-3">Trust</div>
                <ul className="space-y-2 text-sm text-[#1E293B]/70">
                  <li>Trusted by 100+ Clients</li>
                  <li>ISO-grade Security</li>
                  <li>Encrypted AI Calling</li>
                  <li>99.2% AI Accuracy</li>
                </ul>
              </div>

              <div>
                <div className="font-semibold mb-3">Follow Us</div>
                <div className="flex items-center gap-3">
                  <a href="#" className="h-10 w-10 rounded-xl border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition"><Facebook size={18} /></a>
                  <a href="#" className="h-10 w-10 rounded-xl border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition"><Twitter size={18} /></a>
                  <a href="#" className="h-10 w-10 rounded-xl border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition"><Linkedin size={18} /></a>
                </div>
              </div>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#1E293B]/60">
              <div>© {year} AgentFlow AI. All rights reserved.</div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 border border-[#2563EB]/20">ISO-grade Security</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 border border-[#2563EB]/20">Encrypted AI Calling</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 border border-[#2563EB]/20">100+ Clients</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
