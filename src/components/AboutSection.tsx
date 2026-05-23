import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 flex flex-col justify-center items-center text-center overflow-hidden"
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
            className="text-[#D7E2EA] font-medium text-center leading-relaxed"
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
  );
};
