import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';

const PROJECTS_DATA = [
  {
    num: '01',
    category: 'student help',
    name: 'cbt mock test',
    url: 'https://commercesehoga.github.io/dashboard',
    imgLeft1: 'https://blogger.googleusercontent.com/img/a/AVvXsEhklsaDd_KjwLHh3ahzrlRXfQdMYL_Q4_wUbAFVM7SgIv3NH0fr3cVdwlSTTnie2kNUOBqejuygEdDg3XDqnKHmMDZj8KNEzveauwh4AIyBWHgIx_OHTvkxGERJGsbpuaXeWmyw1O6Yw8VusJr80nzDDxspwtnjxlFpmlSY47osdGu6zS7XPkiwE9ua2uAa',
    imgLeft2: 'https://blogger.googleusercontent.com/img/a/AVvXsEgWU8qSU6UVgkDI4-hyASL0l5krOuCklJslp25JWsTgyKCG7ne6Gr9_WfArFlrIwkOhs_YAgJ1M_abPMxUDGCTKGD6zUIzkuPg7MLo7z3mMJlTIFzNDJ-Qh6IuTevP2Fcli_0SPyjxJNxq1_eo948-Z1-Tbkt69F0zL8xlw0Krg5DaMgXdwTI0eEqJXBTt_',
    imgRight: 'https://blogger.googleusercontent.com/img/a/AVvXsEjWe8DTgtscI12U8ybok0hqSd4ZxMtuZy_e252f-2Ry263KfBnaizeWTXh_fZhsn2WbPiz4y3xFfw9dfb4T6Eq-Qb8buVqddoH1ext2pOeA51FYihk8GobhBwXqATSfYVf43Bwv5Dz4p4Qrup9MZID_ZO6e7aLA49HZ7Mr80Q-P0Ubrwy6DkCFFdULhjiT7',
  },
  {
    num: '02',
    category: 'public',
    name: 'colour palette',
    url: 'https://wondermayank.github.io/paletteify/',
    imgLeft1: 'https://blogger.googleusercontent.com/img/a/AVvXsEhjy7j4L07tYhGjm3Swl9ZO4jYZW4WbmbdpyWZPpVGOSLcwgGz6x0Y61CPfUwaKQ9xnb-7c3KrFWhU2DY4PyHlypP7GCjMOli6ATFENvDhs3WDiHMXDsJ-gmaR9LiESlOKAjq2Sow9XgHgLSlrKNTxKIjKzyJ3fzs2mcjnyEgwf1Lw5Hi9HCBeCtTxeinkX',
    imgLeft2: 'https://blogger.googleusercontent.com/img/a/AVvXsEjQ1qTiJJhyN1Y0WWu17RE03wYjIR24mkW_jtf3vKtt0zV6ICEFpZJdHa83mKUiqUK_rHYhzIx6xTYpVQ1VRZHRwQkN-j4wq5HMUBXRmAz8cnzHg3HtdBXJ7o1BkL7lX1Yp9Z3AU2-3PJS9PYgJV2bQG97IkyNajVyxiU9KgIbWTW62bRfcnkiJfelMxwzW',
    imgRight: 'https://blogger.googleusercontent.com/img/a/AVvXsEgsRpju5vN8kRX7R-X3tqNm9ljW9HCXyUJbWrALeFo-fQnH-f9Z3irV1RjeXWmSLG0nbR59HdDW2_spTYEK8N-yP1J9N7XMECGpB7qAtREvTFYUablescCgKb7oDK66VXqYeUOiN67-sJgwE-kCy7t2Rpsqqrb8forakzWpdINvXbt-D0EmzwGYN2BJIdSf',
  },
  {
    num: '03',
    category: 'student',
    name: 'periodic table',
    url: 'https://wondermayank.github.io/Periodic-Table/',
    imgLeft1: 'https://blogger.googleusercontent.com/img/a/AVvXsEjD71RpW55gG3cxIlrGZp0sGNHpY98eFzdXustEfwfBeFcEe0vdFOLOMECm3CXsAeYn058DAtX7RH5BsqtykvztkoG1BGrRbkyZsIhpGMB-WfDMO4NxyYxde9CtNE5xUIClj10MPdm4rn4Rn5dsrzQlFs3jRRFaw_AjdBpSWYK5UvhlmE2doE-w9PWpMxnj',
    imgLeft2: 'https://blogger.googleusercontent.com/img/a/AVvXsEhOFGB8vETjKyz1EjPWkrnziIi3fAPnmV5P77z8hdfoifCDtsZ2Lg8STE7WH-c7lCUjHO_gnQalPRm5prnuWd01vgUjNO4o89I-EXO_pO1uv3NvboinbO4QYWKPlM_de1Qj6dECq-mpLPwvl7N_qXmRnjxqWEkXQ6_GN51XgjqCn6c_42zmv-iz82eam_B4',
    imgRight: 'https://blogger.googleusercontent.com/img/a/AVvXsEhTvu9vGNCfP0-h3M_Cxxw1P9zC4382BGn0ma4wgfh4mXFK3pWE6EA5EGG1PFEZb6czp_c39fJJW-odm4gsYyH0VmwRicoOYSWPFzAzdbsJcLh3JwRmk7tu14vNUv8X8VU7pj6IaTrEkw2THSqLhex1lPtBstjlHxE5Y3Agtk8uGjdiYikJ-RrMpP0jrgTt',
  },
];

