import React from 'react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';
import { SparklesCore } from './ui/sparkles';

export const HeroSection: React.FC = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Love', href: '#services' }, // Map to services / love to create section
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex flex-col justify-between overflow-hidden bg-[#0C0C0C] w-full">
      {/* Interactive Sparkles Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <SparklesCore
          id="tsparticleshero"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={0.4}
        />
      </div>
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-30">
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 w-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading Container */}
      <div className="flex-1 flex items-start justify-center pt-10 sm:pt-14 md:pt-20 z-20">
        <div className="w-full overflow-hidden select-none pointer-events-none">
          <FadeIn delay={0.15} y={40} className="w-full">
            <h1 className="hero-heading text-center font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[7.2vw] sm:text-[7.8vw] md:text-[8vw] lg:text-[8.2vw] mt-6 sm:mt-4 md:-mt-5">
              Hi, i&apos;m wondermayank
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* Hero Portrait (Center absolute layer) */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-full flex justify-center items-end"
        >
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnFICxCcbaWh5iSoMWsVKbbsFZlYPAb7Il3Po4UCHKkT7MZ_RD0bBsQlXgjRSI2NZmwUEhhDyMdjhQ0CTfGrlsVURTkjHpthe-vLRnoC3_fabW5Yu2LU4eAu-t1xVssyjZUHCAmuupkHdMbbxgmSRdULgulogiFmemPcMk7hA1OAMx6oF5xFlwvM9DbWR8/s1024/ChatGPT%20Image%20May%2023,%202026,%2003_09_18%20PM.png"
            alt="Wondermayank Portrait"
            className="w-full h-auto object-contain select-none pointer-events-none rounded-[30px] sm:rounded-[40px]"
            draggable="false"
          />
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20 w-full">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
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
    </section>
  );
};
