import React from 'react'

export default function WhyUs(){
  const items = [
    '24/7 Customer Engagement',
    'Reduce Support Cost by Up To 70%',
    'Increase Sales Conversions',
    'Scalable AI Solutions for Every Industry',
  ]

  return (
    <section id="why-us" className="relative py-20 bg-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_400px_at_15%_10%,rgba(37,99,235,0.06),transparent),radial-gradient(500px_300px_at_85%_20%,rgba(124,58,237,0.06),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B]">Why Businesses Choose Us</h2>
            <p className="mt-4 text-[#1E293B]/70 max-w-xl">We build AI systems that deliver measurable, scalable results.</p>

            <div className="mt-8 grid gap-3">
              {items.map((t, i) => (
                <div key={i} className="flex items-center gap-3 rounded-2xl border border-[#2563EB]/20 p-4 bg-[#F8FAFC]">
                  <div className="h-8 w-8 rounded-xl bg-[#2563EB] text-white flex items-center justify-center font-bold">{i+1}</div>
                  <div className="font-semibold text-[#1E293B]">{t}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              <div className="rounded-2xl bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10 p-6 border border-[#2563EB]/20">
                <div className="text-3xl font-extrabold text-[#1E293B]">99.2%</div>
                <div className="text-xs text-[#1E293B]/70">AI Accuracy</div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10 p-6 border border-[#2563EB]/20">
                <div className="text-3xl font-extrabold text-[#1E293B]">100+</div>
                <div className="text-xs text-[#1E293B]/70">Clients Automated</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[#2563EB]/20 bg-white p-6">
            <h3 className="font-semibold text-[#1E293B] mb-3">AI vs Manual Workflow</h3>
            {/* Premium visual (image prompt #5) */}
            <div aria-label="Premium visual (image prompt #5): AI vs Manual Workflow" className="mb-4 h-40 rounded-2xl bg-gradient-to-br from-[#2563EB]/15 to-[#7C3AED]/15 border border-[#2563EB]/20" />
            <div className="grid grid-cols-2 text-sm">
              <div className="space-y-2">
                <div className="font-semibold text-[#1E293B]">AI</div>
                <div className="h-2 rounded-full bg-[#E5E7EB]">
                  <div className="h-2 rounded-full bg-[#2563EB] w-[95%]"></div>
                </div>
                <div className="h-2 rounded-full bg-[#E5E7EB]">
                  <div className="h-2 rounded-full bg-[#2563EB] w-[90%]"></div>
                </div>
                <div className="h-2 rounded-full bg-[#E5E7EB]">
                  <div className="h-2 rounded-full bg-[#2563EB] w-[85%]"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-[#1E293B]">Manual</div>
                <div className="h-2 rounded-full bg-[#E5E7EB]">
                  <div className="h-2 rounded-full bg-[#93C5FD] w-[60%]"></div>
                </div>
                <div className="h-2 rounded-full bg-[#E5E7EB]">
                  <div className="h-2 rounded-full bg-[#93C5FD] w-[55%]"></div>
                </div>
                <div className="h-2 rounded-full bg-[#E5E7EB]">
                  <div className="h-2 rounded-full bg-[#93C5FD] w-[50%]"></div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-xs text-[#1E293B]/60">Comparison: speed, accuracy, and scale.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