interface ProjectCardProps {
  project: typeof PROJECTS_DATA[0];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const totalCards = PROJECTS_DATA.length;
  // Calculate targetScale: targetScale = 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;

  // Transform scale from 1 down to targetScale as we scroll past the sticky frame
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] flex items-start justify-center sticky"
      style={{
        top: `calc(96px + ${index * 28}px)`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-sky-100 bg-[#F3F8FC] p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-[0_-15px_40px_rgba(14,165,233,0.06)]"
      >
        {/* Top Metadata Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#0C0C0C] leading-none"
              style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}
            >
              {project.num}
            </span>
            <div className="flex flex-col text-left">
              <span className="text-[#0C0C0C]/50 uppercase tracking-widest text-xs sm:text-sm">
                {project.category}
              </span>
              <h3 className="text-[#0C0C0C] font-semibold text-lg sm:text-2xl uppercase tracking-wide">
                {project.name}
              </h3>
            </div>
          </div>
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
            <LiveProjectButton />
          </a>
        </div>

        {/* Bottom Two-Column Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-10 gap-4 sm:gap-6 mt-6 items-stretch">
          {/* Left column (40% width -> 4 cols) */}
          <div className="sm:col-span-4 flex flex-col gap-4 sm:gap-6 justify-between h-full">
            <img
              src={project.imgLeft1}
              alt={`${project.name} Asset 1`}
              loading="lazy"
              className="w-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.imgLeft2}
              alt={`${project.name} Asset 2`}
              loading="lazy"
              className="w-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>

          {/* Right column (60% width -> 6 cols) */}
          <div className="sm:col-span-6 flex">
            <img
              src={project.imgRight}
              alt={`${project.name} Tall Asset`}
              loading="lazy"
              className="w-full h-full min-h-[220px] sm:min-h-0 object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pb-32 -mt-10 sm:-mt-12 md:-mt-14 relative z-30 pt-20 border-t border-slate-100"
    >
      {/* Centered Pulsing Section Divider Boundary Cut Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none select-none">
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FAF8FF] border-2 border-purple-100 flex items-center justify-center shadow-[0_8px_30px_rgba(192,132,252,0.12)] relative overflow-hidden"
        >
          {/* Glowing neon core overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#c084fc]/10 to-transparent" />
          
          {/* Code / Project bracket SVG inside */}
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 text-[#c084fc]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
        </motion.div>
      </div>

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Stacking Cards Container */}
        <div className="w-full flex flex-col gap-10">
          {PROJECTS_DATA.map((project, idx) => (
            <ProjectCard key={project.num} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
