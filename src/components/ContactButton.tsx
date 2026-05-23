import React from 'react';
import { motion } from 'framer-motion';

interface ContactButtonProps {
  onClick?: () => void;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="rounded-full font-medium uppercase tracking-widest text-white transition-all cursor-pointer relative overflow-hidden select-none"
      style={{
        background: 'linear-gradient(123deg, #0C0C0C 0%, #c084fc 60%, #ffffff 100%)',
        boxShadow: '0px 4px 15px rgba(192, 132, 252, 0.3), inset 4px 4px 12px #c084fc',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      <span className="inline-block px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base">
        Contact Me
      </span>
    </motion.button>
  );
};
