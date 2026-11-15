import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { Code, BookOpen, MonitorCheck, Rocket, ExternalLink } from 'lucide-react';

const TIMELINE_DATA = [
  {
    year: '2018',
    title: 'First Code & Creative Spark',
    subtitle: 'The Genesis',
    desc: 'Began building interactive web experiments, mini-utilities, and exploratory HTML/CSS/JS components with a commitment to open access and clean design.',
    icon: Code,
    color: '#818cf8',
    link: null,
  },
  {
    year: '2020',
    title: 'Launching ThunderStudy',
    subtitle: 'Free Education for Bharat',
    desc: 'Founded thunderstudy.indevs.in as an open repository providing organized study notes, structured revision decks, and educational tools for Indian students preparing for CUET and board exams.',
    icon: BookOpen,
    color: '#38bdf8',
    link: 'https://thunderstudy.indevs.in',
  },
  {
    year: '2022',
    title: 'ThunderTest CBT Simulator',
    subtitle: 'Exam Day Replica Engine',
    desc: 'Engineered thundertest.indevs.in — a high-fidelity Computer Based Test engine precisely mirroring the National Testing Agency (NTA) candidate interface with real-time timers and scoreboards.',
    icon: MonitorCheck,
    color: '#c084fc',
    link: 'https://thundertest.indevs.in',
  },
  {
    year: 'Present',
    title: '100+ Creative Builds & Cloudflare Ecosystem',
    subtitle: 'Scaling Open Innovation',
    desc: 'Unified projects across custom domains on Cloudflare, expanding Paletteify, 3D Periodic Table, anime search tools, and interactive WebGL experiences on project.wondermayank.in.',
    icon: Rocket,
    color: '#ec4899',
    link: 'https://project.wondermayank.in',
  },
];

export const TimelineSection: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* Centered Pulsing Section Divider Boundary Cut Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none select-none">
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ repeat: Infinity, duration: 3.6, ease: 'easeInOut' }}
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </motion.div>
      </div>

      <section
        id="timeline"
        className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full relative z-20 border-t border-slate-100/60 overflow-hidden"
      >
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          {/* Section Heading */}
          <FadeIn delay={0.1} y={30} className="text-center mb-16 sm:mb-20">
            <span className="text-[#c084fc] font-bold text-xs uppercase tracking-widest block mb-2">
              The Journey &amp; Milestones
            </span>
            <h2
              className="text-[#0C0C0C] font-black uppercase tracking-tight leading-none text-center"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
            >
              Milestones
            </h2>
          </FadeIn>

          {/* Timeline Vertical Track */}
          <div className="w-full relative">
            {/* Center Line for Desktop, Left for Mobile */}
            <div className="absolute top-0 bottom-0 left-6 sm:left-1/2 w-0.5 bg-gradient-to-b from-[#c084fc]/40 via-sky-200 to-purple-200 -translate-x-1/2" />

            <div className="flex flex-col gap-12 sm:gap-16 w-full">
              {TIMELINE_DATA.map((milestone, idx) => {
                const Icon = milestone.icon;
                const isEven = idx % 2 === 0;

                return (
                  <FadeIn
                    key={milestone.year}
                    delay={0.15 + idx * 0.1}
                    y={30}
                    className="relative w-full flex items-center"
                  >
                    <div
                      className={`w-full flex flex-col sm:flex-row items-start sm:items-center ${
                        isEven ? 'sm:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Content Card (Half width on desktop) */}
                      <div className="w-full sm:w-[calc(50%-40px)] pl-14 sm:pl-0">
                        <motion.div
                          whileHover={{ y: -4 }}
                          className={`bg-[#F3F8FC] border border-sky-100 rounded-[28px] p-6 sm:p-8 hover:shadow-[0_12px_32px_rgba(192,132,252,0.12)] hover:border-[#c084fc]/40 transition-all duration-300 relative group overflow-hidden ${
                            isEven ? 'sm:text-left' : 'sm:text-left'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3 mb-2">
                            <span
                              className="text-sm font-black uppercase px-3 py-1 rounded-full text-white"
                              style={{ backgroundColor: milestone.color }}
                            >
                              {milestone.year}
                            </span>
                            <span className="text-xs text-[#0C0C0C]/50 uppercase tracking-widest font-semibold">
                              {milestone.subtitle}
                            </span>
                          </div>

                          <h3 className="text-xl sm:text-2xl font-bold uppercase text-[#0C0C0C] mb-2 tracking-tight group-hover:text-[#c084fc] transition-colors duration-200">
                            {milestone.title}
                          </h3>

                          <p className="text-sm text-[#0C0C0C]/65 font-light leading-relaxed mb-4">
                            {milestone.desc}
                          </p>

                          {milestone.link && (
                            <a
                              href={milestone.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0C0C0C] hover:text-[#c084fc] transition-colors duration-200"
                            >
                              <span>Explore Platform</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </motion.div>
                      </div>

                      {/* Center Node / Circle on the timeline track */}
                      <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-purple-100 flex items-center justify-center shadow-md z-10 group">
                        <Icon className="w-4 h-4" style={{ color: milestone.color }} />
                      </div>

                      {/* Empty spacer for opposite column */}
                      <div className="hidden sm:block sm:w-[calc(50%-40px)]" />
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
