import React from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_10px_30px_rgba(10,26,63,0.15)]">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] shadow-inner shadow-blue-500/30 flex items-center justify-center text-white font-bold">A</div>
              <div className="leading-tight">
                <div className="text-[#0A1A3F] dark:text-white font-semibold text-lg">AgentFlow AI</div>
                <div className="text-xs text-[#2563EB]/80">AI Calling & Automation</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="text-sm font-medium text-[#0A1A3F]/80 dark:text-white/80 hover:text-[#2563EB] transition-colors">
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-[#2563EB] px-4 py-2 text-white font-semibold shadow hover:opacity-90 transition focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB]">
                Get Free Consultation
              </a>
            </nav>

            <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/30 bg-white/30 backdrop-blur text-[#0A1A3F] dark:text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                {NAV_LINKS.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg text-[#0A1A3F]/90 bg-white/50 hover:bg-white/80 transition">
                    {l.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg bg-[#2563EB] text-white text-center font-semibold">
                  Get Free Consultation
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
