
import { Building, TrendingUp, Palette, Calendar, FileText } from 'lucide-react';
import { useState, useRef } from 'react';

interface BrandingApproachProps {
  lang: 'ES' | 'EN';
}

const BrandingApproach = ({ lang }: BrandingApproachProps) => {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const steps = lang === 'ES'
    ? [
        {
          icon: <Building className="w-8 h-8" />,
          title: 'Fundamentos de Marca',
          description: 'Comenzamos entendiendo profundamente los valores, misión, oferta, audiencia y objetivos de tu negocio. Esta base guía todo el proceso y asegura que cada acción esté alineada a tus necesidades.',
        },
        {
          icon: <TrendingUp className="w-8 h-8" />,
          title: 'Estrategia de Marketing',
          description: 'Nuestros estrategas digitales investigan tendencias, comportamientos y competencia para identificar las mejores oportunidades de crecimiento.',
        },
        {
          icon: <Palette className="w-8 h-8" />,
          title: 'Identidad de Marca',
          description: 'En colaboración, creamos el contenido y el diseño que capturan tu identidad única, desde el logo hasta la misión y los mensajes clave de tu comunicación digital.',
        },
        {
          icon: <Calendar className="w-8 h-8" />,
          title: 'Planificación de Campañas',
          description: 'Desarrollamos una estrategia de marketing personalizada, definiendo propuesta de valor, canales y mensajes clave para tus campañas.',
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: 'Hoja de Ruta',
          description: 'Compilamos todo en un Marketing Brief claro y accionable para que tu equipo o partners puedan lanzar y gestionar campañas efectivas.',
        },
      ]
    : [
        {
          icon: <Building className="w-8 h-8" />,
          title: 'Brand Foundation',
          description: 'We begin by deeply understanding your business values, core mission, key offerings, target audience, and primary objectives. This foundational insight then serves as our guiding principle, ensuring everything we do is precisely tailored to your specific needs.',
        },
        {
          icon: <TrendingUp className="w-8 h-8" />,
          title: 'Marketing Strategy',
          description: 'Our digital strategists execute comprehensive research across market trends, consumer behaviors, and competitor landscapes. This meticulous process yields actionable insights, helping us identify and target the most promising areas for your growth.',
        },
        {
          icon: <Palette className="w-8 h-8" />,
          title: 'Brand Identity Design',
          description: 'Through continuous collaboration with your key stakeholders, we meticulously craft content that truly embodies your unique identity. We cover every detail, from designing your logo to developing your mission statements and all web content.',
        },
        {
          icon: <Calendar className="w-8 h-8" />,
          title: 'Campaign Planning',
          description: 'Building on our insights, we develop a tailored marketing strategy. This involves defining your unique value proposition, identifying optimal channels, and outlining key messages that will resonate with your audience, forming the backbone for future campaigns.',
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: 'Marketing Roadmap',
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
    <section className="py-20 bg-gradient-to-b from-cyber-grey to-cyber-dark md:overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:overflow-x-hidden">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {lang === 'ES'
              ? <>
                  Proceso de <span className="bg-gradient-to-r from-[#895AF6] via-[#B983FF] to-[#4DE3FF] bg-clip-text text-transparent drop-shadow-[0_0_16px_#895AF6]">Branding y Marketing</span>
                </>
              : <>
                  <span className="bg-gradient-to-r from-[#895AF6] via-[#B983FF] to-[#4DE3FF] bg-clip-text text-transparent drop-shadow-[0_0_16px_#895AF6]">Branding & Marketing</span> <span className="text-white">Process</span>
                </>
            }
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4 md:mb-0">
            {lang === 'ES'
              ? '¿Cómo funciona?'
              : 'Our comprehensive branding process transforms your vision into a cohesive, powerful brand identity that resonates with your target audience.'}
          </p>
        </div>

        {/* Desktop: cards en columna o fila */}
        <div className="hidden md:block space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 animate-fade-in ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step Number and Icon */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)', boxShadow: '0 0 16px 2px #895AF688' }}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-[#895AF6] shadow-[0_0_12px_2px_#895AF6AA]"
                    style={{ background: 'linear-gradient(135deg, #18192a 60%, #23243a 100%)' }}>
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 cyber-card p-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-[#895AF6]/40 border border-white/5">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: carrusel táctil scroll-x, sin oscurecer cards */}
        <div className="md:hidden w-full overflow-x-hidden">
          <div className="relative z-10 overflow-visible">
            <div className="w-full flex flex-col items-center pt-12">
              <div
                className="w-full overflow-x-auto flex snap-x snap-mandatory gap-6 pb-2 pl-[5vw] pr-[5vw]"
                style={{ scrollbarWidth: 'none' }}
                ref={carouselRef}
                onScroll={handleScroll}
              >
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="snap-center flex flex-col items-center group transition-transform duration-300 min-w-[90vw] max-w-xs mx-auto"
                  >
                    <div className="flex flex-col items-center mb-4 relative pt-0">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)', boxShadow: '0 0 16px 2px #895AF688' }}>
                        <div className="text-white">
                          {step.icon}
                        </div>
                      </div>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-[#895AF6] shadow-[0_0_12px_2px_#895AF6AA]"
                        style={{ background: 'linear-gradient(135deg, #18192a 60%, #23243a 100%)' }}>
                        {idx + 1}
                      </div>
                    </div>
                    <div className="w-full min-h-[220px] cyber-card p-6 rounded-xl border border-white/5 flex flex-col items-center">
                      <h3 className="text-xl font-bold text-white mb-4 text-center">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 text-base text-center leading-relaxed">
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
