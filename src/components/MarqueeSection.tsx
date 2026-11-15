import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FIRST_ROW_GIFS = [
  '/images/marquee-r1-1.webp',
  '/images/marquee-r1-2.webp',
  '/images/marquee-r1-3.webp',
  '/images/marquee-r1-4.webp',
];

const SECOND_ROW_GIFS = [
  '/images/marquee-r2-1.webp',
  '/images/marquee-r2-2.webp',
  '/images/marquee-r2-3.webp',
];
// Triple for seamless endless scroll bounds
const ROW1_TILES = [...FIRST_ROW_GIFS, ...FIRST_ROW_GIFS, ...FIRST_ROW_GIFS];
const ROW2_TILES = [...SECOND_ROW_GIFS, ...SECOND_ROW_GIFS, ...SECOND_ROW_GIFS];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      const section = sectionRef.current;
      const row1 = row1Ref.current;
      const row2 = row2Ref.current;
      if (!section || !row1 || !row2) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;

      // Scroll offset formula: (window.scrollY - sectionTop + window.innerHeight) * 0.3
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      // Apply transform updates directly to the DOM for peak 60fps scrolling performance
      animationFrameId = requestAnimationFrame(() => {
        // Row 1 moves RIGHT
        row1.style.transform = `translate3d(${offset - 200}px, 0px, 0px)`;
        // Row 2 moves LEFT
        row2.style.transform = `translate3d(${-(offset - 200)}px, 0px, 0px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* Centered Pulsing Section Divider Boundary Cut Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none select-none">
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FAF8FF] border-2 border-purple-100 flex items-center justify-center shadow-[0_8px_30px_rgba(192,132,252,0.12)] relative overflow-hidden"
        >
          {/* Glowing neon core overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#c084fc]/10 to-transparent" />
          
          {/* Gallery Play SVG inside */}
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 text-[#c084fc]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        </motion.div>
      </div>

      <section
        ref={sectionRef}
        id="marquee"
        className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full select-none relative z-20 border-t border-slate-100/60"
      >
        <div className="flex flex-col gap-3 w-full">
          {/* Row 1 Container */}
          <div className="overflow-visible w-full flex">
            <div
              ref={row1Ref}
              className="flex gap-3 will-change-transform"
              style={{ transform: 'translate3d(-200px, 0px, 0px)' }}
            >
              {ROW1_TILES.map((src, idx) => (
                <img
                  key={`r1-${idx}`}
                  src={src}
                  alt={`Space Voyage ${idx}`}
                  loading="lazy"
                  className="w-[420px] h-[270px] min-w-[420px] min-h-[270px] rounded-2xl object-cover"
                  draggable="false"
                />
              ))}
            </div>
          </div>

          {/* Row 2 Container */}
          <div className="overflow-visible w-full flex">
            <div
              ref={row2Ref}
              className="flex gap-3 will-change-transform"
              style={{ transform: 'translate3d(200px, 0px, 0px)' }}
            >
              {ROW2_TILES.map((src, idx) => (
                <img
                  key={`r2-${idx}`}
                  src={src}
                  alt={`Codename ${idx}`}
                  loading="lazy"
                  className="w-[420px] h-[270px] min-w-[420px] min-h-[270px] rounded-2xl object-cover"
                  draggable="false"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
