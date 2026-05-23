import React, { useRef, useEffect, useState } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;

      // Check if cursor is within padding distance of the element's bounding rect
      const isWithinX = clientX >= rect.left - padding && clientX <= rect.right + padding;
      const isWithinY = clientY >= rect.top - padding && clientY <= rect.bottom + padding;

      if (isWithinX && isWithinY) {
        setIsTransitioning(true);
        // Calculate offset from center
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const offsetX = clientX - centerX;
        const offsetY = clientY - centerY;

        // Apply strength factor
        const targetX = offsetX / strength;
        const targetY = offsetY / strength;

        setTransform({ x: targetX, y: targetY });
      } else {
        // Reset transform
        setIsTransitioning(false);
        setTransform({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [padding, strength]);

  const currentTransition = isTransitioning ? activeTransition : inactiveTransition;

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0px)`,
        transition: currentTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};
