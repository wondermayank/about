import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  link?: { text: string; url: string };
}

const FAQ_DATA: FAQItem[] = [
  {
    question: 'Who is Wondermayank?',
    answer:
      'Wondermayank (Mayank, known on X as @wondermayankx) is an Indian 3D web creator and full stack software developer. He specializes in designing interactive digital platforms, student-first educational resources like ThunderStudy and ThunderTest, and creative Three.js/WebGL web experiences.',
  },
  {
    question: "What is Wondermayank's official X (Twitter) profile?",
    answer:
      "Wondermayank's official X profile is @wondermayankx. You can follow for development updates, open-source releases, and experimental web build announcements.",
    link: { text: 'x.com/wondermayankx', url: 'https://x.com/wondermayankx' },
  },
  {
    question: 'What is ThunderStudy?',
    answer:
      'ThunderStudy is an open educational repository providing structured study materials, comprehensive revision decks, and syllabus roadmaps for competitive Indian examinations including CUET, SSC, Banking, and JEE-NEET with 100% free access.',
    link: { text: 'thunderstudy.indevs.in', url: 'https://thunderstudy.indevs.in' },
  },
  {
    question: 'What is ThunderTest?',
    answer:
      'ThunderTest is a high-fidelity Computer-Based Test (CBT) mock exam engine built to replicate the National Testing Agency (NTA) exam room candidate screen with precision timers, question palette review states, and comprehensive instant scorecard analytics.',
    link: { text: 'thundertest.indevs.in', url: 'https://thundertest.indevs.in' },
  },
  {
    question: 'What tools and experiments has Wondermayank built?',
    answer:
      'Over 100 public web tools hosted on project.wondermayank.in, including Paletteify (color palette engine with WCAG contrast ratios), Periodic Table 3D with electron orbitals, anime search modules, and text utilities.',
    link: { text: 'project.wondermayank.in', url: 'https://project.wondermayank.in' },
  },
  {
    question: 'How can I get in touch with Wondermayank?',
    answer:
      'You can reach out directly through the official contact portal on wondermayank.in/contact.html or connect across social channels on X (@wondermayankx), GitHub, and Instagram.',
    link: { text: 'wondermayank.in/contact.html', url: 'https://wondermayank.in/contact.html' },
  },
];

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <div className="relative w-full">
      {/* Centered Pulsing Section Divider Boundary Cut Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none select-none">
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ repeat: Infinity, duration: 3.4, ease: 'easeInOut' }}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FAF8FF] border-2 border-purple-100 flex items-center justify-center shadow-[0_8px_30px_rgba(192,132,252,0.12)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#c084fc]/10 to-transparent" />
          <HelpCircle className="w-6 h-6 sm:w-7 sm:h-7 text-[#c084fc]" />
        </motion.div>
      </div>

      <section
        id="faq"
        className="bg-[#F3F8FC] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full relative z-20 border-t border-sky-100/40 overflow-hidden"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Section Heading */}
          <FadeIn delay={0.1} y={30} className="text-center mb-14 sm:mb-16">
            <span className="text-[#c084fc] font-bold text-xs uppercase tracking-widest block mb-2">
              Common Questions &amp; Direct Answers
            </span>
            <h2
              className="text-[#0C0C0C] font-black uppercase tracking-tight leading-none text-center"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
            >
              FAQ
            </h2>
          </FadeIn>

          {/* Collapsible Accordion List */}
          <div className="flex flex-col gap-4 w-full">
            {FAQ_DATA.map((item, idx) => {
              const isOpen = openIdx === idx;

              return (
                <FadeIn key={idx} delay={0.1 + idx * 0.05} y={20} className="w-full">
                  <motion.div
                    className="bg-white border border-slate-100 rounded-[24px] sm:rounded-[28px] overflow-hidden transition-all duration-300 shadow-sm hover:border-[#c084fc]/40"
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full flex items-center justify-between p-6 sm:p-7 text-left cursor-pointer select-none gap-4"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold uppercase text-base sm:text-lg md:text-xl text-[#0C0C0C] tracking-tight">
                        {item.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="w-8 h-8 rounded-full bg-[#FAF5FF] flex items-center justify-center shrink-0 border border-purple-100"
                      >
                        <ChevronDown className="w-4 h-4 text-[#c084fc]" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        >
                          <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 text-sm sm:text-base text-[#0C0C0C]/70 font-light leading-relaxed border-t border-slate-50">
                            <p>{item.answer}</p>
                            {item.link && (
                              <div className="mt-3">
                                <a
                                  href={item.link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#c084fc] hover:underline"
                                >
                                  <span>{item.link.text}</span>
                                  <span>&rarr;</span>
                                </a>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
