import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { Sparkles, Cloud, GraduationCap, CheckCircle2 } from 'lucide-react';

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  badgeColor: string;
  skills: { name: string; tag: string; desc: string }[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend & 3D Web',
    subtitle: 'Immersive, responsive & hardware-accelerated user experiences',
    icon: Sparkles,
    badgeColor: '#c084fc',
    skills: [
      { name: 'React', tag: 'Core Library', desc: 'Component architecture, custom hooks, and concurrent UI' },
      { name: 'TypeScript', tag: 'Language', desc: 'Strict type safety, enterprise-grade scalability' },
      { name: 'Three.js', tag: '3D Graphics', desc: 'WebGL 3D scene graphs, lighting, shaders & camera control' },
      { name: 'WebGL', tag: 'Rendering', desc: 'Hardware-accelerated graphics pipelines & shaders' },
      { name: 'Tailwind CSS', tag: 'Styling', desc: 'Modern utility-first responsive styling systems' },
      { name: 'Framer Motion', tag: 'Motion', desc: 'Fluid spring physics, layout animations & gestures' },
    ],
  },
  {
    title: 'Backend & Cloud Infrastructure',
    subtitle: 'Edge hosting, ultra-fast routing, microservices & scripting',
    icon: Cloud,
    badgeColor: '#38bdf8',
    skills: [
      { name: 'Cloudflare Pages & Workers', tag: 'Edge Compute', desc: 'Zero-latency global CDN, serverless workers & edge caching' },
      { name: 'Node.js', tag: 'Runtime', desc: 'Tooling scripts, build pipelines, package automation' },
      { name: 'Python', tag: 'Automation', desc: 'Data parsing, scrapers, dataset builders & scripting' },
      { name: 'Git & GitHub Actions', tag: 'DevOps / CI/CD', desc: 'Version control, automated build & deployment workflows' },
    ],
  },
  {
    title: 'EdTech & Exam Simulation',
    subtitle: 'NTA-compliant candidate interfaces and instant grading architecture',
    icon: GraduationCap,
    badgeColor: '#a855f7',
    skills: [
      { name: 'CBT Simulators', tag: 'Exam Engine', desc: 'Pixel-accurate replica of the official NTA candidate test interface' },
      { name: 'High-Precision Timers', tag: 'Performance', desc: 'Drift-free countdown timers, auto-submission & section locks' },
      { name: 'Scorecard Analytics', tag: 'Analytics', desc: 'Accuracy percentiles, subject-wise breakdown & negative mark calculations' },
    ],
  },
];

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative w-full">
      {/* Centered Pulsing Section Divider Boundary Cut Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none select-none">
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
        </motion.div>
      </div>

      <section
        id="skills"
        className="bg-[#FAF5FF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full relative z-20 border-t border-purple-100/60 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Section Heading */}
          <FadeIn delay={0.1} y={30} className="text-center mb-12 sm:mb-16">
            <span className="text-[#c084fc] font-bold text-xs uppercase tracking-widest block mb-2">
              Capabilities &amp; Stack
            </span>
            <h2
              className="text-[#0C0C0C] font-black uppercase tracking-tight leading-none text-center"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
            >
              Tech Stack
            </h2>
          </FadeIn>

          {/* Interactive Category Selector Tabs */}
          <FadeIn delay={0.2} y={20} className="w-full max-w-2xl mb-12">
            <div className="flex flex-wrap sm:flex-nowrap justify-center gap-3 bg-white p-2 rounded-full border border-purple-100 shadow-sm">
              {SKILL_CATEGORIES.map((cat, idx) => {
                const Icon = cat.icon;
                const isActive = activeTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer select-none ${
                      isActive
                        ? 'bg-[#0C0C0C] text-white shadow-md'
                        : 'text-[#0C0C0C]/60 hover:text-[#0C0C0C] hover:bg-slate-50'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#c084fc]' : 'text-slate-400'}`} />
                    <span>{cat.title.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </FadeIn>

          {/* Active Category Skills Grid */}
          <div className="w-full">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {SKILL_CATEGORIES[activeTab].skills.map((skill, sIdx) => (
                <motion.div
                  key={sIdx}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white border border-slate-100 rounded-[28px] p-6 shadow-sm hover:shadow-[0_12px_30px_rgba(192,132,252,0.12)] hover:border-[#c084fc]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FAF5FF] border border-purple-100 text-[#c084fc] uppercase tracking-wider">
                        {skill.tag}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 opacity-80" />
                    </div>
                    <h3 className="text-xl font-bold uppercase text-[#0C0C0C] mb-2 tracking-tight group-hover:text-[#c084fc] transition-colors duration-200">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-[#0C0C0C]/65 font-light leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
