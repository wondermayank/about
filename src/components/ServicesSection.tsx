import React from 'react';
import { FadeIn } from './FadeIn';
import { motion } from 'framer-motion';

const SERVICES_DATA = [
  {
    num: '01',
    name: 'Creative Experiments',
    desc: 'Hand AI with MediaPipe, NeurIQ adaptive IQ test, Velox animation library — weird ideas turned into real builds.',
  },
  {
    num: '02',
    name: 'India & Culture',
    desc: 'Interactive state maps, festivals, cuisine, languages, history, Kayastha & Rajput heritage — a living archive of Bharat.',
  },
  {
    num: '03',
    name: 'Study Tools',
    desc: 'Free CBT mocks, gamified dashboards, notes & flashcards for CUET, SSC, Banking and JEE-NEET. Built for every Indian student.',
  },
  {
    num: '04',
    name: 'Web Apps & Tools',
    desc: 'Movie & anime finder, Paletteify, text-to-PDF, card generator and more — simple tools that just work.',
  },
  {
    num: '05',
    name: 'love to create',
    desc: 'i love to make tool and website for my self and public help',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#F3F8FC] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full text-center relative z-20 border-t border-sky-100/30 -mt-10 sm:-mt-12 md:-mt-14"
    >
      {/* Centered Pulsing Section Divider Boundary Cut Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none select-none">
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-sky-100 flex items-center justify-center shadow-[0_8px_30px_rgba(192,132,252,0.12)] relative overflow-hidden"
        >
          {/* Glowing neon core overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#c084fc]/8 to-transparent" />
          
          {/* Elegant downward chevron path */}
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 text-[#c084fc]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </div>

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Main Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="text-[#0C0C0C] font-black uppercase mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Love
          </h2>
        </FadeIn>

        {/* Vertical Services List */}
        <div className="w-full flex flex-col border-t border-sky-200/50">
          {SERVICES_DATA.map((service, idx) => (
            <FadeIn
              key={service.num}
              delay={idx * 0.1}
              y={30}
              as="div"
              className="group flex items-center gap-6 sm:gap-10 py-8 sm:py-10 md:py-12 border-b border-sky-200/50 w-full text-left cursor-pointer transition-all duration-300 hover:bg-white/60 hover:px-6 rounded-[20px] sm:rounded-[30px]"
            >
              {/* Number Left */}
              <span
                className="font-black text-[#0C0C0C] min-w-[70px] sm:min-w-[120px] md:min-w-[160px] select-none leading-none transition-all duration-300 group-hover:translate-x-3 group-hover:scale-105"
                style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
              >
                {service.num}
              </span>

              {/* Stacked Details Right */}
              <div className="flex flex-col gap-2 sm:gap-3 flex-1 transition-transform duration-300 group-hover:translate-x-1">
                <h3
                  className="font-bold uppercase text-[#0C0C0C] leading-tight transition-colors duration-200 group-hover:text-[#c084fc]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light text-[#0C0C0C] opacity-70 leading-relaxed max-w-2xl transition-opacity duration-300 group-hover:opacity-100"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
