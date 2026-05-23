import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* Centered Pulsing Section Divider Boundary Cut Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none select-none">
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ repeat: Infinity, duration: 3.4, ease: "easeInOut" }}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FAF8FF] border-2 border-purple-100 flex items-center justify-center shadow-[0_8px_30px_rgba(192,132,252,0.12)] relative overflow-hidden"
        >
          {/* Glowing neon core overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#c084fc]/10 to-transparent" />
          
          {/* User profile silhouette SVG inside */}
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 text-[#c084fc]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </motion.div>
      </div>

      <section
        id="about"
        className="relative min-h-screen w-full bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 flex flex-col justify-center items-center text-center overflow-hidden z-20 border-t border-slate-100/60"
      >
        {/* Decorative 3D corner images absolutely positioned */}
        {/* Top-Left: Moon icon */}
        <FadeIn
          delay={0.1}
          duration={0.9}
          x={-80}
          y={0}
          className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] z-10 pointer-events-none select-none"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2620/2620348.png"
            alt="3D Moon Icon"
            className="w-full h-auto object-contain"
            draggable="false"
          />
        </FadeIn>

        {/* Bottom-Left: 3D Object */}
        <FadeIn
          delay={0.25}
          duration={0.9}
          x={-80}
          y={0}
          className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] z-10 pointer-events-none select-none"
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Object"
            className="w-full h-auto object-contain"
            draggable="false"
          />
        </FadeIn>

        {/* Top-Right: Lego icon */}
        <FadeIn
          delay={0.15}
          duration={0.9}
          x={80}
          y={0}
          className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] z-10 pointer-events-none select-none"
        >
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/060/675/826/small/serene-artistic-atom-nucleus-and-electron-cloud-transparent-element-authentic-png.png"
            alt="3D Lego Icon"
            className="w-full h-auto object-contain"
            draggable="false"
          />
        </FadeIn>

        {/* Bottom-Right: 3D Group */}
        <FadeIn
          delay={0.3}
          duration={0.9}
          x={80}
          y={0}
          className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] z-10 pointer-events-none select-none"
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Group"
            className="w-full h-auto object-contain"
            draggable="false"
          />
        </FadeIn>

        {/* About Main Layout Container */}
        <div className="flex flex-col items-center justify-center z-20 w-full max-w-4xl px-4">
          {/* Heading */}
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              About me
            </h2>
          </FadeIn>

          {/* Scroll-animated Paragraph Description */}
          <div className="mt-10 sm:mt-14 md:mt-16 max-w-[560px]">
            <AnimatedText
              text="Passionate about design, development, and user experience, I create websites and platforms that combine creativity with functionality. From education platforms to modern web experiences, I love turning ideas into reality."
              className="text-[#0C0C0C] font-medium text-center leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' } as any}
            />
          </div>

          {/* Contact CTA pill */}
          <div className="mt-16 sm:mt-20 md:mt-24">
            <FadeIn delay={0.4} y={20}>
              <ContactButton
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};
