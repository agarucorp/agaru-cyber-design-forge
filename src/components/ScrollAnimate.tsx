import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/use-scroll-animation';

interface ScrollAnimateProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export const ScrollAnimate = ({ 
  children, 
  delay = 0, 
  className = '',
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px'
}: ScrollAnimateProps) => {
  const { ref, isVisible } = useScrollAnimation({ 
    threshold, 
    rootMargin,
    triggerOnce: true 
  });

  return (
    <div 
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};

