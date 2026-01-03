
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
      className="py-20 bg-black overflow-y-hidden md:overflow-y-hidden overflow-x-hidden w-full"
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

        {/* Desktop: cards en columna o fila */}
        <div className="hidden md:block space-y-8 overflow-x-hidden overflow-y-hidden">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 animate-fade-in mx-auto max-w-4xl group ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } ${index === 0 ? 'mt-4' : ''} ${index === 4 ? '!mb-4' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >

              {/* Content */}
              {index === 0 ? (
                <div className="flex-1 bg-[#262626] rounded-2xl p-5 border border-white/10 transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:border-[#895AF6]/40 hover:ring-2 hover:ring-[#895AF6]/30 flex flex-col justify-center min-h-[90px] max-w-4xl group">
                  <h3 className="text-[16px] md:text-xl font-manrope font-bold mb-1 transition-colors duration-300 group-hover:text-[#B983FF] text-white">{step.title}</h3>
                  <p className="text-gray-300 text-base font-manrope leading-relaxed group-hover:text-white/90 transition-colors duration-300">{step.description}</p>
                </div>
              ) : (
                <div className="flex-1 bg-[#262626] p-5 rounded-2xl transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:border-[#895AF6]/40 hover:ring-2 hover:ring-[#895AF6]/30 border border-white/5 min-h-[90px] max-w-4xl group">
                  <h3 className="text-[16px] md:text-xl font-manrope font-bold mb-1 transition-colors duration-300 group-hover:text-[#B983FF] text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-base font-manrope leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: carrusel táctil scroll-x, sin oscurecer cards */}
        <div className="md:hidden w-full overflow-x-hidden">
          <div className="relative z-10 overflow-visible">
            <div className="w-full flex flex-col items-center pt-4">
              <div
                className="w-full overflow-x-auto flex snap-x snap-mandatory gap-6 pb-2 pl-4 pr-4"
                style={{ scrollbarWidth: 'none' }}
                ref={carouselRef}
                onScroll={handleScroll}
              >
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="snap-center flex flex-col items-center group transition-transform duration-300 min-w-[90vw] max-w-xs mx-auto pt-8"
                  >
                    <div className="w-full min-h-[220px] cyber-card p-6 rounded-xl border border-white/5 flex flex-col items-center pt-6">
                      <h3 className="text-[16px] md:text-xl font-manrope font-bold text-white mb-4 text-center">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 text-base font-manrope text-center leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Indicadores debajo de la card */}
              <div className="flex gap-2 mt-4">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    className={`w-2.5 h-2.5 rounded-full border transition-colors duration-200 ${current === i ? 'bg-agaru-purple border-agaru-purple' : 'bg-cyber-grey border-gray-600'}`}
                    onClick={() => setCurrent(i)}
                    aria-label={`Paso ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingApproach;
