import React from 'react';
import { FadeIn } from './FadeIn';

const SERVICES_DATA = [
  {
    num: '01',
    name: '3D Modeling',
    desc: 'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    num: '02',
    name: 'Rendering',
    desc: 'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    num: '03',
    name: 'Motion Design',
    desc: 'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    num: '04',
    name: 'Branding',
    desc: 'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
  },
  {
    num: '05',
    name: 'Web Design',
    desc: 'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full text-center relative z-20"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Main Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="text-[#0C0C0C] font-black uppercase mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Vertical Services List */}
        <div className="w-full flex flex-col border-t border-[rgba(12,12,12,0.12)]">
          {SERVICES_DATA.map((service, idx) => (
            <FadeIn
              key={service.num}
              delay={idx * 0.1}
              y={30}
              as="div"
              className="group flex items-center gap-6 sm:gap-10 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.12)] w-full text-left cursor-pointer transition-all duration-300 hover:bg-slate-50/80 hover:px-6 rounded-[20px] sm:rounded-[30px]"
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
                  className="font-bold uppercase text-[#0C0C0C] leading-tight transition-colors duration-200 group-hover:text-[#B600A8]"
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
