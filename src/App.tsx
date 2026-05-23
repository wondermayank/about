import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { FadeIn } from './components/FadeIn';
import { Mail, Github, Twitter, Instagram, ArrowUp } from 'lucide-react';
import { SparklesCore } from './components/ui/sparkles';

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
            <div className="flex flex-col items-center gap-6 max-w-md w-full px-6">
              {/* 3D Glassmorphic Rotating Cube */}
              <div className="w-32 h-32 flex items-center justify-center mb-4" style={{ perspective: '800px' }}>
                <motion.div
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
                  transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                  className="relative w-16 h-16"
                >
                  {/* Cube Faces */}
                  {/* Front */}
                  <div
                    className="absolute inset-0 border border-[#B600A8]/50 bg-[#B600A8]/10 backdrop-blur-[2px] rounded-lg"
                    style={{ transform: 'translateZ(32px)' }}
                  />
                  {/* Back */}
                  <div
                    className="absolute inset-0 border border-[#BE4C00]/50 bg-[#BE4C00]/10 backdrop-blur-[2px] rounded-lg"
                    style={{ transform: 'rotateY(180deg) translateZ(32px)' }}
                  />
                  {/* Left */}
                  <div
                    className="absolute inset-0 border border-[#7621B0]/50 bg-[#7621B0]/10 backdrop-blur-[2px] rounded-lg"
                    style={{ transform: 'rotateY(-90deg) translateZ(32px)' }}
                  />
                  {/* Right */}
                  <div
                    className="absolute inset-0 border border-[#D7E2EA]/40 bg-[#D7E2EA]/5 backdrop-blur-[2px] rounded-lg"
                    style={{ transform: 'rotateY(90deg) translateZ(32px)' }}
                  />
                  {/* Top */}
                  <div
                    className="absolute inset-0 border border-[#B600A8]/50 bg-[#B600A8]/10 backdrop-blur-[2px] rounded-lg"
                    style={{ transform: 'rotateX(90deg) translateZ(32px)' }}
                  />
                  {/* Bottom */}
                  <div
                    className="absolute inset-0 border border-[#7621B0]/50 bg-[#7621B0]/10 backdrop-blur-[2px] rounded-lg"
                    style={{ transform: 'rotateX(-90deg) translateZ(32px)' }}
                  />
                </motion.div>
              </div>

              {/* Brand Logo Text */}
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="hero-heading font-black text-center uppercase tracking-widest text-3xl sm:text-4xl"
              >
                wondermayank about
              </motion.span>

              {/* Progress Bar Track (Water Flow Style) */}
              <div className="w-full water-flow-container relative mt-4">
                <motion.div
                  className="absolute top-0 left-0 water-flow-bar"
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

      {/* Portals & Platforms Section */}
      <section className="py-24 sm:py-28 md:py-36 w-full bg-[#0C0C0C] relative z-30 overflow-hidden border-t border-[#D7E2EA]/5">
        {/* Interactive Sparkles Background for the whole section */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-40">
          <SparklesCore
            id="tsparticlesportals"
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={70}
            className="w-full h-full"
            particleColor="#FFFFFF"
            speed={0.4}
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {/* Card 1 */}
            <FadeIn delay={0.1} y={30}>
              <a
                href="https://commercesehoga.github.io/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between h-[360px] bg-white/[0.02] border border-[#D7E2EA]/10 rounded-[30px] p-8 hover:bg-white/[0.04] hover:border-[#B600A8]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(182,0,168,0.15)] relative overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B600A8]/20 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#B600A8] font-bold mb-4 block">
                    Launch Platform
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#D7E2EA] mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                    CBT Mock Test
                  </h3>
                  <span className="text-xs text-[#D7E2EA]/40 uppercase tracking-widest font-semibold block mb-4">
                    commercesehoga.github.io
                  </span>
                  <p className="text-sm text-[#D7E2EA]/60 font-light leading-relaxed">
                    A high-fidelity Computer Based Test engine built for Indian students preparing for CUET, SSC, and Banking exams with interactive real-time scoreboards.
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#D7E2EA] group-hover:text-[#B600A8] transition-all duration-300 mt-6">
                  <span>Launch Dashboard</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
                </div>
              </a>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn delay={0.2} y={30}>
              <a
                href="https://thunderstudy.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between h-[360px] bg-white/[0.02] border border-[#D7E2EA]/10 rounded-[30px] p-8 hover:bg-white/[0.04] hover:border-[#7621B0]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(118,33,176,0.15)] relative overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#7621B0]/20 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#7621B0] font-bold mb-4 block">
                    Free Education
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#D7E2EA] mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                    Study Material
                  </h3>
                  <span className="text-xs text-[#D7E2EA]/40 uppercase tracking-widest font-semibold block mb-4">
                    thunderstudy.github.io
                  </span>
                  <p className="text-sm text-[#D7E2EA]/60 font-light leading-relaxed">
                    An open educational repository providing organized, gamified resources, structured study notes, and lightning-fast revision decks.
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#D7E2EA] group-hover:text-[#7621B0] transition-all duration-300 mt-6">
                  <span>Explore Materials</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
                </div>
              </a>
            </FadeIn>

            {/* Card 3 */}
            <FadeIn delay={0.3} y={30}>
              <a
                href="https://wondermayank.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between h-[360px] bg-white/[0.02] border border-[#D7E2EA]/10 rounded-[30px] p-8 hover:bg-white/[0.04] hover:border-[#BE4C00]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(190,76,0,0.15)] relative overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#BE4C00]/20 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#BE4C00] font-bold mb-4 block">
                    More Builds
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#D7E2EA] mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                    More Projects
                  </h3>
                  <span className="text-xs text-[#D7E2EA]/40 uppercase tracking-widest font-semibold block mb-4">
                    wondermayank.github.io
                  </span>
                  <p className="text-sm text-[#D7E2EA]/60 font-light leading-relaxed">
                    Discover interactive anime search modules, experimental web tools, and customizable design sandboxes built with deep creative focus.
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#D7E2EA] group-hover:text-[#BE4C00] transition-all duration-300 mt-6">
                  <span>Browse Archive</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
                </div>
              </a>
            </FadeIn>
          </div>
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
