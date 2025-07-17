
import { useIsMobile } from '../hooks/use-mobile';
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
  const isMobile = useIsMobile();
  const [currentStep, setCurrentStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

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
        },
        {
          icon: Icon5,
          title: 'Mantenimiento',
          description: 'El lanzamiento de tu sitio web es solo el comienzo. Esta etapa asegura que tu plataforma se mantenga en línea, optimizada y segura a lo largo del tiempo.\n\nSoporte técnico\nActualizaciones de seguridad\nOptimización de rendimiento',
          step: 6
        }
      ]
    : [
        {
          icon: Icon1,
          title: 'Project Onboarding',
          description: 'We gather all relevant information about your project: your industry, brand assets (logos, colors), key users, visual references, and your main business objectives.',
          step: 1
        },
        {
          icon: Icon2,
          title: 'Design Alignment',
          description: 'We present the first design concept. We receive your feedback so we can refine the layout and visual elements. This is a preview stage, perfect for requesting adjustments.',
          step: 2
        },
        {
          icon: Icon3,
          title: 'Design Approval',
          description: `We conduct the final design review. Based on all previous feedback, we present the complete and polished version of the website's design. This is the last opportunity for changes before moving to the development team.`,
          step: 3
        },
        {
          icon: Icon4,
          title: 'Execution',
          description: 'Our development team takes over. Using the approved design, we begin building the website. Both the design and development teams collaborate to ensure every detail is implemented with precision.',
          step: 4
        },
        {
          icon: Icon5,
          title: 'Deployment',
          description: 'We perform a final review to ensure every element is in place. Once approved, we deploy the website to our server, making it fully operational and ready for your audience.',
          step: 5
        },
        {
          icon: Icon5,
          title: 'Support and Maintenance',
          description: 'Launching your website is just the beginning. This stage ensures your platform stays online, optimized, and secure over time.',
          step: 6
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

  // Carousel automático para mobile
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile, steps.length]);

  return (
    <section 
      id="process" 
      className="py-20 bg-cyber-grey flex justify-center items-center w-full min-h-screen"
    >
      <div className="max-w-7xl w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {lang === 'ES' ? (
              <>
                Proceso de <span className="bg-gradient-to-r from-[#895AF6] to-[#4DE3FF] bg-clip-text text-transparent">Diseño & Desarrollo Web</span>
              </>
            ) : (
              <>
                Web <span className="bg-gradient-to-r from-[#895AF6] to-[#4DE3FF] bg-clip-text text-transparent">Design & Development Process</span>
              </>
            )}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {lang === 'ES' ? 'Etapas de desarrollo' : ''}
          </p>
        </div>

        {/* Web/Desktop: todas las cards y navegación clásica */}
        <div style={{ display: isMobile ? 'none' : 'block' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-[#23243a] to-[#18192a] rounded-2xl p-7 border border-white/10 shadow-lg transition-all duration-300 group hover:shadow-2xl hover:scale-[1.03] hover:border-[#895AF6]/40 flex flex-col items-center relative"
              >
                {/* Icono y número centrados arriba */}
                <div className="flex flex-col items-center mb-4 relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#895AF6]/30 to-[#4DE3FF]/30 flex items-center justify-center border border-[#895AF6]/30 shadow-md">
                    <img src={step.icon} alt={`Step ${step.step}`} className="w-8 h-8" />
                  </div>
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-[#895AF6] shadow-[0_0_8px_2px_#895AF6AA] bg-gradient-to-br from-[#895AF6] to-[#4DE3FF]">
                    {step.step}
                  </span>
                </div>
                {/* Título */}
                <h3 className="text-xl font-bold text-white mb-3 text-center drop-shadow">{step.title}</h3>
                {/* Descripción */}
                {((lang === 'ES' && step.title === 'Mantenimiento') || (lang === 'EN' && step.title === 'Support and Maintenance')) ? (
                  <>
                    <p className="text-base text-gray-300 mb-3 text-left">
                      {lang === 'ES'
                        ? 'Esta etapa asegura que tu plataforma se mantenga en línea, optimizada y segura a lo largo del tiempo.'
                        : 'This stage ensures your platform stays online, optimized, and secure over time.'}
                    </p>
                    <ul className="list-disc pl-5 text-base text-gray-300 space-y-1 mb-2 text-left">
                      <li>{lang === 'ES' ? 'Soporte técnico' : 'Technical support'}</li>
                      <li>{lang === 'ES' ? 'Actualizaciones de seguridad' : 'Security updates'}</li>
                      <li>{lang === 'ES' ? 'Optimización de rendimiento' : 'Performance optimization'}</li>
                    </ul>
                  </>
                ) : (
                  <p className="text-base text-gray-300 mb-2 text-left">{step.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: carousel slider */}
        <div style={{ display: isMobile ? 'block' : 'none' }}>
          <div className="flex justify-center">
            <div className="cyber-card p-6 rounded-xl border border-white/5 flex flex-col items-center w-full max-w-xs mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#895AF6]/20 to-[#4DE3FF]/20 flex items-center justify-center border border-[#895AF6]/30 z-20">
                  <img src={steps[carouselIndex].icon} alt={`Step ${steps[carouselIndex].step}`} className="w-5 h-5" />
                </div>
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-[#895AF6] shadow-[0_0_12px_2px_#895AF6AA]"
                  style={{ background: 'linear-gradient(135deg, #18192a 60%, #23243a 100%)' }}>
                  {steps[carouselIndex].step}
                </div>
                <h3 className="text-base font-bold text-white ml-2 text-center">
                  {steps[carouselIndex].title}
                </h3>
              </div>
              {((lang === 'ES' && steps[carouselIndex].title === 'Mantenimiento') || (lang === 'EN' && steps[carouselIndex].title === 'Support and Maintenance')) ? (
                <>
                  <p className="text-base text-gray-300 mb-4 text-left">
                    {lang === 'ES'
                      ? 'Esta etapa asegura que tu plataforma se mantenga en línea, optimizada y segura a lo largo del tiempo.'
                      : 'This stage ensures your platform stays online, optimized, and secure over time.'}
                  </p>
                  <ul className="list-disc pl-6 text-base text-gray-300 space-y-1 mb-4 text-left">
                    <li>{lang === 'ES' ? 'Soporte técnico' : 'Technical support'}</li>
                    <li>{lang === 'ES' ? 'Actualizaciones de seguridad' : 'Security updates'}</li>
                    <li>{lang === 'ES' ? 'Optimización de rendimiento' : 'Performance optimization'}</li>
                  </ul>
                </>
              ) : (
                <p className="text-base text-gray-300 mb-4 text-left">{steps[carouselIndex].description}</p>
              )}
            </div>
          </div>
          {/* Indicadores del carousel */}
          <div className="flex justify-center mt-4 gap-2">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setCarouselIndex(i)}
                className={`w-3 h-3 rounded-full border transition-colors duration-200 ${carouselIndex === i ? 'bg-agaru-purple border-agaru-purple' : 'bg-cyber-grey border-gray-600'}`}
                aria-label={`Paso ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesignApproach;