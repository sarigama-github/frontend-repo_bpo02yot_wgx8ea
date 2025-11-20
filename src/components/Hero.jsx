import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#EAF2FF] via-[#F8FAFC] to-[#F0E8FF]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[900px] w-[900px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.18),_transparent_60%)]" />
      <div className="absolute -bottom-48 -left-24 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,_rgba(124,58,237,0.18),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1E293B]">
              Automate Your Business With AI Calling & Smart Automation
            </motion.h1>
            <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0, delay:0.1}} className="mt-6 text-lg sm:text-xl text-[#1E293B]/70 max-w-2xl">
              Boost customer engagement, reduce costs, and scale your operations with intelligent AI calling agents and automation workflows.
            </motion.p>

            <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0, delay:0.2}} className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-[#2563EB] px-6 py-3 text-white font-semibold shadow-lg shadow-blue-500/20 hover:opacity-90">
                Get Free Consultation
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-xl border border-[#2563EB]/30 bg-white px-6 py-3 text-[#2563EB] font-semibold hover:bg-[#2563EB]/5">
                See Our Work
              </a>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
              {[
                {label:'100+ Businesses Automated'},
                {label:'99.2% AI Call Accuracy'},
                {label:'24/7 AI Calling Support'},
              ].map((b, i) => (
                <div key={i} className="rounded-2xl bg-white/70 backdrop-blur border border-[#2563EB]/10 p-4 text-center">
                  <div className="text-sm font-semibold text-[#1E293B]">{b.label}</div>
                </div>
              ))}
            </div>
          </div>

          <motion.div initial={{opacity:0,scale:0.98}} animate={{opacity:1,scale:1}} transition={{duration:0.6}} className="relative h-[420px] sm:h-[520px] rounded-3xl overflow-hidden border border-white/40 shadow-[0_30px_80px_rgba(37,99,235,0.25)] bg-white/60 backdrop-blur-xl">
            {/* Premium AI illustration (image prompt #1): Futuristic AI assistant with headset, voice waveforms, holographic calling dashboard, automation flow lines */}
            <div aria-label="Premium AI illustration (image prompt #1): Futuristic AI assistant with headset, voice waveforms, holographic calling dashboard, automation flow lines" className="absolute inset-0 pointer-events-none" />
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/20" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
