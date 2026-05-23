import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface CharProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const Char: React.FC<CharProps> = ({ char, index, total, progress }) => {
  // Stagger active scroll intervals per character
  // We allow character ranges to overlap slightly (e.g. index+1.5) for a smoother, organic transition
  const start = index / total;
  const end = Math.min(1, (index + 2) / total); 

  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder for width/height */}
      <span className="opacity-0 select-none pointer-events-none">
        {char === ' ' ? '\u00A0' : char}
      </span>
      {/* Absolute animated character */}
      <motion.span style={{ opacity }} className="absolute top-0 left-0">
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');

  return (
    <p ref={containerRef} className={`${className} inline-wrap`} style={style}>
      {chars.map((char, i) => (
        <Char
          key={i}
          char={char}
          index={i}
          total={chars.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
};
