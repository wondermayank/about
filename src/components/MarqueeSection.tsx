import React, { useEffect, useRef } from 'react';

const FIRST_ROW_GIFS = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
];

const SECOND_ROW_GIFS = [
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
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
    <section
      ref={sectionRef}
      id="marquee"
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full select-none"
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
  );
};
