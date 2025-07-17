import Icon1 from './assets/ProcessIcons/1.png';
import Icon2 from './assets/ProcessIcons/2.png';
import Icon3 from './assets/ProcessIcons/3.png';
import Icon4 from './assets/ProcessIcons/4.png';
import Icon5 from './assets/ProcessIcons/5.png';
import Icon6 from './assets/ProcessIcons/6.svg';
import { useState, useRef } from 'react';

const steps = [
  {
    icon: Icon1,
    title: 'Onboarding del Proyecto',
    description:
      'Recopilamos toda la información relevante sobre tu proyecto: tu industria, activos de marca (logotipos, colores), usuarios clave, referencias visuales y los objetivos principales de tu negocio.',
  },
  {
    icon: Icon2,
    title: 'Alineación de Diseño',
    description:
      'Presentamos el primer concepto de diseño. Recibimos tus comentarios para que podamos refinar la disposición y los elementos visuales. Esta es una etapa de previsualización, perfecta para solicitar ajustes',
  },
  {
    icon: Icon3,
    title: 'Aprobación de Diseño',
    description:
      'Revisión final del diseño. Basándonos en todos los comentarios anteriores, presentamos la versión completa y pulida del diseño del sitio web. Esta es la última oportunidad para realizar cambios antes de pasar al equipo de desarrollo.',
  },
  {
    icon: Icon4,
    title: 'Ejecución',
    description:
      'Nuestro equipo de desarrollo toma el relevo. Utilizando el diseño aprobado, comenzamos a construir el sitio web. Ambos equipos, de diseño y desarrollo, colaboran para asegurar que cada detalle sea implementado con precisión.',
  },
  {
    icon: Icon5,
    title: 'Lanzamiento',
    description:
      'Revisión final para asegurar que cada elemento esté en su lugar. Una vez aprobado, desplegamos el sitio web en nuestro servidor, dejándolo completamente operativo y listo para tu audiencia.',
  },
  {
    icon: Icon6,
    title: 'Mantenimiento',
    description:
      'El lanzamiento de tu sitio web es solo el comienzo. Esta etapa asegura que tu plataforma se mantenga en línea, optimizada y segura a lo largo del tiempo.',
  },
];

export default function WebProcessStepper() {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Detectar la card centrada al hacer scroll táctil
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const children = Array.from(carouselRef.current.children);
    const scrollLeft = carouselRef.current.scrollLeft;
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
    <section className="py-20 bg-cyber-grey flex justify-center items-center w-full">
      <div className="max-w-5xl w-full flex flex-col items-center px-2">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Proceso de <span className="bg-gradient-to-r from-[#895AF6] to-[#4DE3FF] bg-clip-text text-transparent">Diseño & Desarrollo Web</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 text-center">
          Etapas de desarrollo
        </p>
        {/* Desktop: vertical steps */}
        <div className="hidden md:flex relative w-full flex-col items-center">
          <div className="flex flex-col w-full z-10 gap-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-row items-start w-full relative group">
                {/* Icono y número alineados a la izquierda */}
                <div className="flex flex-col items-center mr-6 relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#895AF6]/60 to-[#4DE3FF]/60 border-2 border-[#23243a] shadow-lg flex items-center justify-center transition-transform duration-300">
                    <img src={step.icon} alt={step.title} className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm border border-[#895AF6] shadow-[0_0_6px_1px_#895AF6AA] bg-gradient-to-br from-[#895AF6] to-[#4DE3FF]">
                    {idx + 1}
                  </span>
                  {/* Conector entre pasos */}
                  {idx < steps.length - 1 && (
                    <div className="w-1 h-10 bg-gradient-to-b from-[#895AF6] to-[#B983FF] opacity-60 z-0 rounded-full mt-2" />
                  )}
                </div>
                {/* Card glassmorphism */}
                <div className="flex-1 w-full rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl px-5 py-5 flex flex-col items-start transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:border-[#895AF6]/40 hover:ring-2 hover:ring-[#895AF6]/30">
                  <h3 className="text-base md:text-lg font-semibold text-white mb-2 text-left drop-shadow group-hover:text-[#B983FF] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base text-left leading-snug group-hover:text-white/90 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Mobile: carrusel táctil scroll-x, sin oscurecer cards */}
        <div className="md:hidden w-full overflow-x-hidden">
          <div className="w-full flex flex-col items-center">
            <div
              className="w-full overflow-x-auto flex snap-x snap-mandatory gap-6 pb-2 pl-[5vw] pr-[5vw]"
              style={{ scrollbarWidth: 'none' }}
              ref={carouselRef}
              onScroll={handleScroll}
            >
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="snap-center flex flex-col items-center justify-center group transition-transform duration-300 min-w-[90vw] max-w-xs mx-auto"
                >
                  <div className="flex flex-col items-center mb-4 relative pt-8 w-full justify-center">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)', boxShadow: '0 0 16px 2px #895AF688' }}>
                      <img src={step.icon} alt={step.title} className="w-8 h-8" />
                    </div>
                    <span className="absolute top-8 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-[#895AF6] shadow-[0_0_12px_2px_#895AF6AA]" style={{ background: 'linear-gradient(135deg, #18192a 60%, #23243a 100%)' }}>
                      {idx + 1}
                    </span>
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
    </section>
  );
} 