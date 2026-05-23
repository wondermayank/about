import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { FadeIn } from './components/FadeIn';
import { Mail, Github, Twitter, Instagram, ArrowUp } from 'lucide-react';
import { SparklesPreview } from './components/SparklesPreview';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Increment progress from 0% to 100% over 5000ms (5 seconds)
    const duration = 5000;
    const intervalTime = 50; 
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Wait 300ms after reaching 100% for a smooth, cohesive reveal
          setTimeout(() => {
            setIsLoading(false);
          }, 300);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-sans relative overflow-x-clip">
      {/* Premium Loader Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: '-100%',
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 bg-[#0C0C0C] z-50 flex flex-col justify-center items-center select-none"
          >
            <div className="flex flex-col items-center gap-6 max-w-xs w-full px-4">
              {/* Brand Logo Text */}
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="hero-heading font-semibold text-center tracking-normal text-lg sm:text-xl md:text-2xl px-6 leading-relaxed max-w-lg"
              >
                You are given a task to integrate an existing React component in the codebase
              </motion.span>

              {/* Progress Bar Track */}
              <div className="w-full h-[2px] bg-[#D7E2EA]/10 rounded-full overflow-hidden relative mt-4">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#BE4C00]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Numerical Percent Indicator */}
              <motion.span className="text-[#D7E2EA] opacity-60 text-sm font-semibold tracking-wider tabular-nums">
                {Math.round(progress)}%
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website Contents */}
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Projects Section */}
      <ProjectsSection />

      {/* Sparkles Showcase Section */}
      <section className="py-20 sm:py-24 md:py-32 w-full bg-[#0C0C0C] relative z-30 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn delay={0.1} y={30} className="w-full text-center mb-12">
            <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-sm font-medium mb-3 block">
              Interactive Component Integration
            </span>
            <h2 className="hero-heading font-black uppercase text-4xl sm:text-5xl md:text-6xl tracking-tight mb-4 leading-none">
              Sparkles Showcase
            </h2>
            <p className="text-[#D7E2EA]/60 max-w-xl mx-auto font-light text-sm sm:text-base leading-relaxed">
              A high-performance interactive particle core powered by tsParticles and Framer Motion. Try clicking or resizing!
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3} y={40} className="w-full rounded-2xl border border-[#D7E2EA]/10 overflow-hidden shadow-2xl">
            <SparklesPreview />
          </FadeIn>
        </div>
      </section>

      {/* 6. Interactive Contact Footer Section */}
      <footer
        id="contact"
        className="bg-[#0C0C0C] pt-24 pb-12 px-6 md:px-10 border-t border-[#D7E2EA]/10 w-full relative z-30"
      >
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
          <FadeIn delay={0.1} y={30} className="w-full text-center">
            <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-sm font-medium mb-4 block">
              Have a project in mind?
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight mb-4"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 6.5rem)' }}
            >
              LET&apos;S WORK
            </h2>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight mb-12"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 6.5rem)' }}
            >
              TOGETHER
            </h2>
          </FadeIn>

          {/* Email CTA button */}
          <FadeIn delay={0.2} y={30} className="mb-16">
            <a
              href="https://wondermayank.github.io/contact.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-[#D7E2EA]/5 border border-[#D7E2EA]/15 rounded-full px-8 py-4 sm:px-10 sm:py-5 hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/30 transition-all duration-300 shadow-2xl"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]/80 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm sm:text-lg font-medium tracking-wide text-[#D7E2EA] lowercase">
                wondermayank.github.io/contact.html
              </span>
            </a>
          </FadeIn>

          {/* Footer Bottom Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center w-full border-t border-[#D7E2EA]/10 pt-10 gap-6">
            {/* Social Media Anchors */}
            <div className="flex items-center gap-6">
              {[
                { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/wondermayank' },
                { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/wonder_mayank' },
                { icon: <Github className="w-5 h-5" />, href: 'https://github.com/wondermayank' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#D7E2EA]/10 flex items-center justify-center text-[#D7E2EA]/60 hover:text-[#D7E2EA] hover:border-[#D7E2EA]/30 hover:scale-105 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <span className="text-[#D7E2EA]/40 text-xs sm:text-sm tracking-wider uppercase font-light">
              &copy; {new Date().getFullYear()} wondermayank. ALL RIGHTS RESERVED.
            </span>

            {/* Back to top dynamic button */}
            <button
              onClick={handleScrollToTop}
              className="group flex items-center gap-2 text-xs sm:text-sm text-[#D7E2EA]/60 hover:text-[#D7E2EA] tracking-widest uppercase font-semibold cursor-pointer select-none transition-colors duration-200"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
