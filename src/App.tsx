import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { TimelineSection } from './components/TimelineSection';
import { ProjectsSection } from './components/ProjectsSection';
import { FAQSection } from './components/FAQSection';
import { FadeIn } from './components/FadeIn';
import { Mail, Github, Twitter, Instagram, ArrowUp } from 'lucide-react';
import { SparklesCore } from './components/ui/sparkles';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user has already visited in this session
    try {
      if (sessionStorage.getItem('about_wm_visited')) {
        setIsLoading(false);
        return;
      }
    } catch {
      // Ignore storage restrictions
    }

    // Increment progress from 0% to 100% over 1800ms
    const duration = 1800;
    const intervalTime = 30; 
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          try {
            sessionStorage.setItem('about_wm_visited', 'true');
          } catch {
            // Ignore storage restrictions
          }
          setTimeout(() => {
            setIsLoading(false);
          }, 200);
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
    <div className="w-full bg-[#EEF3FF] min-h-screen text-[#D7E2EA] font-sans relative overflow-x-clip">
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
            className="fixed inset-0 bg-white z-50 flex flex-col justify-center items-center select-none"
          >
            <div className="flex flex-col items-center gap-6 max-w-md w-full px-6">
              {/* 3D Glassmorphic Rotating Cube */}
              <div className="w-32 h-32 flex items-center justify-center mb-4 filter drop-shadow-[0_10px_16px_rgba(0,0,0,0.06)]" style={{ perspective: '800px' }}>
                <motion.div
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
                  transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                  className="relative w-16 h-16"
                >
                  {/* Cube Faces */}
                  {/* Front */}
                  <div
                    className="absolute inset-0 border border-[#70A1FC]/60 bg-[#70A1FC]/10 backdrop-blur-[2px] rounded-lg"
                    style={{ transform: 'translateZ(32px)' }}
                  />
                  {/* Back */}
                  <div
                    className="absolute inset-0 border border-[#0C0C0C]/25 bg-[#0C0C0C]/3 backdrop-blur-[2px] rounded-lg"
                    style={{ transform: 'rotateY(180deg) translateZ(32px)' }}
                  />
                  {/* Left */}
                  <div
                    className="absolute inset-0 border border-[#d8b4fe]/60 bg-[#d8b4fe]/10 backdrop-blur-[2px] rounded-lg"
                    style={{ transform: 'rotateY(-90deg) translateZ(32px)' }}
                  />
                  {/* Right */}
                  <div
                    className="absolute inset-0 border border-[#0C0C0C]/20 bg-[#0C0C0C]/2 backdrop-blur-[2px] rounded-lg"
                    style={{ transform: 'rotateY(90deg) translateZ(32px)' }}
                  />
                  {/* Top */}
                  <div
                    className="absolute inset-0 border border-[#0C0C0C]/30 bg-[#0C0C0C]/4 backdrop-blur-[2px] rounded-lg"
                    style={{ transform: 'rotateX(90deg) translateZ(32px)' }}
                  />
                  {/* Bottom */}
                  <div
                    className="absolute inset-0 border border-[#d8b4fe]/70 bg-[#d8b4fe]/10 backdrop-blur-[2px] rounded-lg"
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
              <motion.span className="text-[#0C0C0C] opacity-60 text-sm font-semibold tracking-wider tabular-nums">
                {Math.round(progress)}%
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website Contents */}
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Visual Impact & Live Stats Counter */}
      <StatsSection />

      {/* 3. Marquee Section */}
      <MarqueeSection />

      {/* 4. About Section */}
      <AboutSection />

      {/* 5. Tech Stack & Skills Orbit */}
      <SkillsSection />

      {/* 6. Services Section */}
      <ServicesSection />

      {/* 7. Milestones & Journey Timeline */}
      <TimelineSection />

      {/* 8. Projects Section */}
      <ProjectsSection />

      {/* Portals & Platforms Section */}
      <div className="relative w-full">
        {/* Centered Pulsing Section Divider Boundary Cut Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none select-none">
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ repeat: Infinity, duration: 3.6, ease: "easeInOut" }}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F8FAFF] border-2 border-sky-100 flex items-center justify-center shadow-[0_8px_30px_rgba(112,161,252,0.15)] relative overflow-hidden"
          >
            {/* Glowing neon core overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#70A1FC]/10 to-transparent" />
            
            {/* Grid Launch icon SVG inside */}
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 text-[#70A1FC]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </motion.div>
        </div>

        <section className="py-24 sm:py-28 md:py-36 w-full bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-30 overflow-hidden border-t border-slate-100">
          {/* Interactive Sparkles Background for the whole section */}
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-40">
            <SparklesCore
              id="tsparticlesportals"
              background="transparent"
              minSize={0.4}
              maxSize={1.2}
              particleDensity={70}
              className="w-full h-full"
              particleColor="#70A1FC"
              speed={0.4}
            />
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {/* Card 1 */}
              <FadeIn delay={0.1} y={30}>
                <a
                  href="https://thundertest.indevs.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between h-[360px] bg-[#F3F8FC] border border-sky-100 rounded-[30px] p-8 hover:bg-[#E0F2FE] hover:border-[#70A1FC]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(112,161,252,0.15)] relative overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#70A1FC]/20 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                  
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#70A1FC] font-bold mb-4 block">
                      Launch Platform
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0C0C0C] mb-3 tracking-tight group-hover:text-black transition-colors duration-300">
                      CBT Mock Test
                    </h3>
                    <span className="text-xs text-[#0C0C0C]/40 uppercase tracking-widest font-semibold block mb-4">
                      thundertest.indevs.in
                    </span>
                    <p className="text-sm text-[#0C0C0C]/60 font-light leading-relaxed">
                      A high-fidelity Computer Based Test engine built for Indian students preparing for CUET, SSC, and Banking exams with interactive real-time scoreboards.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#0C0C0C] group-hover:text-[#70A1FC] transition-all duration-300 mt-6">
                    <span>Launch Dashboard</span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
                  </div>
                </a>
              </FadeIn>

              {/* Card 2 */}
              <FadeIn delay={0.2} y={30}>
                <a
                  href="https://thunderstudy.indevs.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between h-[360px] bg-[#F3F8FC] border border-sky-100 rounded-[30px] p-8 hover:bg-[#E0F2FE] hover:border-[#d8b4fe]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(216,180,254,0.15)] relative overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#d8b4fe]/20 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                  
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#d8b4fe] font-bold mb-4 block">
                      Free Education
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0C0C0C] mb-3 tracking-tight group-hover:text-black transition-colors duration-300">
                      Study Material
                    </h3>
                    <span className="text-xs text-[#0C0C0C]/40 uppercase tracking-widest font-semibold block mb-4">
                      thunderstudy.indevs.in
                    </span>
                    <p className="text-sm text-[#0C0C0C]/60 font-light leading-relaxed">
                      An open educational repository providing organized, gamified resources, structured study notes, and lightning-fast revision decks.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#0C0C0C] group-hover:text-[#d8b4fe] transition-all duration-300 mt-6">
                    <span>Explore Materials</span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
                  </div>
                </a>
              </FadeIn>

              {/* Card 3 */}
              <FadeIn delay={0.3} y={30}>
                <a
                  href="https://project.wondermayank.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between h-[360px] bg-[#F3F8FC] border border-sky-100 rounded-[30px] p-8 hover:bg-[#E0F2FE] hover:border-[#e9d5ff]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(233,213,255,0.15)] relative overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#e9d5ff]/20 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                  
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#e9d5ff] font-bold mb-4 block">
                      More Builds
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0C0C0C] mb-3 tracking-tight group-hover:text-black transition-colors duration-300">
                      More Projects
                    </h3>
                    <span className="text-xs text-[#0C0C0C]/40 uppercase tracking-widest font-semibold block mb-4">
                      project.wondermayank.in
                    </span>
                    <p className="text-sm text-[#0C0C0C]/60 font-light leading-relaxed">
                      Discover interactive anime search modules, experimental web tools, and customizable design sandboxes built with deep creative focus.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#0C0C0C] group-hover:text-[#70A1FC] transition-all duration-300 mt-6">
                    <span>Browse Archive</span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
                  </div>
                </a>
              </FadeIn>
            </div>
          </div>
        </section>
      </div>

      {/* 10. Interactive FAQ Section (Heavy AEO) */}
      <FAQSection />

      {/* 11. Interactive Contact Footer Section */}
      <footer
        id="contact"
        className="bg-white pt-24 pb-12 px-6 md:px-10 border-t border-slate-100 w-full relative z-30"
      >
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
          <FadeIn delay={0.1} y={30} className="w-full text-center">
            <span className="text-[#0C0C0C]/50 uppercase tracking-widest text-sm font-medium mb-4 block">
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
              href="https://wondermayank.in/contact.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-full px-8 py-4 sm:px-10 sm:py-5 hover:bg-slate-100 hover:border-slate-300 transition-all duration-300 shadow-xl"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#0C0C0C]/80 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm sm:text-lg font-medium tracking-wide text-[#0C0C0C] lowercase">
                wondermayank.in/contact.html
              </span>
            </a>
          </FadeIn>

          {/* Footer Bottom Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center w-full border-t border-slate-200 pt-10 gap-6">
            {/* Social Media Anchors */}
            <div className="flex items-center gap-6">
              {[
                { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/wondermayank', label: 'Instagram @wondermayank' },
                { icon: <Twitter className="w-5 h-5" />, href: 'https://x.com/wondermayankx', label: 'X (Twitter) @wondermayankx' },
                { icon: <Github className="w-5 h-5" />, href: 'https://github.com/wondermayank', label: 'GitHub @wondermayank' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#0C0C0C]/60 hover:text-[#70A1FC] hover:border-sky-200 hover:scale-105 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <span className="text-[#0C0C0C]/40 text-xs sm:text-sm tracking-wider uppercase font-light">
              &copy; {new Date().getFullYear()} wondermayank. ALL RIGHTS RESERVED.
            </span>

            {/* Back to top dynamic button */}
            <button
              onClick={handleScrollToTop}
              className="group flex items-center gap-2 text-xs sm:text-sm text-[#0C0C0C]/60 hover:text-[#70A1FC] tracking-widest uppercase font-semibold cursor-pointer select-none transition-colors duration-200"
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
