import React, { useEffect, useRef } from 'react';

const FIRST_ROW_GIFS = [
  'https://blogger.googleusercontent.com/img/a/AVvXsEjAagXnh42IxR8amuSv11qL2K6JiYeDDolSwIBdy5Va40uCnBYc6IrJuXUKj1vSpYbCEN4nVKtqkCggV5shUnV4iC2wahB0KIUHLKgpJH5Am4uCuMROTEg_BUQmMs31JZAkhmprh26N9fPiCSrbl3hq3Vpc0x_VeORmdKv7Gu16kTH35wi4STP9dyrgsdc_',
  'https://blogger.googleusercontent.com/img/a/AVvXsEh7MZ7Nw43bGqPcDb0w_haxlls4M_RUoajoyQehojv9TF9SfC4dn1O5kCPnIcyvWBvgwvTGotW_BWJX9cG4DEuD3JcY9mbsDPolzQcmE-jHL8zfRyfGY_RUqwwaBXVN_xcY27uUqcp5E5yKR0_ID5WysOC9S-iPv--RVX0S5HMasm4elce9nf9yjQMN2N9A',
  'https://blogger.googleusercontent.com/img/a/AVvXsEjM6XCL2yqs6uRC7lI2HVi76EpB4ftz86j-1z5HtT7pyBc5r7_hCHsGTbiTw8HfpyHeJ-PTvDVW78yjtfJTuFKzj7pw2iTAHDRaZRVUqtpdFYNhk822bTy6j9XtzRTO0CRVLLlWaKDQ8V8AFWrpkmLwq1DIO-tnd7ROylZUf4b6kAjFISpgbJjnRDtF3TGl',
  'https://blogger.googleusercontent.com/img/a/AVvXsEi6FNXBQKSgV_g_uglKjcfqpQxDNdY7QG5R_Y-eqMhzsdZqUXhFpO0xkSrEh69WyscrDmmVL3JGJPnSwM0u2sidXEEqBKBPVEenvD1qXFqsU_yXUqfeIE876smLYPBQs_hrCzE5bbmr8JeokPLnjl2AwBh6AV7LQNIGxVvsKL0Q-8FsD7QElI2ScN9H8rlD',
];

const SECOND_ROW_GIFS = [
  'https://blogger.googleusercontent.com/img/a/AVvXsEirUXQrgCIP-xYR4viDcRg8Yu6fLi81_3kKQf3E9xRbWoAiAw5Do697yMD34K79jkzFvRLQsesl-QpJtH0E-TMDtj3EeosfvWnjbEyAKKmxOJuJ5v65wpN5K4AzcC8hmCuPHxlTU-5uH5__cpRCzAuty6eTFbj7lN9bmhXom1mjp-s_qtCLLckc6j6UALwt',
  'https://blogger.googleusercontent.com/img/a/AVvXsEikStd_OLbwVsmv5XTZreydIV7pTkyhRbsofHLEMc5mbJSYpr-kF9s6o37ED67oJPMmnjemY2CCn_cIdgjVXYeZ54QWkZMWJrGRygAWTv3A_GnlaJSplODu3E0w7znmPl18HFjvVLSciuxEoEIl88qLSMFPgHYS60GH6GTVGNAGqzSD4TisGimfz4qLUbzw',
  'https://blogger.googleusercontent.com/img/a/AVvXsEiMlvsD2UZ9A6XzTkihOdH9liIimgVhGgjOg6K3QEbvy91DYeyniUx6pgvKkogDSq8M44ofHT3gnlm5T8q_6WF4toJI5inBqJ0GrxClQnUscdCBbNlpqWqCIlp8cT28oPm4unXSJdceqQIw_IVGhJk9VLE4vow6ysflrgxV6ILXJJwMvyACS_0eLWYpZ3S2',
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
