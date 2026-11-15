import React from 'react';
import { motion } from 'framer-motion';

interface LiveProjectButtonProps {
  onClick?: () => void;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.04, backgroundColor: 'rgba(112, 161, 252, 0.1)', borderColor: '#70A1FC', color: '#70A1FC' }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="rounded-full border-2 border-[#0C0C0C] text-[#0C0C0C] font-semibold uppercase tracking-widest cursor-pointer select-none transition-colors duration-200"
    >
      <span className="inline-block px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base">
        Live Project
      </span>
    </motion.button>
  );
};
