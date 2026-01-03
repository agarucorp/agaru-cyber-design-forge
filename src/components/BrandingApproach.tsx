
import { Target, TrendingUp, Fingerprint, Calendar, FileText } from 'lucide-react';
import { useState, useRef } from 'react';
import { ScrollAnimate } from './ScrollAnimate';

interface BrandingApproachProps {
  lang: 'ES' | 'EN';
}

const BrandingApproach = ({ lang }: BrandingApproachProps) => {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const steps = lang === 'ES'
    ? [
        {
          icon: <Target className="w-8 h-8" />,
          title: 'Fundamentos de marca',
          description: 'Comenzamos entendiendo los valores, misión, audiencia y objetivos de tu negocio. Esta base guía todo el proceso y asegura que cada acción esté alineada a tus necesidades.',
        },
        {
          icon: <TrendingUp className="w-8 h-8" />,
          title: 'Estrategia de marketing',
          description: 'Nuestros estrategas investigan tendencias, comportamientos y competencia para identificar las mejores oportunidades de crecimiento.',
        },
        {
          icon: <Fingerprint className="w-8 h-8" />,
          title: 'Identidad de marca',
          description: 'En colaboración, creamos el contenido y el diseño que capturan tu identidad única, desde el logo hasta la misión y los mensajes clave de tu comunicación digital.',
        },
        {
          icon: <Calendar className="w-8 h-8" />,
          title: 'Planificación de campañas',
          description: 'Desarrollamos una estrategia de marketing personalizada, definiendo propuesta de valor, canales y mensajes clave para tus campañas.',
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: 'Hoja de ruta',
          description: 'Compilamos todo en un Marketing Brief claro y accionable para que tu equipo o partners puedan lanzar y gestionar campañas efectivas.',
        },
      ]
    : [
        {
          icon: <Target className="w-8 h-8" />,
          title: 'Brand Foundation',
          description: 'We begin by deeply understanding your business values, core mission, key offerings, target audience, and primary objectives. This foundational insight then serves as our guiding principle, ensuring everything we do is precisely tailored to your specific needs.',
        },
        {
          icon: <TrendingUp className="w-8 h-8" />,
          title: 'Marketing strategy',
          description: 'Our strategists execute comprehensive research across market trends, consumer behaviors, and competitor landscapes. This meticulous process yields actionable insights, helping us identify and target the most promising areas for your growth.',
        },
        {
          icon: <Fingerprint className="w-8 h-8" />,
          title: 'Brand identity design',
          description: 'Through continuous collaboration with your key stakeholders, we meticulously craft content that truly embodies your unique identity. We cover every detail, from designing your logo to developing your mission statements and all web content.',
        },
        {
          icon: <Calendar className="w-8 h-8" />,
          title: 'Campaign planning',
          description: 'Building on our insights, we develop a tailored marketing strategy. This involves defining your unique value proposition, identifying optimal channels, and outlining key messages that will resonate with your audience, forming the backbone for future campaigns.',
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: 'Marketing roadmap',
          description: 'We compile all gathered insights, strategies, and identity guidelines into a clear, actionable Marketing Brief. This document empowers your team or partners to effectively launch and manage future campaigns, ensuring consistency and impact.',
        },
      ];

  // Detectar la card centrada al hacer scroll táctil
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const children = Array.from(carouselRef.current.children);
    const scrollLeft = carouselRef.current.scrollLeft;
    const cardWidth = carouselRef.current.offsetWidth;
    let minDiff = Infinity;
    let activeIdx = 0;
    children.forEach((child, idx) => {
      const el = child as HTMLElement;
      const diff = Math.abs(el.offsetLeft - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        activeIdx = idx;
      }
    });
    setCurrent(activeIdx);
  };

  return (
    <section
      id="branding-approach"
      className="pt-20 pb-20 bg-black overflow-y-hidden md:overflow-y-hidden overflow-x-hidden w-full"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h2 className="text-[24px] md:text-5xl font-onest font-bold text-white mb-6">
            {lang === 'ES'
              ? <>
                  Proceso de <span className="text-[#895AF6]">branding y marketing</span>
                </>
              : <>
                  <span className="text-[#895AF6]">Branding & Marketing</span> <span className="text-white">Process</span>
                </>
            }
          </h2>
        </div>

        {/* Desktop: Mapa orgánico con líneas curvas fluidas */}
        <div className="hidden md:flex relative w-full items-start justify-center mt-0 mb-0 pt-0" style={{ minHeight: '520px', paddingTop: '0', marginTop: '0' }}>
          {/* SVG para las líneas curvas orgánicas de conexión */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
            <defs>
              <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#895AF6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#895AF6" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#895AF6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#895AF6" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#895AF6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#895AF6" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="lineGradient4" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#895AF6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#895AF6" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            
            {/* Línea curva orgánica 1 -> 2 (arco suave horizontal) */}
            <path
              d="M 200 80 Q 400 60, 600 80"
              stroke="url(#lineGradient1)"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray="10,6"
              className="animate-pulse"
              style={{ animationDuration: '3s' }}
            />
            
            {/* Línea curva orgánica 2 -> 3 (arco descendente diagonal) */}
            <path
              d="M 600 80 Q 450 200, 200 240"
              stroke="url(#lineGradient2)"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray="10,6"
              className="animate-pulse"
              style={{ animationDuration: '3.5s', animationDelay: '0.3s' }}
            />
            
            {/* Línea curva orgánica 3 -> 4 (arco horizontal) */}
            <path
              d="M 200 240 Q 400 260, 600 240"
              stroke="url(#lineGradient3)"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray="10,6"
              className="animate-pulse"
              style={{ animationDuration: '3s', animationDelay: '0.6s' }}
            />
            
            {/* Línea curva orgánica 4 -> 5 (arco descendente final) */}
            <path
              d="M 600 240 Q 450 360, 200 400"
              stroke="url(#lineGradient4)"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray="10,6"
              className="animate-pulse"
              style={{ animationDuration: '3.5s', animationDelay: '0.9s' }}
            />
          </svg>

          {/* Contenedor de cards con posicionamiento orgánico */}
          <div className="relative w-full max-w-6xl z-10">
            {steps.map((step, idx) => {
              // Posiciones orgánicas para cada card (patrón tipo S fluido) - Espaciado aumentado
              const positions = [
                { left: '8%', top: '0px' },        // Card 1: Izquierda arriba
                { left: '52%', top: '0px' },      // Card 2: Derecha arriba
                { left: '8%', top: '160px' },     // Card 3: Izquierda medio
                { left: '52%', top: '160px' },    // Card 4: Derecha medio
                { left: '8%', top: '320px' },     // Card 5: Izquierda abajo
              ];

              const position = positions[idx];

              return (
                <div
                  key={idx}
                  className="absolute group"
                  style={{
                    left: position.left,
                    top: position.top,
                    width: '42%',
                  }}
                >
                  {/* Card con efecto glassmorphism mejorado */}
                  <div className="relative w-full rounded-2xl bg-[#262626] shadow-xl px-5 py-5 flex flex-col items-start transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-2xl hover:ring-2 hover:ring-[#895AF6]/30">
                    {/* Indicador decorativo sutil en el borde superior izquierdo */}
                    <div className="absolute -left-1 -top-1 w-4 h-4">
                      <div className="w-full h-full rounded-full bg-[#895AF6]/30 border border-[#895AF6]/50 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#895AF6] animate-pulse" style={{ animationDuration: '2s' }}></div>
                      </div>
                    </div>

                    <h3 className="text-[16px] md:text-xl font-manrope font-bold mb-1 transition-colors duration-300 group-hover:text-[#B983FF] text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm font-manrope leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Layout vertical con líneas curvas orgánicas */}
        <div className="md:hidden w-full overflow-x-hidden">
          <div className="relative w-full px-4 py-8">
            {/* SVG para líneas curvas en mobile */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible', height: '100%' }}>
              <defs>
                <linearGradient id="mobileLineGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#895AF6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#895AF6" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="mobileLineGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#895AF6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#895AF6" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="mobileLineGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#895AF6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#895AF6" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="mobileLineGradient4" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#895AF6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#895AF6" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              
              {/* Líneas curvas verticales que conectan las cards */}
              <path
                d="M 40 80 Q 50 120, 40 160"
                stroke="url(#mobileLineGradient1)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="6,4"
              />
              <path
                d="M 40 160 Q 50 200, 40 240"
                stroke="url(#mobileLineGradient2)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="6,4"
              />
              <path
                d="M 40 240 Q 50 280, 40 320"
                stroke="url(#mobileLineGradient3)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="6,4"
              />
              <path
                d="M 40 320 Q 50 360, 40 400"
                stroke="url(#mobileLineGradient4)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="6,4"
              />
            </svg>

            {/* Cards en layout vertical */}
            <div className="relative space-y-6">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative group ml-12"
                >
                  {/* Indicador decorativo a la izquierda */}
                  <div className="absolute -left-8 top-6 w-4 h-4">
                    <div className="w-full h-full rounded-full bg-[#895AF6]/30 border border-[#895AF6]/50 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#895AF6] animate-pulse" style={{ animationDuration: '2s' }}></div>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="rounded-2xl bg-[#262626] shadow-xl px-5 py-5 flex flex-col items-start transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl hover:ring-2 hover:ring-[#895AF6]/30">
                    <h3 className="text-[16px] font-manrope font-bold mb-1 transition-colors duration-300 group-hover:text-[#B983FF] text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm font-manrope leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingApproach;
