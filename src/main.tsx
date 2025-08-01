import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';

// Ripple effect global solo para mobile/tablet
if (typeof window !== 'undefined') {
  const isTouch = () => window.matchMedia('(pointer: coarse)').matches;
  const rippleHandler = (e: TouchEvent) => {
    if (!isTouch()) return;
    const touch = e.touches[0] || e.changedTouches[0];
    if (!touch) return;
    const ripple = document.createElement('span');
    ripple.style.position = 'fixed';
    ripple.style.left = `${touch.clientX - 20}px`;
    ripple.style.top = `${touch.clientY - 3}px`;
    ripple.style.width = '40px';
    ripple.style.height = '6px';
    ripple.style.borderRadius = '8px/3px';
    ripple.style.filter = 'none';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '9999';
    ripple.style.background = 'linear-gradient(90deg, #895AF6 0%, #4DE3FF 100%)';
    ripple.style.opacity = '0.18';
    ripple.style.transform = 'scaleX(0.7)';
    ripple.style.transition = 'transform 0.3s cubic-bezier(.4,2,.6,1), opacity 0.3s';
    document.body.appendChild(ripple);
    requestAnimationFrame(() => {
      ripple.style.transform = 'scaleX(1.15)';
      ripple.style.opacity = '0';
    });
    setTimeout(() => {
      ripple.remove();
    }, 300);
  };
  window.addEventListener('touchstart', rippleHandler, { passive: true });
  window.addEventListener('touchmove', rippleHandler, { passive: true });
}

// Comentario: HelmetProvider permite que Helmet funcione en toda la app para gestionar SEO
createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
