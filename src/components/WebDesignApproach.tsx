
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Icon1 from './assets/ProcessIcons/1.png';
import Icon2 from './assets/ProcessIcons/2.png';
import Icon3 from './assets/ProcessIcons/3.png';
import Icon4 from './assets/ProcessIcons/4.png';
import Icon5 from './assets/ProcessIcons/5.png';

interface WebDesignApproachProps {
  lang: 'ES' | 'EN';
}

const WebDesignApproach = ({ lang }: WebDesignApproachProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);

  // Carousel infinito: clonar slides al inicio y final
  const steps = lang === 'ES'
    ? [
        {
          icon: Icon1,
          title: 'Onboarding del Proyecto',
          description: 'Reunión inicial con nuestro equipo de diseño. Recopilamos toda la información relevante sobre tu proyecto: tu industria, activos de marca (logotipos, colores), usuarios clave, referencias visuales y los objetivos principales de tu negocio.',
          step: 1
        },
        {
          icon: Icon2,
          title: 'Alineación de Diseño',
          description: 'Presentamos el primer concepto de diseño. Recibimos tus comentarios para que podamos refinar la disposición y los elementos visuales. Esta es una etapa de previsualización, perfecta para solicitar ajustes y asegurar la alineación con tu visión.',
          step: 2
        },
        {
          icon: Icon3,
          title: 'Aprobación de Diseño',
          description: 'Revisión final del diseño. Basándonos en todos los comentarios anteriores, presentamos la versión completa y pulida del diseño del sitio web. Esta es la última oportunidad para realizar cambios antes de pasar al equipo de desarrollo.',
          step: 3
        },
        {
          icon: Icon4,
          title: 'Ejecución',
          description: 'Nuestro equipo de desarrollo toma el relevo. Utilizando el diseño aprobado, comenzamos a construir el sitio web. Ambos equipos, de diseño y desarrollo, colaboran para asegurar que cada detalle sea implementado con precisión.',
          step: 4
        },
        {
          icon: Icon5,
          title: 'Lanzamiento',
          description: 'Revisión final para asegurar que cada elemento esté en su lugar. Una vez aprobado, desplegamos el sitio web en nuestro servidor, dejándolo completamente operativo y listo para tu audiencia.',
          step: 5
        }
      ]
    : [
        {
          icon: Icon1,
          title: 'Project Onboarding',
          description: 'Initial meeting with our design team. We gather all relevant information about your project: your industry, brand assets (logos, colors), key users, visual references and the main objectives of your business.',
          step: 1
        },
        {
          icon: Icon2,
          title: 'Design Alignment',
          description: 'We present the first design concept. We receive your feedback so we can refine the layout and visual elements. This is a preview stage, perfect for requesting adjustments and ensuring alignment with your vision.',
          step: 2
        },
        {
          icon: Icon3,
          title: 'Design Approval',
          description: 'Final design review. Based on all previous feedback, we present the complete and polished version of the website design. This is the last opportunity to make changes before moving to the development team.',
          step: 3
        },
        {
          icon: Icon4,
          title: 'Execution',
          description: 'Our development team takes over. Using the approved design, we begin building the website. Both design and development teams collaborate to ensure every detail is implemented with precision.',
          step: 4
        },
        {
          icon: Icon5,
          title: 'Launch',
          description: 'Final review to ensure every element is in place. Once approved, we deploy the website on our server, leaving it fully operational and ready for your audience.',
          step: 5
        }
      ];

  // Navegación clásica
  const nextStep = () => setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  const prevStep = () => setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));

  // Sincroniza scroll con currentStep
  useEffect(() => {
    if (containerRef.current) {
      const cardWidth = 400;
      const spacing = 32;
      const totalCardWidth = cardWidth + spacing;
      const scrollPosition = currentStep * totalCardWidth;
      containerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [currentStep]);

  // Drag n drop y touch igual que antes, pero usando currentStep
  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    if (containerRef.current) {
      scrollStartX.current = containerRef.current.scrollLeft;
    }
  };
  const handleDragMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    const dx = e.clientX - dragStartX.current;
    containerRef.current.scrollLeft = scrollStartX.current - dx;
  };
  const handleDragEnd = () => {
    setIsDragging(false);
  };
  // Touch events para mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    dragStartX.current = e.touches[0].clientX;
    if (containerRef.current) {
      scrollStartX.current = containerRef.current.scrollLeft;
    }
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    const dx = e.touches[0].clientX - dragStartX.current;
    containerRef.current.scrollLeft = scrollStartX.current - dx;
  };
  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Dots y lógica visual usan currentStep
  const currentStepVisual = currentStep;

  return (
    <section 
      id="process" 
      className="py-20 bg-cyber-grey flex justify-center items-center w-full min-h-screen"
    >
      <div className="max-w-7xl w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proceso de <span className="bg-gradient-to-r from-[#895AF6] to-[#4DE3FF] bg-clip-text text-transparent">Diseño & Desarrollo Web</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ¿Cómo funciona?
          </p>
        </div>

        {/* Cards Container with Navigation */}
        <div className="relative w-full max-w-6xl mx-auto flex items-center" style={{ minHeight: '420px' }}>
          {/* Línea premium detrás de las cards y flechas premium entre cards */}
          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 z-0 flex items-center pointer-events-none" style={{ height: '2px' }}>
            <div className="mx-24 w-[calc(100%-12rem)] h-[2px] bg-gradient-to-r from-[#B983FF] via-[#895AF6] to-[#4DE3FF] rounded-full neon-glow" style={{ position: 'relative', opacity: 0.85, boxShadow: '0 0 32px 4px #895AF6, 0 0 12px 2px #B983FF' }}>
              {/* Flechas premium entre cards */}
              {steps.slice(0, -1).map((_, idx) => (
                <div
                  key={idx}
                  className="absolute z-10 top-1/2 left-0 transform -translate-y-1/2"
                  style={{ left: `calc(${(idx + 1) / (steps.length)} * 100% - 18px)` }}
                >
                  <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id={`arrow-gradient-${idx}`} x1="0" y1="12" x2="36" y2="12" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#B983FF" />
                        <stop offset="0.5" stopColor="#895AF6" />
                        <stop offset="1" stopColor="#4DE3FF" />
                      </linearGradient>
                    </defs>
                    <path d="M2 12H34M34 12L28 6M34 12L28 18" stroke={`url(#arrow-gradient-${idx})`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="drop-shadow(0px 0px 10px #B983FFAA)" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Flechas de navegación */}
          <button
            onClick={prevStep}
            className="absolute left-0 z-20 top-1/2 -translate-y-1/2 bg-[#181A20]/80 hover:bg-[#23243a]/90 border border-[#895AF6]/30 rounded-full p-2 shadow-lg transition-all duration-300"
            style={{ marginLeft: '8px' }}
            aria-label="Anterior"
            disabled={currentStep === 0}
          >
            <ChevronLeft className="w-7 h-7 text-[#895AF6]" />
          </button>
          <button
            onClick={nextStep}
            className="absolute right-0 z-20 top-1/2 -translate-y-1/2 bg-[#181A20]/80 hover:bg-[#23243a]/90 border border-[#895AF6]/30 rounded-full p-2 shadow-lg transition-all duration-300"
            style={{ marginRight: '8px' }}
            aria-label="Siguiente"
            disabled={currentStep === steps.length - 1}
          >
            <ChevronRight className="w-7 h-7 text-[#895AF6]" />
          </button>

          {/* Cards Container */}
          <div 
            ref={containerRef}
            className="flex space-x-8 overflow-x-auto scrollbar-hide py-8 px-16 w-full z-10 select-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', cursor: isDragging ? 'grabbing' : 'grab' }}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {steps.map((step, index) => (
              <div key={index} className="flex-shrink-0">
                {/* Card */}
                <div className={`w-[400px] h-[384px] bg-[#23243a] rounded-2xl p-8 border border-white/5 shadow-lg transition-all duration-500 group hover:shadow-2xl hover:border-[#895AF6]/30 hover:scale-105 relative ${
                  index === currentStep ? 'ring-2 ring-[#895AF6]/50 shadow-[0_0_30px_0_#895AF6]/20' : 'ring-1 ring-[#895AF6]/20'
                }`}>
                  {/* Step Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#895AF6]/20 to-[#4DE3FF]/20 flex items-center justify-center border border-[#895AF6]/30 z-20">
                        <img src={step.icon} alt={`Step ${step.step}`} className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    </div>
                    <span className="text-4xl font-bold text-white">{step.step}</span>
                  </div>
                  {/* Description */}
                  <p className="text-lg text-gray-300 mb-8">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Navigation Dots - Only at bottom */}
        <div className="flex justify-center mt-8">
          <div className="relative w-[192px] h-2 bg-gray-700 rounded-full overflow-hidden">
            {/* Línea de fondo */}
            <div className="absolute inset-0 bg-gray-700 rounded-full"></div>
            {/* Línea de progreso con efecto neón */}
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#B983FF] via-[#895AF6] to-[#4DE3FF] rounded-full transition-all duration-500 ease-out"
              style={{ 
                width: `${((currentStepVisual + 1) / (steps.length - 1)) * 100}%`,
                boxShadow: '0 0 12px 2px #895AF6, 0 0 6px 1px #B983FF'
              }}
            ></div>
            {/* Dots interactivos */}
            {steps.map((_, index) => (
              <div
                key={index}
                className={`absolute top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${
                  index <= currentStepVisual 
                    ? 'bg-white shadow-[0_0_4px_1px_#ffffff]' 
                    : 'bg-gray-500'
                }`}
                style={{ left: `${(index / (steps.length - 1)) * 100}%`, zIndex: 10 }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesignApproach;