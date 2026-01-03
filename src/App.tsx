import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Fixes from "./pages/Fixes";
import AnimationPreview from "./pages/AnimationPreview";
import React from "react";
import whatsappIcon from './components/assets/ProjectShowcase/whatsapp.png';

const queryClient = new QueryClient();

function App() {
  // Efecto estela táctil tipo haz de neón para mobile
  React.useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;
    let lastTime = 0;
    let lastX = null;
    let lastY = null;
    const minInterval = 32; // ms entre estelas
    const createNeonTrail = (x, y, angle) => {
      const ripple = document.createElement('div');
      ripple.style.position = 'fixed';
      ripple.style.left = `${x - 4}px`;
      ripple.style.top = `${y - 32}px`;
      ripple.style.width = '8px';
      ripple.style.height = '64px';
      ripple.style.pointerEvents = 'none';
      ripple.style.zIndex = '9999';
      ripple.style.background = 'linear-gradient(180deg, #00fff7 0%, #895AF6 100%)';
      ripple.style.opacity = '0.18'; // intensidad muy baja
      ripple.style.borderRadius = '16px';
      ripple.style.boxShadow = '0 0 4px 1px #00fff766, 0 0 8px 2px #895AF633';
      ripple.style.filter = 'blur(1.8px)';
      ripple.style.transition = 'opacity 0.5s linear';
      ripple.style.transform = `rotate(${angle}deg)`;
      document.body.appendChild(ripple);
      setTimeout(() => {
        ripple.style.opacity = '0';
        setTimeout(() => ripple.remove(), 500);
      }, 80);
    };
    const handleTouchMove = (e) => {
      const now = Date.now();
      if (now - lastTime < minInterval) return;
      lastTime = now;
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        const x = touch.clientX;
        const y = touch.clientY;
        let angle = 0;
        if (lastX !== null && lastY !== null) {
          const dx = x - lastX;
          const dy = y - lastY;
          angle = Math.atan2(dy, dx) * 180 / Math.PI + 90; // +90 para que la estela siga el dedo
        }
        createNeonTrail(x, y, angle);
        lastX = x;
        lastY = y;
      }
    };
    const handleTouchEnd = () => {
      lastX = null;
      lastY = null;
    };
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <>
      <div className="site-bg">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-orb-1" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-orb-2" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-orb-3" />
        {/* Elementos flotantes variados */}
        <svg className="absolute top-20 left-20 animate-float" width="100" height="100" viewBox="0 0 100 100">
          <polygon points="50,5 85,25 85,75 50,95 15,75 15,25" fill="none" stroke="#fff" strokeWidth="1" opacity="0.15" />
        </svg>
        <svg className="absolute top-40 right-32 animate-float" style={{ animationDelay: '1s' }} width="80" height="80" viewBox="0 0 80 80">
          <polygon points="40,4 68,20 68,60 40,76 12,60 12,20" fill="none" stroke="#fff" strokeWidth="1" opacity="0.12" />
        </svg>
        <svg className="absolute bottom-32 left-32 animate-glow" width="200" height="2" viewBox="0 0 200 2">
          <line x1="0" y1="1" x2="200" y2="1" stroke="#fff" strokeWidth="1" opacity="0.08" />
        </svg>
        <div className="absolute top-32 right-40 w-2 h-2 bg-cyber-accent rounded-full animate-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-60 w-1 h-1 bg-cyber-primary rounded-full animate-glow" style={{ animationDelay: '3s' }} />
        <svg className="absolute bottom-20 right-40 animate-spin-slow" width="60" height="60" viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="25" fill="none" stroke="#fff" strokeWidth="1" opacity="0.08" strokeDasharray="10,5" />
        </svg>
      </div>
      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/5491130509316"
        target="_blank"
        rel="noopener noreferrer"
        style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 50 }}
        className="shadow-lg rounded-full hover:scale-110 transition-transform duration-200"
      >
        <img src={whatsappIcon} alt="WhatsApp" style={{ width: 56, height: 56 }} />
      </a>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/fixes" element={<Fixes />} />
              <Route path="/animation-preview" element={<AnimationPreview />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
