import React from 'react'

export default function About(){
  const highlights = [
    '5 Years AI Experience',
    '50+ Custom Automation Workflows',
    'Trained AI Specialists',
    'Proven Client Results',
  ]

  return (
    <section id="about" className="relative py-20 bg-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_400px_at_20%_10%,rgba(37,99,235,0.06),transparent),radial-gradient(500px_300px_at_80%_20%,rgba(124,58,237,0.06),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B]">Who We Are</h2>
            <p className="mt-4 text-[#1E293B]/70">AgentFlow AI is an automation agency helping businesses improve operations using AI calling systems, chatbot engineering, and intelligent workflow automation. Our team delivers solutions that are reliable, scalable, and performance-driven.</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div key={i} className="rounded-2xl border border-[#2563EB]/20 p-4 bg-[#F8FAFC] text-[#1E293B] font-medium">{h}</div>
              ))}
            </div>
          </div>

          <div>
            {/* Right visual (image prompt #6) */}
            <div aria-label="AI Automation Ecosystem illustration (image prompt #6)" className="rounded-3xl bg-gradient-to-br from-[#2563EB]/15 to-[#7C3AED]/15 h-72 border border-[#2563EB]/20 shadow" />
          </div>
        </div>
      </div>
    </section>
  )
}
