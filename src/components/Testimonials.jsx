import React from 'react'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Hotel Owner',
    text: 'Our booking calls increased by 40% in the first month.',
    rating: 5,
  },
  {
    name: 'David R.',
    role: 'Real Estate Agent',
    text: 'Automated follow-ups helped us recover 30% more leads.',
    rating: 5,
  },
  {
    name: 'Ankit',
    role: 'Clinic Manager',
    text: 'AI agents now handle 90% of patient queries.',
    rating: 5,
  },
]

export default function Testimonials(){
  return (
    <section id="testimonials" className="relative py-20 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B]">What Our Clients Say</h2>
          <p className="mt-3 text-[#1E293B]/70 max-w-2xl mx-auto">Real stories from businesses that scaled faster with automation.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className={`rounded-3xl p-6 border border-[#2563EB]/20 bg-white/80 backdrop-blur shadow-sm ${i%2===0 ? 'md:translate-y-4' : ''}`}>
              <div className="flex items-center gap-1 text-amber-500 text-lg" aria-label="5 stars">{'★★★★★'.slice(0, t.rating)}</div>
              <p className="mt-3 text-[#1E293B]/80">“{t.text}”</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED]"></div>
                <div>
                  <div className="font-semibold text-[#1E293B]">{t.name}</div>
                  <div className="text-xs text-[#1E293B]/70">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs text-[#1E293B]/70">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 border border-[#2563EB]/20">Trusted by 100+ Clients</span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 border border-[#2563EB]/20">Verified Results</span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 border border-[#2563EB]/20">ISO-grade Security</span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 border border-[#2563EB]/20">Encrypted AI Calling</span>
        </div>
      </div>
    </section>
  )
}
