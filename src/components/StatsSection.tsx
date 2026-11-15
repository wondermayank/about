import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { SparklesCore } from './ui/sparkles';
import { Layers, HeartHandshake, Cpu, Calendar } from 'lucide-react';

const STATS_DATA = [
  {
    value: '100+',
    label: 'Public Web Tools & Builds',
    desc: 'Interactive experiments, tools & web apps',
    icon: Layers,
    color: '#c084fc',
    bgGradient: 'from-purple-500/10 to-transparent',
  },
  {
    value: '100%',
    label: 'Free & Open Education',
    desc: 'Zero paywalls, built for every Indian student',
    icon: HeartHandshake,
    color: '#38bdf8',
    bgGradient: 'from-sky-500/10 to-transparent',
  },
  {
    value: 'NTA Replica',
    label: 'CBT Engine Architecture',
    desc: 'High-fidelity exam simulator for CUET, JEE, NEET',
    icon: Cpu,
    color: '#a855f7',
    bgGradient: 'from-purple-600/10 to-transparent',
  },
  {
    value: '2018 – Present',
    label: 'Active Development',
    desc: 'Continuous creation, coding & public shipping',
    icon: Calendar,
    color: '#818cf8',
    bgGradient: 'from-indigo-500/10 to-transparent',
  },
];

export const StatsSection: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* Centered Pulsing Section Divider Boundary Cut Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none select-none">
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FAF8FF] border-2 border-purple-100 flex items-center justify-center shadow-[0_8px_30px_rgba(192,132,252,0.12)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#c084fc]/10 to-transparent" />
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 text-[#c084fc]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        </motion.div>
      </div>

      <section
        id="stats"
        className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 pb-16 sm:pt-24 sm:pb-20 w-full relative z-20 border-t border-slate-100/60 overflow-hidden"
      >
        {/* Subtle Background Particles */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30">
          <SparklesCore
            id="tsparticlesstats"
            background="transparent"
            minSize={0.4}
            maxSize={1.0}
            particleDensity={40}
            className="w-full h-full"
            particleColor="#c084fc"
            speed={0.3}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <FadeIn delay={0.1} y={30} className="text-center mb-12 sm:mb-16">
            <span className="text-[#c084fc] font-bold text-xs uppercase tracking-widest block mb-2">
              Impact &amp; Engineering Footprint
            </span>
            <h2 className="text-[#0C0C0C] font-black uppercase text-2xl sm:text-4xl md:text-5xl tracking-tight">
              Building Open Solutions That Matter
            </h2>
          </FadeIn>

          {/* 4 Stats Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS_DATA.map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeIn
                  key={idx}
                  delay={0.15 + idx * 0.1}
                  y={30}
                  className="h-full"
                >
                  <motion.div
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                    className="flex flex-col justify-between h-full bg-[#F3F8FC] border border-sky-100 rounded-[28px] p-6 sm:p-7 relative overflow-hidden transition-all duration-300 hover:shadow-[0_12px_32px_rgba(192,132,252,0.12)] hover:border-[#c084fc]/40 group"
                  >
                    {/* Glowing hover background */}
                    <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${item.bgGradient} blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none`} />

                    <div>
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6" style={{ color: item.color }} />
                      </div>

                      {/* Value */}
                      <h3
                        className="text-3xl sm:text-4xl font-black text-[#0C0C0C] tracking-tight leading-none mb-2"
                        style={{ fontFamily: 'Kanit, sans-serif' }}
                      >
                        {item.value}
                      </h3>

                      {/* Label */}
                      <p className="text-sm sm:text-base font-bold text-[#0C0C0C]/85 mb-2 leading-snug">
                        {item.label}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#0C0C0C]/60 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Bottom active accent line */}
                    <div
                      className="w-10 h-1 rounded-full mt-6 transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
