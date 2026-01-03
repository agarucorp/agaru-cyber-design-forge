import { ReactNode } from 'react';

interface ScrollAnimateProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
}

export const ScrollAnimate = ({ 
  children, 
  delay = 0, 
  className = '',
  threshold = 0.1 
}: ScrollAnimateProps) => {
  // Temporalmente desactivado - siempre mostrar contenido
  return (
    <div className={className}>
      {children}
    </div>
  );
};

