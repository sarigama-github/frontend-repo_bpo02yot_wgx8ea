import React from 'react'
import { PhoneCall, Workflow, Bot } from 'lucide-react'

const Visual = ({ label }) => (
  <div className="mt-4 h-28 rounded-2xl bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10 border border-[#2563EB]/20 flex items-center justify-center text-xs text-[#1E293B]/70">
    {label}
  </div>
)

const Card = ({ icon: Icon, title, points, benefit, cta, visualLabel }) => (
  <div className="group rounded-3xl p-6 bg-white/70 backdrop-blur border border-[#2563EB]/10 hover:border-[#2563EB]/30 shadow-sm hover:shadow-xl transition-all">
    <div className="flex items-center gap-3">
      <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] text-white flex items-center justify-center shadow">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold text-[#1E293B]">{title}</h3>
    </div>
    <ul className="mt-4 grid gap-2 text-[#1E293B]/80">
      {points.map((p, i) => (
        <li key={i} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2563EB]"></span>{p}</li>
      ))}
    </ul>
    <div className="mt-4 text-sm text-[#1E293B]/70"><span className="font-semibold">Benefit:</span> {benefit}</div>
    <Visual label={visualLabel} />
    <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#2563EB] px-4 py-2 text-white font-semibold shadow hover:opacity-90">{cta}</a>
  </div>
)

export default function Services(){
  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-white to-[#F8FAFC]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_400px_at_10%_10%,rgba(37,99,235,0.08),transparent),radial-gradient(500px_300px_at_90%_30%,rgba(124,58,237,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B]">Our AI-Powered Services</h2>
          <p className="mt-3 text-[#1E293B]/70 max-w-2xl mx-auto">AI calling agents, automation workflows, and intelligent chatbots designed for performance.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card
            icon={PhoneCall}
            title="AI Calling Agents"
            points={[
              'AI inbound & outbound calling',
              'Lead qualification',
              'Appointment setting',
              'Customer support automation',
            ]}
            benefit="Works 24/7 & reduces support cost by 60%"
            cta="Learn More"
            visualLabel="Mini Hero Image — headset, waveforms (image prompt #2)"
          />
          <Card
            icon={Workflow}
            title="Business Process Automation"
            points={[
              'Automate repetitive tasks',
              'Custom workflow automation',
              'CRM & WhatsApp integration',
            ]}
            benefit="Saves time, reduces human error"
            cta="Explore Automation"
            visualLabel="Automation UI illustration (image prompt #3)"
          />
          <Card
            icon={Bot}
            title="Custom AI Chatbots"
            points={[
              'Website chatbots',
              'WhatsApp & Instagram automation',
              'Voice-enabled bots',
            ]}
            benefit="Instant replies & improved satisfaction"
            cta="See Chatbot Solutions"
            visualLabel="Chatbot UI graphic (image prompt #4)"
          />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs text-[#1E293B]/70">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 border border-[#2563EB]/20">⭐ 4.9/5 average rating</span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 border border-[#2563EB]/20">Trusted by 100+ Clients</span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 border border-[#2563EB]/20">ISO-grade Security</span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 border border-[#2563EB]/20">Encrypted AI Calling</span>
        </div>
      </div>
    </section>
  )
}
